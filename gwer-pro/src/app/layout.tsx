import type { Metadata } from 'next';
import { Inter, Montserrat } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });

export const metadata: Metadata = {
  title: 'GWER PRO - Servicios Profesionales de Sonido y Producción',
  description: 'GWER PRO | Técnico de Sonido, Técnico de Luces, Mastering y Producción Musical. Servicios profesionales para eventos y artistas.',
  // ... (el resto de tus metadatos) ...
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${montserrat.variable}`}>
      <body>
        
        {/* --- VIDEO DE FONDO AÑADIDO --- */}
        <div className="background-video-container">
          <video
            src="/gwer-pro-background2.mp4" // Ruta al video en /public/
            autoPlay
            loop
            muted
            playsInline // Importante para iOS
            className="background-video"
          />
          {/* Capa oscura para asegurar que el texto se lea bien */}
          <div className="video-overlay"></div>
        </div>
        {/* --- FIN DEL VIDEO DE FONDO --- */}

        {/* El children (tu página) irá por encima del video */}
        {children}
        
      </body>
    </html>
  );
}