'use client';
import { ReactNode, RefObject, createContext, createRef, useContext } from 'react';

const SigaLeyendoContext = createContext<RefObject<HTMLDivElement>| null>(
  null
);

const textoRef = createRef<HTMLDivElement>();

export const SigaLeyendoProvider = (
  {
    children
  } : {children: ReactNode}
) => {
          return (
            <SigaLeyendoContext.Provider value={textoRef}>
              {children}
            </SigaLeyendoContext.Provider>
          );
};

export function useSigaLeyendoContext() {
      const context = useContext(
        SigaLeyendoContext
      );

      if ( !context ) {
        throw new Error(
          'siga lyeendo context must be used within a siga leyendo provider '
        );

      }

      return context;
}