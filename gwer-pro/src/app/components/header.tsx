// app/components/Header.tsx

"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../page.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    /* 1. AÑADIMOS LA CLASE 'headerOpen' CUANDO EL MENÚ ESTÁ ABIERTO */
    <header className={`${styles.header} ${isMenuOpen ? styles.headerOpen : ''}`}>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.logoContainer}>
          <Image
            src="/gwer-pro-logo2.jpeg" // Recomiendo tu logo pequeño aquí
            alt="GWER PRO Logo"
            width={150}
            height={50}
            priority
            className={styles.logo}
          />
        </Link>

        {/* Navegación de Escritorio */}
        <ul className={styles.navLinks}>
          <li><Link href="#about">Sobre Mí</Link></li>
          <li><Link href="#services">Servicios</Link></li>
          <li><Link href="#why-us">Ventajas</Link></li>
          <li><Link href="#contact">Contacto</Link></li>
        </ul>

        {/* Botón de Hamburguesa (Ahora también es el botón de cerrar) */}
        <button className={styles.hamburgerButton} onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Menú Móvil */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
        
        {/* 2. HEMOS ELIMINADO EL BOTÓN '.closeButton' DE AQUÍ */}

        <ul className={styles.mobileNavLinks}>
          <li onClick={toggleMenu}><Link href="#about">Sobre Mí</Link></li>
          <li onClick={toggleMenu}><Link href="#services">Servicios</Link></li>
          <li onClick={toggleMenu}><Link href="#why-us">Ventajas</Link></li>
          <li onClick={toggleMenu}><Link href="#contact">Contacto</Link></li>
        </ul>
      </div>
    </header>
  );
}