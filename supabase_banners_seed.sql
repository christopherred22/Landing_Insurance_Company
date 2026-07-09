-- ============================================
-- SEED: restore the 3 hero carousel images as editable rows
-- ============================================
-- InicioView.vue's hero carousel falls back to 3 hardcoded images
-- (src/assets/family.png, workers.png, bakers.png) whenever banner_images
-- has no active rows. That's why they show on the public site but can't be
-- edited/replaced/reordered from the admin panel — they were never real
-- rows. Copied the files to public/hero-banners/*.png (stable static paths,
-- same approach as the service icons) and seeding them here so they become
-- normal, editable banner_images rows.
--
-- Safe to run once. Skips if rows with these image_url values already exist.

insert into public.banner_images (image_url, label, active, sort_order)
select * from (values
  ('/hero-banners/family.png',  'Family',    true, 0),
  ('/hero-banners/workers.png', 'Insurance', true, 1),
  ('/hero-banners/bakers.png',  'Notary',    true, 2)
) as v(image_url, label, active, sort_order)
where not exists (
  select 1 from public.banner_images b where b.image_url = v.image_url
);
