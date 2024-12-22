'use client';
import { Roboto, Roboto_Condensed } from 'next/font/google';
import usePrint from '@/components/hooks/usePrint';

// utils
import { cn } from '@/utils/common';

const robotoCondensed = Roboto_Condensed({
  weight: '400',
  subsets: ['latin'],
});

export default function PDFResumeContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const { componentRef } = usePrint();

  return (
    <div
      ref={componentRef}
      className={cn('mt-4', robotoCondensed.className)}
    >
      {children}
    </div>
  );
}
