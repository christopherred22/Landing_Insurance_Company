<template>
  <footer class="main-footer">
    <div class="footer-container">
      <div class="footer-col brand-col">
              <div class="footer-logo">
  <RouterLink :to="{ name: 'home', params: { locale } }">
    <img src="@/assets/logoF.png" alt="Providence Insurance Agency" />
  </RouterLink>
</div>
        <p class="brand-description">
          {{ t('footer.brand.line1') }}<br />
          {{ t('footer.brand.line2') }}
        </p>
      </div>

      <div class="footer-col links-col">
        <h4>{{ t('footer.links.title') }}</h4>
        <ul>
  <li>
    <RouterLink :to="{ name: 'home', params: { locale } }">
      {{ t('footer.links.home') }}
    </RouterLink>
  </li>

  <li>
    <RouterLink :to="{ name: 'services', params: { locale } }">
      {{ t('footer.links.services') }}
    </RouterLink>
  </li>

  <li>
    <RouterLink :to="{ name: 'about', params: { locale } }">
      {{ t('footer.links.about') }}
    </RouterLink>
  </li>

  <li>
    <RouterLink :to="{ name: 'contact', params: { locale } }">
      {{ t('footer.links.contact') }}
    </RouterLink>
  </li>
</ul>

      </div>

      <div class="footer-col compliance-col">
        <h4>{{ t('footer.compliance.title') }}</h4>
          <ul>
            <li>
              <a href="#" @click.prevent="showPrivacy = true">
                {{ t('footer.compliance.privacy') }}
              </a>
            </li>
          </ul>
      </div>

      <div class="footer-col contact-col">
        <h4>{{ t('footer.social.title') }}</h4>
        <div class="social-icons">
          <a href="https://www.tiktok.com/@providenceinsurance_tn" aria-label="TikTok">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.5" d="M23.801 4.7C22.4935 3.39921 21.7728 1.729 21.773 0H15.861V20.6667C15.8163 21.7853 15.2746 22.8451 14.3501 23.6225C13.4256 24.3999 12.1906 24.834 10.9056 24.8333C8.18878 24.8333 5.93112 22.9 5.93112 20.5C5.93112 17.6333 9.10714 15.4833 12.3788 16.3667V11.1C5.77806 10.3333 0 14.8 0 20.5C0 26.05 5.28061 30 10.8865 30C16.8941 30 21.773 25.75 21.773 20.5V10.0167C24.1703 11.5164 27.0485 12.3211 30 12.3167V7.16667C30 7.16667 26.4031 7.31667 23.801 4.7Z" fill="#012148"/>
            </svg>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61586287780178" aria-label="Facebook">
            <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.5">
                <path d="M33.9167 18.5002C33.9167 9.99016 27.01 3.0835 18.5 3.0835C9.99 3.0835 3.08333 9.99016 3.08333 18.5002C3.08333 25.9618 8.38666 32.1747 15.4167 33.6085V23.1252H12.3333V18.5002H15.4167V14.646C15.4167 11.6706 17.8371 9.25016 20.8125 9.25016H24.6667V13.8752H21.5833C20.7354 13.8752 20.0417 14.5689 20.0417 15.4168V18.5002H24.6667V23.1252H20.0417V33.8397C27.8271 33.0689 33.9167 26.5014 33.9167 18.5002Z" fill="#012148"/>
              </g>
            </svg>
          </a>
          <a href="https://www.instagram.com/providenceinsurance_agency/ " aria-label="Instagram">
            <svg width="33" height="31" viewBox="0 0 33 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.5" d="M9.57 0H23.43C28.71 0 33 4.03 33 8.99V22.01C33 24.3943 31.9917 26.6809 30.197 28.3669C28.4023 30.0528 25.9681 31 23.43 31H9.57C4.29 31 0 26.97 0 22.01V8.99C0 6.6057 1.00827 4.31906 2.80299 2.63311C4.59771 0.947158 7.03188 0 9.57 0ZM9.24 3.1C7.66461 3.1 6.15375 3.68789 5.03979 4.73434C3.92582 5.7808 3.3 7.20009 3.3 8.68V22.32C3.3 25.4045 5.9565 27.9 9.24 27.9H23.76C25.3354 27.9 26.8462 27.3121 27.9602 26.2657C29.0742 25.2192 29.7 23.7999 29.7 22.32V8.68C29.7 5.5955 27.0435 3.1 23.76 3.1H9.24ZM25.1625 5.425C25.7095 5.425 26.2341 5.62913 26.6209 5.99248C27.0077 6.35583 27.225 6.84864 27.225 7.3625C27.225 7.87636 27.0077 8.36917 26.6209 8.73252C26.2341 9.09587 25.7095 9.3 25.1625 9.3C24.6155 9.3 24.0909 9.09587 23.7041 8.73252C23.3173 8.36917 23.1 7.87636 23.1 7.3625C23.1 6.84864 23.3173 6.35583 23.7041 5.99248C24.0909 5.62913 24.6155 5.425 25.1625 5.425ZM16.5 7.75C18.688 7.75 20.7865 8.56651 22.3336 10.0199C23.8808 11.4733 24.75 13.4446 24.75 15.5C24.75 17.5554 23.8808 19.5267 22.3336 20.9801C20.7865 22.4335 18.688 23.25 16.5 23.25C14.312 23.25 12.2135 22.4335 10.6664 20.9801C9.11919 19.5267 8.25 17.5554 8.25 15.5C8.25 13.4446 9.11919 11.4733 10.6664 10.0199C12.2135 8.56651 14.312 7.75 16.5 7.75ZM16.5 10.85C15.1872 10.85 13.9281 11.3399 12.9998 12.212C12.0715 13.084 11.55 14.2667 11.55 15.5C11.55 16.7333 12.0715 17.916 12.9998 18.788C13.9281 19.6601 15.1872 20.15 16.5 20.15C17.8128 20.15 19.0719 19.6601 20.0002 18.788C20.9285 17.916 21.45 16.7333 21.45 15.5C21.45 14.2667 20.9285 13.084 20.0002 12.212C19.0719 11.3399 17.8128 10.85 16.5 10.85Z" fill="#012148"/>
            </svg>
          </a>
           <a href="https://youtube.com/@providenceinsuranceagency4591?si=vT9A0IswD7hczZht" aria-label="YouTube"><span>
            <svg width="38" height="31" viewBox="0 0 38 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M19 0C20.6245 0 22.2908 0.0426252 23.9058 0.112375L25.8134 0.205375L27.6393 0.315813L29.3493 0.434L30.9111 0.558C32.6063 0.689539 34.2015 1.42684 35.4159 2.64004C36.6303 3.85324 37.3859 5.46452 37.5497 7.19006L37.6257 8.0135L37.7682 9.77662C37.9012 11.6037 38 13.5954 38 15.5C38 17.4046 37.9012 19.3963 37.7682 21.2234L37.6257 22.9865L37.5497 23.8099C37.3859 25.5358 36.63 27.1473 35.4152 28.3605C34.2004 29.5738 32.6047 30.3109 30.9092 30.442L29.3512 30.5641L27.6412 30.6842L25.8134 30.7946L23.9058 30.8876C22.2715 30.9598 20.6359 30.9973 19 31C17.3641 30.9973 15.7285 30.9598 14.0942 30.8876L12.1866 30.7946L10.3607 30.6842L8.6507 30.5641L7.0889 30.442C5.39375 30.3105 3.79848 29.5732 2.58408 28.36C1.36969 27.1468 0.614062 25.5355 0.4503 23.8099L0.3743 22.9865L0.2318 21.2234C0.0870822 19.319 0.00976532 17.41 0 15.5C0 13.5954 0.0988 11.6037 0.2318 9.77662L0.3743 8.0135L0.4503 7.19006C0.613999 5.46482 1.36935 3.85379 2.58336 2.64063C3.79737 1.42747 5.39218 0.689975 7.087 0.558L8.6469 0.434L10.3569 0.315813L12.1847 0.205375L14.0923 0.112375C15.7273 0.0401589 17.3635 0.00269231 19 0ZM15.2 10.8016V20.1984C15.2 21.0936 16.15 21.6516 16.91 21.2059L24.89 16.5075C25.0636 16.4056 25.2079 16.2588 25.3082 16.0819C25.4085 15.905 25.4613 15.7043 25.4613 15.5C25.4613 15.2957 25.4085 15.095 25.3082 14.9181C25.2079 14.7412 25.0636 14.5944 24.89 14.4925L16.91 9.796C16.7366 9.69394 16.54 9.64022 16.3398 9.64025C16.1396 9.64029 15.943 9.69407 15.7697 9.79619C15.5964 9.8983 15.4525 10.0452 15.3525 10.222C15.2525 10.3988 15.1999 10.5994 15.2 10.8035V10.8016Z" fill="#7B8B9F"/>
            </svg>
          <a href="http://wa.me/16156250165" aria-label="WhatsApp"><span>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
             <g opacity="0.5">
             <path d="M25.6281 4.36507C24.2458 2.97623 22.5995 1.87503 20.7852 1.12562C18.9708 0.376218 17.0247 -0.00639474 15.0603 8.08425e-05C6.82914 8.08425e-05 0.120603 6.67506 0.120603 14.865C0.120603 17.49 0.81407 20.04 2.11055 22.29L0 30L7.91457 27.93C10.1005 29.115 12.5578 29.745 15.0603 29.745C23.2915 29.745 30 23.07 30 14.88C30 10.9051 28.4472 7.17006 25.6281 4.36507ZM15.0603 27.225C12.8291 27.225 10.6432 26.625 8.72864 25.5L8.27638 25.23L3.57286 26.46L4.82412 21.9L4.52261 21.435C3.28274 19.4656 2.62451 17.1889 2.62312 14.865C2.62312 8.05506 8.201 2.50507 15.0452 2.50507C18.3618 2.50507 21.4824 3.79507 23.8191 6.13506C24.9763 7.28086 25.8933 8.64387 26.517 10.145C27.1407 11.6462 27.4586 13.2557 27.4523 14.88C27.4824 21.69 21.9045 27.225 15.0603 27.225ZM21.8744 17.985C21.4975 17.805 19.6583 16.905 19.3266 16.77C18.9799 16.65 18.7387 16.59 18.4824 16.95C18.2261 17.325 17.5176 18.165 17.3065 18.405C17.0955 18.66 16.8693 18.69 16.4925 18.495C16.1156 18.315 14.9095 17.91 13.4925 16.65C12.3769 15.66 11.6382 14.445 11.4121 14.07C11.201 13.695 11.3819 13.5 11.5779 13.305C11.7437 13.14 11.9548 12.87 12.1357 12.66C12.3166 12.45 12.392 12.285 12.5126 12.045C12.6332 11.79 12.5729 11.5801 12.4824 11.4001C12.392 11.2201 11.6382 9.39006 11.3367 8.64006C11.0352 7.92006 10.7186 8.01006 10.4925 7.99506H9.76884C9.51256 7.99506 9.1206 8.08506 8.77387 8.46006C8.44221 8.83506 7.47739 9.73505 7.47739 11.565C7.47739 13.395 8.8191 15.165 9 15.405C9.1809 15.66 11.6382 19.41 15.3769 21.015C16.2663 21.405 16.9598 21.63 17.5025 21.795C18.392 22.08 19.206 22.035 19.8543 21.945C20.5779 21.84 22.0703 21.045 22.3719 20.175C22.6884 19.305 22.6884 18.57 22.5829 18.405C22.4774 18.24 22.2513 18.165 21.8744 17.985Z" fill="#012148"/>
            </g>
          </svg>
          </span></a>
          </span></a>

        </div>

        <h4 class="location-title">{{ t('footer.location.title') }}</h4>
          <p class="address">
            {{ t('footer.location.addressLine1') }}<br />
            {{ t('footer.location.addressLine2') }}
          </p>
      </div>
    </div>

        <div class="footer-bottom">
          <p>{{ t('footer.bottom') }}</p>
        </div>

    <Teleport to="body">
    <Transition name="fade">
      <div v-if="showPrivacy" class="privacy-overlay" @click.self="showPrivacy = false">
        <div class="privacy-modal">
          <button class="close-btn" @click="showPrivacy = false">✕</button>

          <div class="modal-content">
            <div class="icon-header">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="white">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M13,9V3.5L18.5,9H13M16,19H8V17H16V19M16,15H8V13H16V15M14,11H8V9H11V11H14V11Z" />
              </svg>
            </div>

            <div class="title-section">
              <span class="line"></span>
              <h2>{{ t('footer.privacy.title') }}</h2>
              <span class="line"></span>
            </div>

              <div class="text-body">
                  <p>{{ t('footer.privacy.intro') }}</p>

                  <h3 class="section-title">{{ t('footer.privacy.collect.title') }}</h3>
                  <p v-html="t('footer.privacy.collect.text')"></p>

                  <h3 class="section-title">{{ t('footer.privacy.use.title') }}</h3>
                  <p>{{ t('footer.privacy.use.text') }}</p>

                  <p class="sms-note" v-html="t('footer.privacy.sms')"></p>

                  <h3 class="section-title">{{ t('footer.privacy.rights.title') }}</h3>
                  <p v-html="t('footer.privacy.rights.text')"></p>

                  <h3 class="section-title">{{ t('footer.privacy.changes.title') }}</h3>
                  <p>{{ t('footer.privacy.changes.text') }}</p>

                  <p class="update-date">
                    {{ t('footer.privacy.updated') }}
                  </p>
              </div>
            </div>
          </div>
        </div>
    </Transition>
    </Teleport>
  </footer>
</template>

<script setup>
import { ref, computed, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const route = useRoute()

const showPrivacy = ref(false)

watch(showPrivacy, async (val) => {
  if (val) {
    await nextTick()
    const modal = document.querySelector('.privacy-modal')
    if (modal) modal.scrollTop = 0
  }
})

watch(
  () => route.fullPath,
  () => {
    showPrivacy.value = false
  }
)



const locale = computed(() =>
  route.params.locale === 'en' ? 'en' : 'es'
)
</script>

<style scoped>


/* =========================
    FOOTER ORIGINAL
========================= */
.main-footer {
  background-color: #F6F9FD;
  padding: 60px 0 20px 0;
  border-top: 1px solid #e0e6ed;
  color: #333333;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
  padding: 0 20px;
}

.footer-col {
  padding: 0 30px;
  border-left: 1px solid #cbd5e0;
}

.footer-col:first-child { border-left: none; }

.footer-logo { height: 60px; margin-bottom: 15px; }

.brand-description {
  font-size: 0.9rem;
  line-height: 1.4;
  color: #012148;
  font-weight: 500;
}

h4 {
  color: #012148;
  font-size: 1.1rem;
  margin-bottom: 20px;
  font-weight: 700;
}

ul { list-style: none; padding: 0; margin: 0; }
ul li { margin-bottom: 10px; }
ul li a {
  text-decoration: none;
  color: #333333;
  font-size: 0.95rem;
  transition: color 0.3s ease;
  cursor: pointer;
}
ul li a:hover { color: #012148; font-weight: bold; }

.social-icons { display: flex; align-items: center; gap: 10px; margin-bottom: 28px; }
.social-icons a { transition: transform 0.3s ease; }
.social-icons a:hover { transform: translateY(-3px); }

.address { font-size: 0.95rem; line-height: 1.5; }

.footer-bottom {
  text-align: center;
  margin-top: 60px;
  padding-top: 20px;
  border-top: 1px solid #e0e6ed;
}

/* =========================
    OVERLAY PRIVACIDAD
========================= */
:global(.privacy-overlay) {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(1, 33, 72, 0.98);
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

:global(.privacy-modal) {
  width: 100%;
  max-width: 900px;
  height: 85vh;
  color: white;
  position: relative;
  overflow-y: auto;
  padding: 40px;
}

.close-btn {
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 2.5rem;
  cursor: pointer;
  line-height: 1;
}

.icon-header { text-align: center; margin-bottom: 10px; }

.title-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
}

.title-section h2 {
  font-size: 2.2rem;
  font-weight: 800;
  color: white;
  margin: 0;
  text-align: center;
}

.line { height: 1px; background-color: white; flex-grow: 1; opacity: 0.6; }

.text-body { font-size: 0.95rem; line-height: 1.6; }

.section-title {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 25px 0 10px 0;
  color: white;
}

.sms-note { margin: 20px 0; }

.update-date {
  margin-top: 40px;
  font-weight: bold;
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: 15px;
}

.footer-mail { color: #FCDC67; text-decoration: underline; }

/* Transición */
:global(.fade-enter-active),
:global(.fade-leave-active) {
  transition: opacity 0.4s;
}
:global(.fade-enter-from),
:global(.fade-leave-to) {
  opacity: 0;
}

/* Scrollbar */
.privacy-modal::-webkit-scrollbar { width: 5px; }
.privacy-modal::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); border-radius: 10px; }

/* Responsive */
@media (max-width: 900px) {
  .footer-container { grid-template-columns: 1fr 1fr; gap: 40px; }
  .footer-col { border-left: none; padding-left: 0; }
  .title-section h2 { font-size: 1.5rem; }
  .line { display: none; }
}

@media (max-width: 600px) {
  .footer-container { grid-template-columns: 1fr; }
}
</style>
