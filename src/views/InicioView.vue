<template>
  <div class="landing-page">
    <section class="hero-section">
      <div class="container hero-grid">
        <div class="hero-text">
          <h1>Protegemos lo <br> más importante <br> <span class="highlight">para tí.</span></h1>
          <p>Soluciones confiables en seguros, impuestos y servicios de notariado.</p>
          <div class="hero-actions">
            <button class="btn-primary">Contáctanos</button>
            <button class="btn-secondary">WhatsApp</button>
          </div>
        </div>
        <div class="hero-image">
          <img src="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070&auto=format&fit=crop" alt="Familia feliz" class="rounded-img">
        </div>
      </div>
    </section>

    <section class="about-section">
      <div class="container about-grid">
        <div class="about-content">
          <h2 class="title-bg">Sobre <span class="blue-text">nosotros</span></h2>
          <h3>Más de 15 años de experiencia</h3>
          <p>Somos una compañía dedicada a proteger tu bienestar. Ofreciendo servicios integrales para la comunidad, nuestros agentes están capacitados en servicios de seguros, de impuestos y de notariado para que puedas tener la confianza de estar en buenas manos.</p>
        </div>
        <div class="about-logo">
          <img src="@/assets/estrella_PI.png" alt="Providence Logo Big" class="floating-logo">
        </div>
      </div>
    </section>

    <section class="services-section">
      <div class="container">
        <h2 class="section-title">Nuestros servicios</h2>
        <div class="services-grid">
          <div class="service-card">
            <v-icon icon="mdi-shield-check-outline" size="40" class="card-icon"></v-icon>
            <h3>Seguros</h3>
            <p>Protección integral</p>
            <a href="#" class="link-more">Saber más</a>
          </div>
          <div class="service-card">
            <v-icon icon="mdi-calculator" size="40" class="card-icon"></v-icon>
            <h3>Impuestos</h3>
            <p>Gestión fiscal profesional</p>
            <a href="#" class="link-more">Saber más</a>
          </div>
          <div class="service-card">
            <v-icon icon="mdi-gavel" size="40" class="card-icon"></v-icon>
            <h3>Notariado</h3>
            <p>Servicios legales completos</p>
            <a href="#" class="link-more">Saber más</a>
          </div>
        </div>
      </div>
    </section>

    <section class="why-us-section">
      <div class="container">
        <h2 class="section-title">¿Por qué elegirnos?</h2>
        <div class="why-grid">
          <div class="why-item">
            <div class="why-icon-circle blue"><v-icon icon="mdi-star" color="white"></v-icon></div>
            <div class="why-card">
              <h4>Experiencia Comprobada</h4>
              <p>Más de 15 años en seguros, impuestos y notariado en Tennessee.</p>
            </div>
          </div>
          <div class="why-item">
            <div class="why-icon-circle light-blue"><v-icon icon="mdi-lightbulb-outline" color="white"></v-icon></div>
            <div class="why-card">
              <h4>Claridad Garantizada</h4>
              <p>Explicamos todo con lenguaje claro, sin términos confusos ni letras pequeñas.</p>
            </div>
          </div>
          <div class="why-item">
            <div class="why-icon-circle blue-alt"><v-icon icon="mdi-translate" color="white"></v-icon></div>
            <div class="why-card">
              <h4>Bilingüe y Personalizada</h4>
              <p>Atención en español e inglés, cercana y centrada en tus necesidades.</p>
            </div>
          </div>
          <div class="why-item">
            <div class="why-icon-circle dark-blue"><v-icon icon="mdi-office-building" color="white"></v-icon></div>
            <div class="why-card">
              <h4>Agencia Física</h4>
              <p>Contamos con una sucursal física ubicada en Smyrna, Tennessee para cumplir con rapidez cualquier necesidad.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* CONFIGURACIÓN GENERAL */
.landing-page {
  font-family: 'Inter', sans-serif;
  color: #333;
  overflow-x: hidden;
  background-image: url('../assets/background-lines.png'); /* Las líneas geométricas de fondo */
  background-size: cover;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* HERO SECTION */
.hero-section { padding: 80px 0; }
.hero-grid { display: grid; grid-template-columns: 1.2fr 1fr; gap: 40px; align-items: center; }

h1 { font-size: 64px; line-height: 1.1; font-weight: 900; color: #012148; }
.highlight { color: #C62828; } /* Rojo Providence */

.hero-actions { display: flex; gap: 20px; margin-top: 30px; }
.btn-primary { background: #C62828; color: white; padding: 12px 35px; border-radius: 50px; font-weight: 700; border: none; cursor: pointer; }
.btn-secondary { background: white; border: 2px solid #012148; color: #012148; padding: 12px 35px; border-radius: 50px; font-weight: 700; cursor: pointer; }

.rounded-img { width: 100%; border-radius: 40px; border-bottom-right-radius: 150px; object-fit: cover; }

/* ABOUT SECTION */
.about-section { padding: 100px 0; }
.about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }

.title-bg { font-size: 48px; font-weight: 900; color: #C62828; position: relative; }
.blue-text { color: #012148; }
.about-content h3 { font-size: 24px; margin: 20px 0; color: #666; font-weight: 400; }
.about-content p { font-size: 18px; line-height: 1.6; color: #444; }

.floating-logo { width: 80%; opacity: 0.9; }

/* SERVICES SECTION */
.services-section { padding: 80px 0; text-align: center; }
.section-title { font-size: 42px; font-weight: 900; color: #012148; margin-bottom: 50px; }

.services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }

.service-card {
  background: white;
  padding: 40px;
  border-radius: 25px;
  border: 1px solid #eee;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  text-align: left;
  transition: transform 0.3s ease;
}

.service-card h3 { font-size: 28px; font-weight: 900; color: #012148; margin: 15px 0; }
.service-card p { color: #666; margin-bottom: 20px; }
.link-more { color: #666; text-decoration: underline; font-size: 14px; }

/* WHY US SECTION */
.why-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-top: 50px; }
.why-item { display: flex; align-items: center; gap: 20px; position: relative; }

.why-card {
  background: white;
  padding: 30px 30px 30px 50px;
  border-radius: 20px;
  border: 1px solid #eee;
  width: 100%;
  box-shadow: 0 5px 15px rgba(0,0,0,0.03);
}

.why-icon-circle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: -10px;
  z-index: 2;
}

.blue { background-color: #3F51B5; }
.light-blue { background-color: #448AFF; }
.blue-alt { background-color: #303F9F; }
.dark-blue { background-color: #1A237E; }

.why-card h4 { font-weight: 800; color: #012148; margin-bottom: 5px; }

/* RESPONSIVE */
@media (max-width: 960px) {
  .hero-grid, .about-grid, .services-grid, .why-grid { grid-template-columns: 1fr; }
  h1 { font-size: 40px; }
  .hero-image { order: -1; }
  .container { padding: 0 20px; }
}
</style>
