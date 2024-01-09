'use client';
import { useNavigationContext } from '#@/app/context/navigation-context';
import Link from 'next/link';
import styles from './styles.module.css';

export function TopNav () {
      const {
        isNavOpen, setIsNavOpen
      } = useNavigationContext();


      return (
        <nav className={styles.topnav} style={isNavOpen
          ? {
              width  : '100vw',
              opacity: 1
            }
          : {
              width  : '0',
              opacity: 0
            } }>
          <button type='button' className={styles.closebtn} onClick={() => {
                    return setIsNavOpen(
                      (
                        e
                      ) => {
                                return !e;
                      }
                    );
          } }>
            <span className={`material-symbols-outlined ${ styles.icon }`}>{isNavOpen
              ? 'menu'
              : 'closed'}</span>
          </button>
          <Link href='/'>
            <span className={`material-symbols-outlined ${ styles.icon }`}>tap_and_play
            </span>
            <span className={styles.text}>VIHdas Conextadas</span>
          </Link>
        </nav>
      );
}