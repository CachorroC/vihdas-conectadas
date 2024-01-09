'use client';

import { ReactNode, createContext, useContext,   useState, Dispatch, SetStateAction } from 'react';

const ScrollContext = createContext<{ isIntersecting: boolean; setIsIntersecting: Dispatch<SetStateAction<boolean>>}|null>(
  null
);


export function ScrollContextProvider(
  {
    children
  }: { children: ReactNode }
) {
      const [ isIntersecting, setIsIntersecting ] = useState(
        false
      );

      return (
        <ScrollContext.Provider value={{
          isIntersecting,
          setIsIntersecting
        }}>

          <h3>is intersecting : {isIntersecting
            ? 'is intersected'
            : 'isnt intersecting'}</h3>
          {children}

        </ScrollContext.Provider>
      );
}


export function useScrollContext () {
      const context = useContext(
        ScrollContext
      );

      if ( !context ) {
        throw new Error(
          'useScrollContext must be used within a scroll context provider'
        );

      }

      return context;
}