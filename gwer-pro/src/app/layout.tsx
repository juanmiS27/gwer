import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });

export const metadata: Metadata = {
  title: 'GWER PRO - Servicios Profesionales de Sonido y Producción', // Título actualizado
  description: 'GWER PRO | Técnico de Sonido, Técnico de Luces, Mastering y Producción Musical. Servicios profesionales para eventos y artistas.', // Descripción actualizada
  keywords: ['GWER PRO', 'Técnico de Sonido', 'Técnico de Luces', 'Mastering', 'Producción Musical', 'DJ', 'Beatmaker', 'Eventos', 'Audio Profesional'], // Keywords actualizadas
  openGraph: {
    title: 'GWER PRO - Servicios Profesionales',
    description: 'Técnico de Sonido, Luces, Mastering y Producción Musical.',
    url: 'https://gwerpro.com', // Reemplaza con tu dominio
    siteName: 'GWER PRO',
    images: [
      {
        url: 'https://gwerpro.com/og-image.jpg', // Imagen para redes sociales
        width: 1200,
        height: 630,
        alt: 'GWER PRO Official',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GWER PRO - Servicios Profesionales',
    description: 'Técnico de Sonido, Luces, Mastering y Producción Musical.',
    creator: '@gwer_pro', // Tu usuario de Twitter
    images: ['https://gwerpro.com/twitter-image.jpg'], // Imagen para Twitter
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${montserrat.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}