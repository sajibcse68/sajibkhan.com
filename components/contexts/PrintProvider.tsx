'use client';

import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import React, { MutableRefObject, ReactNode } from 'react';
import { createContext } from 'react';

type PrintContext = {
  componentRef: MutableRefObject<null> | null;
  handlePrint: () => void;
};

export const PrintContext = createContext<PrintContext>({
  componentRef: null,
  handlePrint: () => {},
});

export default function PrintProvider({ children }: { children: ReactNode }) {
  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    // wait animation or image loading for a while before printing?
    // onBeforePrint: () => {
    //   return new Promise<void>((resolve) => {
    //     setTimeout(() => {
    //       resolve();
    //     }, 500);
    //   });
    // },
    documentTitle: `Resume - Sajib Khan`,
    onPrintError: (error) => console.log('error PrintProvider: ', error),

    contentRef: componentRef,
  });

  return (
    <PrintContext.Provider value={{ componentRef, handlePrint }}>
      {children}
    </PrintContext.Provider>
  );
}
