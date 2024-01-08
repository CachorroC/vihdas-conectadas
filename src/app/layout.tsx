import type { Metadata, Viewport } from 'next';
import { Josefin_Sans, Raleway } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import { NavigationContextProvider } from './context/navigation-context';




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
  title          : 'VUHdas Conectadas',
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
    children: ReactNode
  }
) {
      return (
        <html lang="es-CO"  >
          <body className={ ` ${ raleway.className } ${ josefina.variable } [ color-scheme: light dark ]` }>
            <NavigationContextProvider>
              { children }
            </NavigationContextProvider>
          </body>
        </html>
      );
}
