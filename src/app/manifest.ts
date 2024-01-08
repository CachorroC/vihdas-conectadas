import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
      const prefix
    = process.env.NODE_ENV === 'production'
      ? 'tesis'
      : 'beta';

      const url = `https://${ prefix }.rsasesorjuridico.com`;

      return {
        short_name: 'VIHdas Conectadas',
        name      : 'VIHdas Conectadas: aportes a la normativa digital para la desestigmatización del VIH',
        description:
      'Esta es una herramienta multimedia que busca servir como medio informativo sobre las diferentes estrategias que existen en el distrito capital para la mitigación del VIH.',

        orientation                : 'any',
        lang                       : 'es-CO',
        dir                        : 'ltr',
        scope                      : '/',
        id                         : '/',
        background_color           : '#202b3a',
        theme_color                : '#7aa4dd',
        prefer_related_applications: false,
        display                    : 'fullscreen',
        start_url                  : url,
        display_override           : [
          'fullscreen',
          'standalone',
          'window-controls-overlay',
        ],
        shortcuts: [ {
          name : 'Ultimas Actuaciones',
          url  : '/Carpetas/UltimasActuaciones',
          icons: [ {
            src    : '/icon1.png',
            sizes  : '512x512',
            purpose: 'maskable',
          }, ],
        },
        {
          name : 'Notas',
          url  : '/Notas',
          icons: [ {
            src    : '/icon.svg',
            sizes  : '512x512',
            purpose: 'maskable',
          }, ],
        }, ],
        serviceworker: {
          src: '/service-worker.js',
        },
        icons: [
          {
            src    : '/icon.svg',
            sizes  : '512x512',
            purpose: 'maskable',
          },
          {
            src    : '/icon.svg',
            sizes  : '512x512',
            purpose: 'monochrome',
          },
          {
            src    : '/icon2.png',
            sizes  : '192x192',
            type   : 'image/png',
            purpose: 'maskable',
          },
          {
            src    : '/icon1.png',
            sizes  : '512x512',
            type   : 'image/png',
            purpose: 'maskable',
          },
          {
            src    : '/icon2.png',
            sizes  : '192x192',
            type   : 'image/png',
            purpose: 'any',
          },
          {
            src    : '/icon1.png',
            sizes  : '512x512',
            type   : 'image/png',
            purpose: 'any',
          },
          {
            src    : '/icon3.png',
            sizes  : '128x128',
            type   : 'image/png',
            purpose: 'monochrome',
          },
          {
            src    : '/icon4.png',
            sizes  : '144x144',
            type   : 'image/png',
            purpose: 'monochrome',
          },
          {
            src    : '/icon5.png',
            sizes  : '270x270',
            type   : 'image/png',
            purpose: 'monochrome',
          },
          {
            src    : '/icon6.png',
            sizes  : '558x270',
            type   : 'image/png',
            purpose: 'monochrome',
          },
          {
            src    : '/icon7.png',
            sizes  : '558x558',
            type   : 'image/png',
            purpose: 'monochrome',
          },
        ],
      };
}
