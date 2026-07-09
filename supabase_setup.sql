-- ============================================
-- PROVIDENCE INSURANCE AGENCY — SUPABASE SETUP
-- Safe to run even if the 3 tables already exist.
-- ============================================

-- 1. TIKTOK LINKS (max 3 slots)
create table if not exists public.tiktok_links (
  id         uuid primary key default gen_random_uuid(),
  url        text not null,
  position   int  not null check (position between 1 and 3),
  active     boolean default true,
  created_at timestamptz default now(),
  constraint tiktok_links_position_unique unique (position),
  -- Defense in depth: reject non-TikTok URLs even if someone bypasses the UI
  -- and calls the API directly. Mirrors the check in src/lib/validators.ts.
  constraint tiktok_links_url_is_tiktok check (
    url ~* '^https://(www\.|vm\.|vt\.|m\.)?tiktok\.com/'
  )
);

-- 2. BANNER IMAGES
create table if not exists public.banner_images (
  id         uuid primary key default gen_random_uuid(),
  label      text,
  image_url  text not null,
  active     boolean default true,
  sort_order int default 0,
  created_at timestamptz default now()
);

-- 3. SERVICES
create table if not exists public.services (
  id           uuid primary key default gen_random_uuid(),
  slug         text unique not null,
  category     text not null check (category in ('insurance', 'taxes', 'notary')),
  sub_category text not null check (sub_category in ('personal', 'commercial')),
  active       boolean default true,
  icon_url     text,
  title_es     text,
  title_en     text,
  cover_es     text,
  cover_en     text,
  why_es       text,
  why_en       text,
  who_es       text,
  who_en       text,
  sort_order   int default 0,
  created_at   timestamptz default now(),
  updated_at   timestamptz default now()
);

-- Auto-update updated_at on services
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists services_updated_at on public.services;
create trigger services_updated_at
  before update on public.services
  for each row execute function update_updated_at();

-- ============================================
-- ADMIN ALLOWLIST
-- ============================================
-- IMPORTANT: "authenticated" in Supabase means ANY logged-in user, not just
-- your admin. If your project has public sign-ups enabled, anyone could
-- self-register and — under the old policies below — get full write access
-- to every table and storage bucket. This table + is_admin() restricts the
-- "authenticated" policies to only the email(s) listed here.
--
-- After running this script, add your admin login email:
--   insert into public.admins (email) values ('you@example.com');
-- And in the Supabase dashboard: Authentication > Providers > Email,
-- disable "Allow new users to sign up" (you don't need public sign-up for
-- a single-admin panel).

create table if not exists public.admins (
  email text primary key
);

alter table public.admins enable row level security;
-- No policies granted here on purpose: only the SQL editor / service role
-- can manage this table. Regular clients can't read or write it directly.

create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1 from public.admins where email = auth.jwt() ->> 'email'
  );
$$;

-- ============================================
-- ROW LEVEL SECURITY
-- ============================================

alter table public.tiktok_links  enable row level security;
alter table public.banner_images enable row level security;
alter table public.services      enable row level security;

-- Public (anonymous): read only active records
drop policy if exists "Public read tiktok_links" on public.tiktok_links;
create policy "Public read tiktok_links"
  on public.tiktok_links for select
  using (active = true);

drop policy if exists "Public read banner_images" on public.banner_images;
create policy "Public read banner_images"
  on public.banner_images for select
  using (active = true);

drop policy if exists "Public read services" on public.services;
create policy "Public read services"
  on public.services for select
  using (active = true);

-- Admin (authenticated): full access to everything
drop policy if exists "Admin full access tiktok_links" on public.tiktok_links;
create policy "Admin full access tiktok_links"
  on public.tiktok_links for all
  to authenticated
  using (is_admin()) with check (is_admin());

drop policy if exists "Admin full access banner_images" on public.banner_images;
create policy "Admin full access banner_images"
  on public.banner_images for all
  to authenticated
  using (is_admin()) with check (is_admin());

drop policy if exists "Admin full access services" on public.services;
create policy "Admin full access services"
  on public.services for all
  to authenticated
  using (is_admin()) with check (is_admin());

-- ============================================
-- STORAGE BUCKETS
-- ============================================

insert into storage.buckets (id, name, public)
values
  ('banners',       'banners',       true),
  ('service-icons', 'service-icons', true)
on conflict (id) do nothing;

-- Public read storage
drop policy if exists "Public read banners" on storage.objects;
create policy "Public read banners"
  on storage.objects for select
  using (bucket_id = 'banners');

drop policy if exists "Public read service-icons" on storage.objects;
create policy "Public read service-icons"
  on storage.objects for select
  using (bucket_id = 'service-icons');

-- Admin manage storage
drop policy if exists "Admin manage banners" on storage.objects;
create policy "Admin manage banners"
  on storage.objects for all
  to authenticated
  using (bucket_id = 'banners' and is_admin())
  with check (bucket_id = 'banners' and is_admin());

drop policy if exists "Admin manage service-icons" on storage.objects;
create policy "Admin manage service-icons"
  on storage.objects for all
  to authenticated
  using (bucket_id = 'service-icons' and is_admin())
  with check (bucket_id = 'service-icons' and is_admin());

-- ============================================
-- REALTIME (so admin edits push live to the public site)
-- ============================================

do $$
begin
  alter publication supabase_realtime add table public.tiktok_links;
exception when duplicate_object then null;
end $$;

do $$
begin
  alter publication supabase_realtime add table public.banner_images;
exception when duplicate_object then null;
end $$;

do $$
begin
  alter publication supabase_realtime add table public.services;
exception when duplicate_object then null;
end $$;

-- ============================================
-- ONE-TIME MANUAL STEP
-- ============================================
-- Uncomment and run with YOUR admin login email (the one you use on
-- /admin/login), then also disable public sign-ups in the Supabase
-- dashboard (Authentication > Providers > Email > "Allow new users to
-- sign up" = off).
--
-- insert into public.admins (email) values ('you@example.com')
-- on conflict (email) do nothing;
