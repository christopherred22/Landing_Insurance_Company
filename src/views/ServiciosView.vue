<template>
  <div class="services-page">
    <section class="hero-services">
      <div class="hero-inner animate-on-scroll">
        <h1>Nuestros servicios</h1>
        <p class="hero-sub animate-on-scroll">
          Descubre soluciones confiables en Seguros, Impuestos y Notariados para tu tranquilidad.
        </p>
        <button class="btn-expert">Habla con un experto</button>
      </div>

      <nav class="main-nav-minimal animate-on-scroll">
        <template v-for="(cat, index) in Object.keys(menuStructure)" :key="cat">
          <button
            @click="selectMainCategory(cat)"
            :class="{ active: mainCategory === cat }"
          >
            {{ cat }}
          </button>
          <span v-if="index < Object.keys(menuStructure).length - 1" class="separator">|</span>
        </template>
      </nav>
    </section>

    <main class="services-container animate-on-scroll">
      <div class="sub-nav">
        <button
          v-for="sub in availableSubcategories"
          :key="sub"
          @click="subCategory = sub"
          :class="{ active: subCategory === sub }"
        >
          {{ sub }}
        </button>
      </div>

      <div class="services-grid">
        <div
          v-for="service in filteredServices"
          :key="service.title"
          class="service-card"
        >
          <div class="icon-circle">
            <component class="icon-emoji" :is="service.icon" />

          </div>

          <h3>{{ service.title }}</h3>

          <div class="faq-list">
            <div class="faq-item">
              <button class="faq-trigger" @click="toggleFaq(service.title + '1')">
                <span>¿Qué cubre?</span>
                <span class="arrow" :class="{ rotated: activeFaq === service.title + '1' }">⌄</span>
              </button>
              <transition name="expand">
                <div class="faq-content" v-if="activeFaq === service.title + '1'">
                  <p>{{ service.queCubre }}</p>
                </div>
              </transition>
            </div>

            <div class="faq-item">
              <button class="faq-trigger" @click="toggleFaq(service.title + '2')">
                <span>¿Por qué importa?</span>
                <span class="arrow" :class="{ rotated: activeFaq === service.title + '2' }">⌄</span>
              </button>
              <transition name="expand">
                <div class="faq-content" v-if="activeFaq === service.title + '2'">
                  <p>{{ service.porqueImporta }}</p>
                </div>
              </transition>
            </div>

            <div class="faq-item">
              <button class="faq-trigger" @click="toggleFaq(service.title + '3')">
                <span>¿Quién lo necesita?</span>
                <span class="arrow" :class="{ rotated: activeFaq === service.title + '3' }">⌄</span>
              </button>
              <transition name="expand">
                <div class="faq-content" v-if="activeFaq === service.title + '3'">
                  <p>{{ service.quienLoNecesita }}</p>
                </div>
              </transition>
            </div>
          </div>

          <button class="btn-cotiza">¡Cotiza ya!</button>
        </div>
      </div>
    </main>
  </div>
</template>


<script setup lang="ts">
  import { onMounted } from 'vue'

onMounted(() => {
  const elements = document.querySelectorAll('.animate-on-scroll')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 }
  )

  elements.forEach(el => observer.observe(el))
})

import { ref, computed } from 'vue';

const menuStructure: Record<string, string[]> = {
  'Seguros': ['Personales', 'Comerciales'],
  'Impuestos': ['Personales', 'Comerciales'],
  'Notariado': ['Personales', 'Comerciales']
};

const mainCategory = ref('Seguros');
const subCategory = ref('Personales');
const activeFaq = ref<string | null>(null);

const selectMainCategory = (cat: string) => {
  mainCategory.value = cat;
  const subs = menuStructure[cat];
  if (subs && subs.length > 0) {
    subCategory.value = subs[0] as string;
  } else {
    subCategory.value = '';
  }
};

const availableSubcategories = computed(() => {
  return menuStructure[mainCategory.value] || [];
});

const toggleFaq = (id: string) => {
  activeFaq.value = activeFaq.value === id ? null : id;
};

// DATA CON LAS 3 PREGUNTAS ESTANDARIZADAS
import IconCar from '@/components/icons/IconCar.vue'
import IconLife from '@/components/icons/IconLife.vue'
import IconInquilino from '@/components/icons/IconInquilino.vue'
import IconCasa from '@/components/icons/IconCasa.vue'
import IconUmbrella from '@/components/icons/IconUmbrella.vue'
import IconSalud from '@/components/icons/IconSalud.vue'
import IconLiability from '@/components/icons/IconLiability.vue'
import IconWComp from '@/components/icons/IconWComp.vue'
import IconAComercial from '@/components/icons/IconAComercial.vue'
import IconEUmbrella from '@/components/icons/IconEUmbrella.vue'
import IconBOwners from '@/components/icons/IconBOwners.vue'
import IconW2 from '@/components/icons/IconW2.vue'
import IconNEC from '@/components/icons/IconNEC.vue'
import IconLLiability from '@/components/icons/IconLLiability.vue'
import IconSociedades from '@/components/icons/IconSociedades.vue'
import IconChurch from '@/components/icons/IconChurch.vue'
import IconCoprSC from '@/components/icons/IconCoprSC.vue'
import IconBodas from '@/components/icons/IconBodas.vue'
import IconViaje from '@/components/icons/IconViaje.vue'
import IconPostillados from '@/components/icons/IconApostillados.vue'
import IconCertificaciones from '@/components/icons/IconCertificaciones.vue'
import IconPGen from '@/components/icons/IconPGen.vue'
import IconTLegal from '@/components/icons/IconTlegal.vue'
import IconTraduccion from '@/components/icons/IconTraduccion.vue'
import IconApostillados from '@/components/icons/IconApostillados.vue';
import IconCompania from '@/components/icons/IconCompania.vue'
import IconRCompanias from '@/components/icons/IconRCompanias.vue'
import IconContabilidad from '@/components/icons/IconContabilidad.vue';






const allServices = [
  // --- SEGUROS PERSONALES ---
  {
    title: 'Seguro de carro',
    category: 'Seguros',
    subCategory: 'Personales',
    icon: IconCar,
    queCubre: 'Responsabilidad civil, daños físicos al vehículo, robo y gastos médicos de emergencia.',
    porqueImporta: 'Es un requisito legal en el estado de Tennessee y protege tu patrimonio ante accidentes.',
    quienLoNecesita: 'Cualquier dueño de vehículo que desee circular con protección legal y financiera.'
  },
  {
    title: 'Seguro de vida', category: 'Seguros', subCategory: 'Personales', icon: IconLife,
    queCubre: 'Compensación económica para tus beneficiarios en caso de fallecimiento o enfermedades terminales.',
    porqueImporta: 'Garantiza que tu familia mantenga su estilo de vida y pueda cubrir deudas o gastos finales.',
    quienLoNecesita: 'Padres de familia, personas con dependientes o ciudadanos con deudas hipotecarias.'
  },
  {
    title: 'Seguro de inquilino', category: 'Seguros', subCategory: 'Personales', icon: IconInquilino,
    queCubre: 'Protección de tus bienes personales (muebles, ropa, electrónica) dentro de una propiedad rentada.',
    porqueImporta: 'La póliza del dueño del edificio no cubre tus pertenencias; esta póliza es tu única defensa.',
    quienLoNecesita: 'Cualquier persona que rente un apartamento, casa o unidad de vivienda.'
  },
  {
    title: 'Seguro de casa', category: 'Seguros', subCategory: 'Personales', icon: IconCasa,
    queCubre: 'La estructura física de tu hogar, bienes personales y responsabilidad ante accidentes de visitas.',
    porqueImporta: 'Protege la inversión más grande de tu vida contra incendios, tormentas y vandalismo.',
    quienLoNecesita: 'Propietarios de viviendas que buscan seguridad total para su patrimonio familiar.'
  },
  {
    title: 'Seguro de umbrella', category: 'Seguros', subCategory: 'Personales', icon: IconUmbrella,
    queCubre: 'Una capa extra de responsabilidad civil que se activa cuando tus otros seguros alcanzan su límite.',
    porqueImporta: 'Te protege de demandas millonarias que podrían comprometer tus ahorros y activos futuros.',
    quienLoNecesita: 'Personas con activos considerables o que desean una protección integral superior.'
  },
  {
    title: 'Seguro de salud', category: 'Seguros', subCategory: 'Personales', icon: IconSalud,
    queCubre: 'Consultas médicas, hospitalización, cirugías, medicamentos y cuidados preventivos.',
    porqueImporta: 'Reduce drásticamente los costos de atención médica, evitando deudas por emergencias de salud.',
    quienLoNecesita: 'Individuos y familias que priorizan su bienestar y acceso a medicina de calidad.'
  },

  // --- SEGUROS COMERCIALES ---
  {
    title: 'General Liability', category: 'Seguros', subCategory: 'Comerciales', icon: IconLiability,
    queCubre: 'Daños a la propiedad de terceros, lesiones corporales y errores publicitarios durante tu operación.',
    porqueImporta: 'Es indispensable para obtener contratos, permisos y proteger tu negocio de demandas legales.',
    quienLoNecesita: 'Contratistas, dueños de negocios y trabajadores independientes en cualquier industria.'
  },
  {
    title: 'Workers Comp', category: 'Seguros', subCategory: 'Comerciales', icon: IconWComp,
    queCubre: 'Gastos médicos y salarios perdidos de empleados que sufren accidentes o enfermedades laborales.',
    porqueImporta: 'Es obligatorio por ley en la mayoría de los estados si tienes empleados contratados.',
    quienLoNecesita: 'Empresas con personal a cargo que desean cumplir con la ley y proteger a su equipo.'
  },
  {
    title: 'Auto Comercial', category: 'Seguros', subCategory: 'Comerciales', icon: IconAComercial,
    queCubre: 'Vehículos utilizados para fines de negocio, incluyendo carga y responsabilidad especializada.',
    porqueImporta: 'Las pólizas personales no cubren accidentes si el vehículo estaba siendo usado para trabajar.',
    quienLoNecesita: 'Dueños de flotas, repartidores, contratistas y cualquier negocio con vehículos operativos.'
  },
  {
    title: 'Excess Umbrella', category: 'Seguros', subCategory: 'Comerciales', icon: IconEUmbrella ,
    queCubre: 'Edificios comerciales, inventario, maquinaria y mobiliario de oficina contra daños físicos.',
    porqueImporta: 'Asegura que tu negocio pueda volver a operar rápidamente tras un desastre o robo.',
    quienLoNecesita: 'Dueños de locales, bodegas, oficinas o negocios con inventario físico valioso.'
  },
  {
    title: 'BOP (Business Owners)', category: 'Seguros', subCategory: 'Comerciales', icon: IconBOwners,
    queCubre: 'Un paquete que combina Responsabilidad General y Propiedad Comercial en una sola póliza.',
    porqueImporta: 'Suele ser más económico que comprar las coberturas por separado para pequeñas empresas.',
    quienLoNecesita: 'Pequeñas y medianas empresas que buscan una cobertura completa y simplificada.'
  },

  // --- IMPUESTOS PERSONALES ---
  {
    title: 'Declaración W-2', category: 'Impuestos', subCategory: 'Personales', icon: IconW2,
    queCubre: 'Procesamiento completo de tu declaración anual de impuestos ante el IRS y el estado.',
    porqueImporta: 'Asegura que recibas el máximo reembolso posible y cumplas con tus obligaciones legales.',
    quienLoNecesita: 'Empleados que reciben salarios y desean una declaración sin errores.'
  },
  {
    title: 'Autoempleados 1099', category: 'Impuestos', subCategory: 'Personales', icon: IconNEC,
    queCubre: 'Cálculo de ingresos, gastos deducibles y preparación del Schedule C para contratistas.',
    porqueImporta: 'Optimiza tus deducciones para pagar el mínimo impuesto legalmente permitido por el IRS.',
    quienLoNecesita: 'Trabajadores independientes, freelancers y conductores de plataformas digitales.'
  },

  // --- IMPUESTOS COMERCIALES ---
  {
    title: 'Impuestos LLC', category: 'Impuestos', subCategory: 'Comerciales', icon: IconLLiability,
    queCubre: 'Preparación de impuestos para Sociedades de Responsabilidad Limitada y reporte de ganancias.',
    porqueImporta: 'Mantiene a tu empresa en "Good Standing" y evita auditorías o cierres administrativos.',
    quienLoNecesita: 'Dueños de pequeñas empresas registradas como LLC en cualquier estado.'
  },
  {
    title: 'Sociedades (Partnerships)', category: 'Impuestos', subCategory: 'Comerciales', icon: IconSociedades,
    queCubre: 'Cálculo, reporte y envío de los impuestos sobre las ventas recaudados a nivel estatal.',
    porqueImporta: 'Es una responsabilidad fiduciaria; no reportarlo puede conllevar graves multas penales.',
    quienLoNecesita: 'Negocios que venden productos físicos o servicios sujetos a impuestos estatales.'
  },
  {
    title: 'Iglesias o Sin fines de Lucro', category: 'Impuestos', subCategory: 'Comerciales', icon: IconChurch,
    queCubre: 'Gestión de retenciones federales, estatales y pagos de desempleo para tus empleados.',
    porqueImporta: 'Garantiza que el pago a tus trabajadores sea exacto y cumpla con todas las leyes laborales.',
    quienLoNecesita: 'Cualquier dueño de negocio con empleados en nómina.'
  },
  {
    title: 'Corporaciones (S/C)', category: 'Impuestos', subCategory: 'Comerciales', icon: IconCoprSC,
    queCubre: 'Declaraciones complejas para estructuras corporativas con distribución de dividendos.',
    porqueImporta: 'Permite una planeación fiscal avanzada para reducir la carga impositiva de los socios.',
    quienLoNecesita: 'Empresas con múltiples socios o que buscan una estructura fiscal más robusta.'
  },

  // --- NOTARIADO PERSONALES ---

  {
    title: 'Bodas', category: 'Notariado', subCategory: 'Personales', icon: IconBodas,
    queCubre: 'Oficiación de ceremonias civiles y procesamiento legal de la licencia de matrimonio.',
    porqueImporta: 'Formaliza el vínculo matrimonial de manera legal, rápida y con validez estatal.',
    quienLoNecesita: 'Parejas que desean contraer matrimonio civil sin las largas esperas de una corte.'
  },
  {
    title: 'Cartas para salir del País', category: 'Notariado', subCategory: 'Personales', icon: IconViaje,
    queCubre: 'Documento notariado que autoriza el viaje de menores de edad solos o con terceros.',
    porqueImporta: 'Es una exigencia de seguridad en aeropuertos y aduanas para prevenir el tráfico de menores.',
    quienLoNecesita: 'Padres que necesitan enviar a sus hijos de viaje por vacaciones o motivos familiares.'
  },
  {
    title: 'Apostillados', category: 'Notariado', subCategory: 'Personales', icon: IconApostillados,
    queCubre: 'Certificación internacional que valida un documento para ser utilizado en países del Convenio de la Haya.',
    porqueImporta: 'Sin el apostille, un documento emitido en EE.UU. no tiene validez legal en el extranjero.',
    quienLoNecesita: 'Personas que tramitan nacionalidades, herencias o estudios en otros países.'
  },
  {
    title: 'Certificaciones', category: 'Notariado', subCategory: 'Personales', icon: IconCertificaciones,
    queCubre: 'Validación de copias de documentos originales como títulos, actas o identificaciones.',
    porqueImporta: 'Permite entregar una copia fiel del original con respaldo notarial para trámites oficiales.',
    quienLoNecesita: 'Estudiantes o profesionales que aplican a trabajos o instituciones educativas.'
  },
  {
    title: 'Poderes Generales', category: 'Notariado', subCategory: 'Personales', icon: IconPGen,
    queCubre: 'Autorización amplia para que un tercero administre bienes y realice actos legales en tu nombre.',
    porqueImporta: 'Permite que tus asuntos sigan funcionando si te encuentras fuera del país o incapacitado.',
    quienLoNecesita: 'Personas que viajan por largo tiempo o necesitan representación legal absoluta.'
  },
  {
    title: 'Tutela Legal', category: 'Notariado', subCategory: 'Personales', icon: IconTLegal,
    queCubre: 'Documentación para la designación de guardianes legales para menores de edad o dependientes.',
    porqueImporta: 'Asegura que tus seres queridos queden bajo el cuidado de personas de tu total confianza.',
    quienLoNecesita: 'Padres y tutores que desean dejar protegida la custodia de sus hijos ante cualquier eventualidad.'
  },
  {
    title: 'Traducción de documentos', category: 'Notariado', subCategory: 'Personales', icon: IconTraduccion,
    queCubre: 'Traducción profesional y certificada de documentos de todo tipo (Inglés/Español).',
    porqueImporta: 'Garantiza que la traducción sea fiel al original y aceptada por USCIS o cortes legales.',
    quienLoNecesita: 'Cualquier persona con documentos extranjeros que necesite presentarlos ante autoridades en EE.UU.'
  },

  // --- NOTARIADO COMERCIALES ---

  {
    title: 'Planillas de compañía', category: 'Notariado', subCategory: 'Comerciales', icon: IconCompania,
    queCubre: 'Procesamiento de nómina, cálculo de retenciones federales/estatales y emisión de talones de pago.',
    porqueImporta: 'Asegura que tus empleados reciban su pago a tiempo y que tu negocio cumpla con las leyes laborales.',
    quienLoNecesita: 'Dueños de negocios con empleados que buscan automatizar y legalizar sus pagos de nómina.'
  },
  {
    title: 'Registración de compañías', category: 'Notariado', subCategory: 'Comerciales', icon: IconRCompanias,
    queCubre: 'Registro oficial ante el Estado, obtención del número EIN y preparación de documentos operativos.',
    porqueImporta: 'Formaliza tu emprendimiento, protege tu patrimonio personal y te permite abrir cuentas bancarias comerciales.',
    quienLoNecesita: 'Emprendedores que desean iniciar una LLC, Corporación o cualquier entidad legal en EE.UU.'
  },
  {
    title: 'Contabilidad', category: 'Notariado', subCategory: 'Comerciales', icon: IconContabilidad,
    queCubre: 'Registro mensual de ingresos y egresos, conciliación bancaria y preparación de estados financieros.',
    porqueImporta: 'Te permite conocer la salud real de tu negocio y estar preparado para la temporada de impuestos.',
    quienLoNecesita: 'Empresarios que desean mantener sus finanzas organizadas y tomar decisiones basadas en datos.'
  }
];

const filteredServices = computed(() => {
  return allServices.filter(s => s.category === mainCategory.value && s.subCategory === subCategory.value);
});
</script>

<style scoped>
.services-page { width: 100%; overflow-x: hidden; font-family: 'Poppins', sans-serif; }

/* HERO */
.hero-services {
  text-align: center;
  padding: 80px 24px 40px;
  background-image: url('@/assets/B_AboutUs.png'); /* Asegúrate de tener un patrón de líneas suave */
  background-repeat: no-repeat;
  background-size: cover;
}

.hero-inner h1 {
  font-size: 80px;
  font-weight: 900;
  color: #002244;
  margin-bottom: 20px;
}

.hero-sub {
  font-size: 20px;
  color: #64748b;
  margin-bottom: 35px;
}

.btn-expert {
  background: #b92b31;
  color: white;
  border: none;
  padding: 14px 35px;
  font-size: 18px;
  font-weight: 700;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 60px;
}

/* MENÚ DE LÍNEAS (Minimal) */
.main-nav-minimal {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
}

.main-nav-minimal button {
  background: none;
  border: none;
  font-size: 20px;
  font-weight: 700;
  color: #002244;
  cursor: pointer;
  transition: 0.3s;
}

.main-nav-minimal button.active {
  color: #b92b31;
}

.separator {
  color: #cbd5e1;
  font-size: 20px;
  font-weight: 300;
}

/* CONTENIDO */
.services-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 40px 80px 100px;
}

.sub-nav {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 60px;
}

.sub-nav button {
  background: none;
  border: none;
  font-size: 20px;
  color: #64748b;
  cursor: pointer;
}

.sub-nav button.active {
  color: #b92b31;
  text-decoration: underline;
  text-underline-offset: 5px;
}

/* CARDS */
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

/* --- TARJETA CON HOVER SUAVE --- */
.service-card {
  background: white;
  border-radius: 20px; /* Bordes redondeados según diseño */
  padding: 40px 30px;
  text-align: center;
  border: 1px solid #f1f5f9;
  display: flex;
  flex-direction: column;
  align-items: center; /* Asegura que todo el contenido esté centrado */
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
}

.service-card:hover {
  transform: translateY(-8px); /* Elevación más sutil */
  /* Sombra más tenue, menos "brillosa" */
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
  border-color: #e2e8f0;
}

/* --- ICONO CON MOVIMIENTO --- */
.icon-circle {
  width: 85px;
  height: 85px;
  background: #ffeb99;
  border-radius: 50%;
  margin: 0 auto 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  transition: transform 0.4s ease; /* Solo animamos el movimiento */
}

.service-card:hover .icon-circle {
  transform: scale(1.1) rotate(5deg); /* Movimiento ligero sin cambiar color */
}

/* --- BOTÓN ¡COTIZA YA! (Mantener forma pequeña) --- */
.btn-cotiza {
  background: white;
  border: 1.5px solid #b92b31;
  color: #b92b31;
  padding: 8px 35px; /* Padding fijo para que no crezca al ancho total */
  border-radius: 50px; /* Forma totalmente ovalada */
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: fit-content; /* IMPORTANTE: solo toma el ancho del texto */
  margin: 0 auto; /* Lo mantiene centrado */
}

.btn-cotiza:hover {
  background: #b92b31;
  color: white;
}

/* --- TÍTULOS Y FAQ --- */
.service-card h3 {
  font-size: 24px;
  font-weight: 800;
  color: #002244;
  margin-bottom: 25px;
}

.faq-list {
  width: 100%; /* El contenedor de FAQ sí ocupa el ancho para las líneas */
  text-align: left;
  margin-bottom: 30px;
}

.faq-trigger {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border: none;
  background: none;
  border-bottom: 1px solid #f1f5f9;
  font-size: 15px;
  font-weight: 700;
  color: #000;
  cursor: pointer;
}

.faq-content {
  padding: 10px 0;
  font-size: 14px;
  color: #475569;
}

/* BOTÓN COTIZA (Estilo exacto al mockup) */
.btn-cotiza {
  background: white;
  border: 1.5px solid #b92b31;
  color: #b92b31;
  padding: 8px 30px;
  border-radius: 20px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

.btn-cotiza:hover {
  background: #b92b31;
  color: white;
}

/* ANIMACIONES */

/* =====================================================
   ANIMATIONS
   ===================================================== */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s ease-out;
}

.animate-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.expand-enter-active { transition: all 0.3s ease-out; }
.expand-enter-from { opacity: 0; transform: translateY(-10px); }
.arrow { transition: 0.3s; }
.arrow.rotated { transform: rotate(180deg); }

@media (max-width: 1100px) {
  .services-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 768px) {
  .services-grid { grid-template-columns: 1fr; }
  .hero-inner h1 { font-size: 45px; }
  .services-container{

    padding: 0 20px;
    width: 100%;
    box-sizing: border-box; /* Asegura que el padding no rompa el ancho */
  }
  .main-nav-minimal{

    gap:10px
  }


}
</style>
