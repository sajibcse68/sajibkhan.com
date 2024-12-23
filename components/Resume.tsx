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
        'relative mx-auto bg-white px-4 pt-1 dark:bg-zinc-900 md:h-[30.5cm] md:w-[24cm] print:h-[30.5cm] print:w-[24cm]'
      )}
    >
      {/* top section */}
      <HeaderSection />

      {/* mid section */}
      <div className="flex flex-col gap-4 md:flex-row print:flex-row">
        {/* Left Column - Experience */}

        <WorkSection />

        {/* Right Column - Skills, Education, etc. */}
        <div className="w-full md:w-[41%] print:w-[41%]">
          <SkillSection />

          <CertificateSection />

          <ProjectSection />

          <EducationSection />
        </div>
      </div>

      {/* Bottom Section */}
      <AdditionalSkills />

      <p className="absolute bottom-0 right-0 mr-2">v7.0.1</p>
    </div>
  );
});

ResumeNew.displayName = 'Resume';

export default ResumeNew;
