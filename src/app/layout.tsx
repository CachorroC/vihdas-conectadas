import './manifest';
import '#@/styles/globals.css';
import 'material-symbols';
import type { Metadata, Viewport } from 'next';
import { Josefin_Sans, Raleway } from 'next/font/google';
import '#@/styles/globals.css';
import { ReactNode } from 'react';
import { NavigationContextProvider } from './context/navigation-context';
import { MenuButton } from '#@/components/navigation/menu-button';
import { TopNav } from '../components/navigation/topnav';
import Script from 'next/script';
import { SigaLeyendoProvider } from './context/siga-leyendo-context';
import { Header } from '#@/components/header';


const prefix = process.env.NODE_ENV === 'production'
  ? 'tesis'
  : 'beta';


const josefina = Josefin_Sans(
  {
    subsets : [ 'latin' ],
    preload : false,
    variable: '--josefa',
  }
);


const raleway = Raleway(
  {
    subsets : [ 'latin' ],
    preload : true,
    variable: '--raleway',
  }
);

export const viewport: Viewport = {
  width       : 'device-width',
  initialScale: 1,
  maximumScale: 1,
  colorScheme : 'light dark',
  themeColor  : [ {
    media: '(prefers-color-scheme: light)',
    color: '#5C6BC0',
  },
  {
    media: '(prefers-color-scheme: dark)',
    color: '#1A237E',
  }, ],
};

export const metadata: Metadata = {
  title          : 'VIHdas Conectadas',
  description    : 'Aportes a la normativa digital para la desestigmatización del vih',
  applicationName: 'Vihdas Conectadas',
  referrer       : 'origin-when-cross-origin',
  publisher      : 'CachorroC',
  creator        : 'Cachorro Cami',


};

export default function RootLayout(
  {
    children,
  }: {
    children: ReactNode;
  }
) {
      return (
        <html lang="es-CO"  >
          <body className={ ` ${ raleway.className } ${ josefina.variable } [ color-scheme: light dark ]` }>
            <NavigationContextProvider>
              <SigaLeyendoProvider>
                <Header />
                <MenuButton />
                <TopNav />
                { children }
              </SigaLeyendoProvider>
            </NavigationContextProvider>
            <Script
              src={`https://${ prefix }.rsasesorjuridico.com/installService-worker.js`}
            />
          </body>
        </html>
      );
}
