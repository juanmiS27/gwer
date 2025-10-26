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
            Beatmaker. DJ. Visionario.
          </p>
          <Link href="#music" className={styles.callToActionButton}>
            Explora la Música
          </Link>
        </section>

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
            {/* Puedes añadir más tracks aquí */}
          </div>
        </section>

        <section id="events" className={styles.section}>
          <h2 className={styles.sectionTitle}>Próximos Eventos</h2>
          <div className={styles.eventList}>
            <div className={styles.eventCard}>
              <h3>GWER Live - The Club</h3>
              <p>25 de Octubre, 22:00h</p>
              <p>Ciudad, Ubicación</p>
              <a href="#" target="_blank" rel="noopener noreferrer" className={styles.ticketButton}>
                Tickets
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
          <p className={styles.contactText}>Para bookings, colaboraciones o prensa, escríbenos a:</p>
          <a href="mailto:info@gwer.com" className={styles.contactEmail}>
            info@gwer.com
          </a>
          <div className={styles.socialLinks}>
            <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Spotify</a>
            <a href="#" target="_blank" rel="noopener noreferrer">SoundCloud</a>
            {/* Añade más redes sociales */}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} GWER. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}