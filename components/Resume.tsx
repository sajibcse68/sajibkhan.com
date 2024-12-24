'use client';

import React from 'react';
import { Roboto_Condensed } from 'next/font/google';

import HeaderSection from '@/components/sections/HeaderSection';
import SkillSection from '@/components/sections/SkillSection';
import WorkSection from '@/components/sections/WorkSection';
import ProjectSection from '@/components/sections/ProjectSection';
import CertificateSection from '@/components/sections/CertificateSection';
import EducationSection from '@/components/sections/EducationSection';
import AdditionalSkills from './sections/AdditionalSkills';

// utils
import { cn } from '@/utils/common';

type Props = {
  usage: 'live' | 'pdf';
};

const robotoCondensed = Roboto_Condensed({
  weight: '400',
  subsets: ['latin'],
});

const ResumeNew = React.forwardRef(({ usage }: Props, ref) => {
  return (
    <div
      className={cn(
        robotoCondensed.className,
        'relative max-w-xl bg-white px-4 pt-1 dark:bg-zinc-900 lg:mx-auto lg:h-[30.5cm] lg:w-[24cm] lg:max-w-7xl print:h-[30.5cm] print:w-[24cm] print:max-w-7xl'
      )}
    >
      {/* top section */}
      <HeaderSection />

      {/* mid section */}
      <div className="flex flex-col gap-4 lg:flex-row print:flex-row">
        {/* Left Column - Experience */}

        <WorkSection />

        {/* Right Column - Skills, Education, etc. */}
        <div className="w-full lg:w-[41%] print:w-[41%]">
          <SkillSection />

          <CertificateSection />

          <ProjectSection />

          <EducationSection />
        </div>
      </div>

      {/* Bottom Section */}
      <AdditionalSkills />

      <p className="absolute bottom-0 right-0 mr-2">v7.1.0</p>
    </div>
  );
});

ResumeNew.displayName = 'Resume';

export default ResumeNew;
