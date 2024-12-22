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
        'mx-auto md:w-[24cm] md:h-[31.5cm] relative bg-white px-4 py-2 dark:bg-zinc-900'
      )}
    >
      {/* top section */}
      <HeaderSection />

      {/* mid section */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Left Column - Experience */}

        <WorkSection />

        {/* Right Column - Skills, Education, etc. */}
        <div className="w-full md:w-2/5">
          <SkillSection />

          <CertificateSection />

          <ProjectSection />

          <EducationSection />
        </div>
      </div>

      {/* Bottom Section */}
      <AdditionalSkills />

      <p className="absolute bottom-0 right-0 mr-2">v7.0.0</p>
    </div>
  );
});

ResumeNew.displayName = 'Resume';

export default ResumeNew;
