import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google'; // Usaremos Inter para texto general y Montserrat para títulos
import './globals.css'; // Importa tus estilos globales

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });

export const metadata: Metadata = {
  title: 'GWER - Official',
  description: 'GWER | Music, Events & More',
  keywords: ['GWER', 'Music', 'DJ', 'Artist', 'Urban', 'Events'],
  openGraph: {
    title: 'GWER - Official',
    description: 'GWER | Music, Events & More',
    url: 'https://gwer.com', // Reemplaza con tu dominio
    siteName: 'GWER',
    images: [
      {
        url: 'https://gwer.com/og-image.jpg', // Imagen para redes sociales
        width: 1200,
        height: 630,
        alt: 'GWER Official',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GWER - Official',
    description: 'GWER | Music, Events & More',
    creator: '@gwer_official', // Tu usuario de Twitter
    images: ['https://gwer.com/twitter-image.jpg'], // Imagen para Twitter
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