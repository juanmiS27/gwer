import Link from 'next/link';
import Image from 'next/image'; // Importar el componente Image de Next.js para optimización
import styles from './page.module.css';
import Header from './components/header';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.mainContent}>
        <section className={styles.heroSection}>
          <h1 className={styles.heroTitle}>
            <Image
              src="/gwer-pro-logo2.jpeg" // Asegúrate de tener este archivo en public/
              alt="GWER PRO Logo"
              width={600} // Ajusta el tamaño según tu diseño
              height={200}
              priority // Para cargar más rápido si es el logo principal
              className={styles.heroLogo}
            />
          </h1>
          <p className={styles.heroSubtitle}>
            Técnico de Sonido, Luces & Productor Musical
          </p>
          <div className={styles.heroButtonContainer}>
            <Link href="#services" className={styles.callToActionButton}>
              Explora Nuestros Servicios
            </Link>
          </div>
        </section>

        {/* --- NUEVA SECCIÓN: SOBRE MÍ --- */}
        <section id="about" className={styles.section}>
          <h2 className={styles.sectionTitle}>Sobre GWER PRO</h2>
          <div className={styles.aboutContent}>
            <p className={styles.aboutText}>
              Soy GWER, un profesional apasionado por el sonido, la iluminación y la producción musical. 
              Con años de experiencia en la escena urbana y electrónica, me dedico a transformar 
              conceptos en experiencias auditivas y visuales inolvidables. Mi misión es elevar la 
              calidad de cada proyecto, desde el estudio de grabación hasta el escenario más vibrante.
            </p>
            <p className={styles.aboutText}>
              Ya sea que necesites un beat potente, una mezcla y masterización impecable para tu próximo lanzamiento, 
              o la dirección técnica completa de sonido y luces para tu evento, GWER PRO es tu socio ideal. 
              Trabajo con una visión clara: la excelencia y la innovación en cada detalle.
            </p>
          </div>
        </section>
        {/* --- FIN SECCIÓN SOBRE MÍ --- */}

        <section id="services" className={styles.section}>
          <h2 className={styles.sectionTitle}>Servicios Profesionales</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <h3>Técnico de Sonido</h3>
              <p>
                Asistencia técnica integral para directos, eventos y grabaciones. 
                Desde la configuración del equipo hasta la mezcla FOH y monitores, 
                garantizo un sonido claro y potente en cualquier entorno.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Técnico de Luces</h3>
              <p>
                Diseño y operación de shows de luces que complementan la música y 
                la atmósfera de tu evento. Utilizo las últimas tecnologías para 
                crear ambientes dinámicos y memorables.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Mastering & Producción</h3>
              <p>
                Servicios avanzados de mezcla y masterización para que tus tracks 
                suenen profesionales en todas las plataformas. Además, creación de 
                beats originales y asesoramiento en producción musical.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Grabación Multicanal en Directo</h3>
              <p>
                Captura profesional del audio de tu evento o concierto en pistas separadas. 
                Ideal para crear maquetas en vivo, material para redes o una 
                producción de alta calidad (post-producción y mezcla).
              </p>
            </div>
            {/* Puedes añadir más servicios aquí */}
          </div>
        </section>

        {/* --- NUEVA SECCIÓN: POR QUÉ ELEGIR GWER PRO --- */}
        <section id="why-us" className={styles.section}>
          <h2 className={styles.sectionTitle}>¿Por Qué Elegir GWER PRO?</h2>
          <div className={styles.whyUsGrid}>
            <div className={styles.reasonCard}>
              <span className={styles.reasonIcon}>⚡</span> {/* Placeholder Icon */}
              <h3>Experiencia Comprobada</h3>
              <p>Años de trayectoria en la industria musical y de eventos, garantizando resultados.</p>
            </div>
            <div className={styles.reasonCard}>
              <span className={styles.reasonIcon}>🎧</span> {/* Placeholder Icon */}
              <h3>Calidad de Audio Superior</h3>
              <p>Equipos de vanguardia y oído experto para una perfección sonora.</p>
            </div>
            <div className={styles.reasonCard}>
              <span className={styles.reasonIcon}>💡</span> {/* Placeholder Icon */}
              <h3>Visión Creativa</h3>
              <p>Innovación en cada proyecto, desde el diseño de luces hasta la producción musical.</p>
            </div>
            <div className={styles.reasonCard}>
              <span className={styles.reasonIcon}>🤝</span> {/* Placeholder Icon */}
              <h3>Compromiso Total</h3>
              <p>Dedicación y atención personalizada para cada cliente y proyecto.</p>
            </div>
             <div className={styles.reasonCard}>
            <span className={styles.reasonIcon}>🎛️</span> {/* Placeholder Icon */}
            <h3>Solución Integral</h3>
            <p>Un solo profesional para sonido, luces y producción. Coherencia total para tu evento o proyecto.</p>
          </div>
          <div className={styles.reasonCard}>
            <span className={styles.reasonIcon}>🛡️</span> {/* Placeholder Icon */}
            <h3>Fiabilidad y Adaptabilidad</h3>
            <p>Resolución de problemas en tiempo real y cumplimiento estricto de los plazos de entrega.</p>
          </div>
          </div>
        </section>
        {/* --- FIN SECCIÓN POR QUÉ ELEGIRNOS --- */}

        <section id="contact" className={styles.section}>
          <h2 className={styles.sectionTitle}>Contacto</h2>
          <p className={styles.contactText}>
            ¿Listo para llevar tu proyecto al siguiente nivel? ¡Hablemos!
            <br />
            Puedes contactarme a través de los siguientes canales:
          </p>
          
          {/* Contenedor de Métodos de Contacto */}
          <div className={styles.contactMethods}>
            
            {/* Tarjeta de Email */}
            <a href="mailto:germanwer4@gmail.com" className={styles.contactCard}>
              <Image src="/icons/email.png" alt="Email" width={40} height={40} className={styles.contactIcon} />
              <h3>Email</h3>
              <p>germanwer4@gmail.com</p>
            </a>

            {/* Tarjeta de Teléfono */}
            <a href="tel:+34 660 85 00 69" className={styles.contactCard}>
              <Image src="/icons/phone.png" alt="Teléfono" width={40} height={40} className={styles.contactIcon} />
              <h3>Teléfono</h3>
              <p>+34 660 85 00 69</p> 
            </a>

            {/* Tarjeta de Instagram */}
            <a href="https://www.instagram.com/germawerr/" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
              <Image src="/icons/instagram.png" alt="Instagram" width={45} height={45} className={styles.contactIcon} />
              <h3>Instagram</h3>
              <p>@germawerr</p>
            </a>

          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} GWER PRO. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}