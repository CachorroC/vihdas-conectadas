'use client';
import styles from './styles.module.css';
import { useNavigationContext } from '#@/app/context/navigation-context';

export function MenuButton () {
      const {
        isNavOpen, setIsNavOpen
      } = useNavigationContext();
      return (
        <button type='button' className={isNavOpen
          ? styles.closebtn
          : styles.openbtn}onClick={ () => {
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