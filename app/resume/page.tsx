import React from 'react';
import { Roboto, Roboto_Condensed } from 'next/font/google';
import PrintProvider from '@/components/contexts/PrintProvider';
import PDFResumeContainer from '@/components/pdf-resume-container';

// components
import Resume from '@/components/Resume';
import ActionButton from '@/components/action-button';

// utils
import { cn } from '@/utils/common';

export async function generateMetadata() {
  return {
    title: 'Resume | Sajib Khan',
    description: 'Sajib Khan - Frontend Developer',
  };
}

export default function ResumePage() {
  return (
    <div className="flex justify-center">
      <div className="flex w-full max-w-7xl lg:px-4 relative">
        <div
          className={cn(
            'w-full bg-white ring-1 ring-zinc-100 py-16 dark:bg-zinc-900 dark:ring-zinc-400/20',
          )}
        >
          <PrintProvider>
            <div className="hidden">
              <PDFResumeContainer>
                <Resume usage="pdf" />
              </PDFResumeContainer>
            </div>

            <div>
              <div className="absolute right-4 top-4 m-0 mx-auto hidden justify-center md:flex lg:right-12 print:flex">
                <ActionButton
                  text="Download Resume"
                  className="block"
                  usage="live"
                />
              </div>

              <Resume usage="live" />
            </div>
          </PrintProvider>
        </div>
      </div>
    </div>
  );
}
