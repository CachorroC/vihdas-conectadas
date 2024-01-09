'use client';
import styles from './styles.module.css';
import Image from 'next/image';
import { useSigaLeyendoContext } from '#@/app/context/siga-leyendo-context';
import { usePathname } from 'next/navigation';


export function Header() {
      const textoRef = useSigaLeyendoContext();

      const pathname = usePathname();

      function handleClick() {
            if ( textoRef.current ) {
              textoRef.current.scrollIntoView(
                {
                  behavior: 'smooth',
                  block   : 'nearest',
                  inline  : 'center',
                }
              );
            }
      }

      let currentPage;

      if ( pathname === '/' ) {
        currentPage = '';
      } else if ( pathname === '/PanoramaBogota' ) {
        currentPage = '2';
      }

      return (
        <div className={styles.header}>
          <div className={styles.sigaLeyendo}>
            <button
              onClick={handleClick}
              type='button'
              className={styles.link}
            >
              <p>Siga Leyendo</p>
              <i className='material-symbols-outlined'>
            play_for_work
              </i>
            </button>
            <div className={styles.index_icon}>
              <Image
                src={`/img/index${ currentPage }_icon.png`}
                className={ styles.index_icon_compu }
                priority={true}
                width={1200}
                height={1200}
                alt={ 'desktop icon' }

              />
              <Image
                src={`/img/index${ currentPage }_icon_tablet.png`}
                className={styles.index_icon_tablet}
                width={1200} priority={true}
                height={1200}
                alt={'tablet icon'}
              />
              <Image
                src={`/img/index${ currentPage }_icon_mobile.png`}
                className={styles.index_icon_mobile}
                width={1200} priority={true}
                height={1200}
                alt={'mobile icon'}
              />
            </div>

            <div className={styles.index_texto}>
              <h1 className={ styles.title}><strong>VIH</strong>das Conectadas</h1>
              <h3 className={styles.description}>Aportes a la normativa digital para la desestigmatización del vih</h3>
            </div>
          </div>
        </div>
      );
}
