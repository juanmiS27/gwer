import Link from 'next/link';
import styles from './page.module.css'; // Importa los estilos específicos de la página

export default function HomePage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <Link href="/" className={styles.logo}>
            GWER
          </Link>
          <ul className={styles.navLinks}>
            {/* ENLACE "SERVICIOS" AÑADIDO */}
            <li>
              <Link href="#services">Servicios</Link>
            </li>
            <li>
              <Link href="#music">Música</Link>
            </li>
            <li>
              <Link href="#events">Eventos</Link>
            </li>
            <li>
              <Link href="#contact">Contacto</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className={styles.mainContent}>
        <section className={styles.heroSection}>
          <h1 className={styles.heroTitle}>
            GWER
          </h1>
          <p className={styles.heroSubtitle}>
            Beatmaker. DJ. Productor & Técnico Profesional.
          </p>
          {/* BOTONES DEL HERO ACTUALIZADOS */}
          <div className={styles.heroButtonContainer}>
            <Link href="#services" className={styles.callToActionButton}>
              Contratar Servicios
            </Link>
            <Link href="#music" className={styles.callToActionButtonSecondary}>
              Explora la Música
            </Link>
          </div>
        </section>

        {/* --- NUEVA SECCIÓN DE SERVICIOS --- */}
        <section id="services" className={styles.section}>
          <h2 className={styles.sectionTitle}>Servicios Profesionales</h2>
          <div className={styles.servicesGrid}>
            
            <div className={styles.serviceCard}>
              <h3>Técnico de Sonido</h3>
              <p>
                Asistencia técnica para directos, mezcla FOH (Front of House), 
                monitores y setup de eventos.
              </p>
            </div>
            
            <div className={styles.serviceCard}>
              <h3>Técnico de Luces</h3>
              <p>
                Diseño y operación de iluminación para directos, clubs y eventos, 
                creando la atmósfera perfecta.
              </p>
            </div>
            
            <div className={styles.serviceCard}>
              <h3>Mastering & Producción</h3>
              <p>
                Lleva tus tracks al siguiente nivel. Servicios de mezcla 
                y masterización profesional para plataformas digitales.
              </p>
            </div>

          </div>
        </section>
        {/* --- FIN DE LA NUEVA SECCIÓN --- */}


        <section id="music" className={styles.section}>
          <h2 className={styles.sectionTitle}>Últimos Lanzamientos</h2>
          <div className={styles.musicGrid}>
            <div className={styles.trackCard}>
              <img src="/track1.jpg" alt="Track 1" className={styles.trackCover} />
              <h3>Ritmo Urbano</h3>
              <p>feat. Artista X</p>
              <a href="#" target="_blank" rel="noopener noreferrer" className={styles.listenButton}>
                Escuchar ahora
              </a>
            </div>
            <div className={styles.trackCard}>
              <img src="/track2.jpg" alt="Track 2" className={styles.trackCover} />
              <h3>Noches de Neón</h3>
              <p>GWER Remix</p>
              <a href="#" target="_blank" rel="noopener noreferrer" className={styles.listenButton}>
                Escuchar ahora
              </a>
            </div>
          </div>
        </section>

        <section id="events" className={styles.section}>
          <h2 className={styles.sectionTitle}>Eventos Recientes</h2>
          <div className={styles.eventList}>
            <div className={styles.eventCard}>
              <h3>GWER Live - The Club</h3>
              <p>25 de Octubre, 22:00h</p>
              <p>Ciudad, Ubicación</p>
              <a href="#" target="_blank" rel="noopener noreferrer" className={styles.ticketButton}>
                Ver Galería
              </a>
            </div>
            <div className={styles.eventCard}>
              <h3>Festival Sonido Urbano</h3>
              <p>12 de Noviembre, 20:00h</p>
              <p>Ciudad, Recinto</p>
              <a href="#" target="_blank" rel="noopener noreferrer" className={styles.ticketButton}>
                Más info
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className={styles.section}>
          <h2 className={styles.sectionTitle}>Contacto</h2>
          {/* TEXTO DE CONTACTO ACTUALIZADO */}
          <p className={styles.contactText}>
            Para contratación de servicios, bookings o colaboraciones, contacta:
          </p>
          {/* EMAIL ACTUALIZADO */}
          <a href="mailto:germanwer4@gmail.com" className={styles.contactEmail}>
            germanwer4@gmail.com
          </a>
          <div className={styles.socialLinks}>
            {/* INSTAGRAM ACTUALIZADO (y 'rel' corregido) */}
            <a href="https://www.instagram.com/germawerr/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            {/* Puedes añadir más redes sociales aquí */}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} GWER. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}