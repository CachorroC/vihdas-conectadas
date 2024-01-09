'use client';
import styles from './styles.module.css';
import { useNavigationContext } from '#@/app/context/navigation-context';
import { useScrollContext } from '#@/app/context/scroll-context';

export function MenuButton () {
      const {
        isNavOpen, setIsNavOpen
      } = useNavigationContext();

      const {
        isIntersecting
      }= useScrollContext();
      return (
        <button type='button' className={`${ isNavOpen
          ? styles.closebtn
          : styles.openbtn } ${ isIntersecting && styles.sticky }`}onClick={ () => {
                  return setIsNavOpen(
                    (
                      e
                    ) => {
                              return !e;
                    }
                  );
        }}>
          <span className={`material-symbols-outlined ${ styles.icon }`}>{isNavOpen
            ? 'close'
            : 'menu'}</span>
        </button>
      );
}