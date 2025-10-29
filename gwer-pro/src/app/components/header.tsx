// app/components/Header.tsx

"use client"; // <-- Esto lo convierte en un Componente de Cliente

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../page.module.css'; // <-- Fíjate que ahora es ../page.module.css

export default function Header() {
  // Estado para rastrear si el menú móvil está abierto
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para abrir/cerrar el menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.logoContainer}>
          <Image
            src="/gwer-pro-logo2.jpeg" // Recomiendo usar tu logo pequeño aquí
            alt="GWER PRO Logo"
            width={150}
            height={50}
            priority
            className={styles.logo}
          />
        </Link>

        {/* 1. NAVEGACIÓN DE ESCRITORIO (Se oculta en móvil) */}
        <ul className={styles.navLinks}>
          <li><Link href="#about">Sobre Mí</Link></li>
          <li><Link href="#services">Servicios</Link></li>
          <li><Link href="#why-us">¿Por Qué Elegirnos?</Link></li>
          <li><Link href="#contact">Contacto</Link></li>
        </ul>

        {/* 2. BOTÓN DE HAMBURGUESA (Solo visible en móvil) */}
        <button className={styles.hamburgerButton} onClick={toggleMenu}>
          {/* Las 3 líneas del icono */}
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* 3. MENÚ MÓVIL (Aparece cuando isMenuOpen es true) */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}>
        
        {/* Botón para cerrar el menú */}
        <button className={styles.closeButton} onClick={toggleMenu}>
          &times; {/* Una simple 'X' */}
        </button>

        <ul className={styles.mobileNavLinks}>
          {/* Añadimos onClick={toggleMenu} para que el menú se cierre al hacer clic en un enlace */}
          <li><Link href="#about" onClick={toggleMenu}>Sobre Mí</Link></li>
          <li><Link href="#services" onClick={toggleMenu}>Servicios</Link></li>
          <li><Link href="#why-us" onClick={toggleMenu}>¿Por Qué Elegirnos?</Link></li>
          <li><Link href="#contact" onClick={toggleMenu}>Contacto</Link></li>
        </ul>
      </div>
    </header>
  );
}