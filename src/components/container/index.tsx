'use client';

import { ReactNode, useEffect, useRef,  } from 'react';
import styles from './styles.module.css';
import { useScrollContext } from '#@/app/context/scroll-context';

export function ContainerPrincipal (
  {
    children
  }: { children: ReactNode }
) {


      const {
        isIntersecting, setIsIntersecting
      } = useScrollContext();

      const containerRef = useRef<HTMLDivElement|null>(
        null
      );

      useEffect(
        () => {
                  const observer = new IntersectionObserver(
                    (
                      [ entry ]
                    ) => {
                              setIsIntersecting(
                                entry.isIntersecting
                              );
                    },  {
                      rootMargin: '-300px'
                    }
                  );

                  if ( containerRef.current ) {
                    observer.observe(
                      containerRef.current
                    );
                  }

                  return () => {
                            return observer.disconnect();
                  };
        }, [ setIsIntersecting ]
      );
      console.log(
        isIntersecting
          ? 'is intersected'
          : 'isnt intersecting'
      );
      return (
        <div className={ styles.container } ref={containerRef}>
          {children}
          <h3>is intersecting : {isIntersecting
            ? 'is intersected'
            : 'isnt intersecting'}</h3>
        </div>
      );
}