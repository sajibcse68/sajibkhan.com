import Image from 'next/image';
import Section from './Section';

import Experience from '@/components/Experience';
import LabelWithGraphic from '@/components/label-with-graphic';
import { Icons } from '@/components/icons';

// components
import { SectionHeaderTitle } from '@/components/resume/SectionHeaderTitle';
import TitleWithLink from '@/components/resume/TitleWithLink';

const exp: ExperienceProps[] = [
  {
    head1: (
      <LabelWithGraphic
        icon={Icons.Briefcase}
        content="Lead Software Engineer"
      />
    ),
    head2: (
      <TitleWithLink
        title="Goava Sales Intelligence AB 🇸🇪"
        link="https://www.goava.com"
      />
    ),
    head4: 'Jul \'21 - Pres.',
    bulletPoints: [
      'Architected & developed complex user interfaces using React, Redux & Next.js.',
      'Migrated legacy codebase to the latest React.js, reducing load time by 30%.',
      'Translated pixel-perfect Figma designs into responsive interfaces using CSS (e.g. Styled-Components, Tailwind, SCSS).',
      'Provided technical leadership and mentoring to a team of talented engineers.',
      'Collaborated effectively with cross-functional teams (product, design, backend) to define and implement innovative product features.',
      'Ensure the delivery of high-quality code through rigorous code reviews, comprehensive testing, and adherence to industry best practices.',
      'Optimized web applications for exceptional performance, accessibility, and SEO.',
      'Proactively troubleshoot and debug critical issues, providing efficient and effective solutions.',
    ],
  },
  {
    head1: (
      <LabelWithGraphic
        icon={Icons.Briefcase}
        content="Senior Software Engineer"
      />
    ),
    head2: (
      <TitleWithLink
        title="Goava Sales Intelligence AB 🇸🇪"
        link="https://www.goava.com"
      />
    ),
    head4: 'Jul \'19 - Jun \'21',
    bulletPoints: [
      'Develop, refactor, and extend features in a modern web application using technologies like React, Redux, Redux-Saga, Next.js, GraphQL, ES6+, CSS and more.',
      'Implemented advanced charts and graphs with D3.js for enhanced data visualization.',
      'Lead and manage the frontend team in an Agile environment, fostering collaboration and maintaining productivity.',
      'Migrated web application APIs from REST to GraphQL using tools like Axios, AWS AppSync, and Normalizr, resulting in improved performance and flexibility.',
    ],
  },
  {
    head1: (
      <LabelWithGraphic
        icon={Icons.Briefcase}
        content="Senior Software Engineer"
      />
    ),
    head2: (
      <TitleWithLink title="AppsCode Inc. 🇺🇸" link="https://appscode.com" />
    ),
    head4: 'Nov \'14 - Jun \'18',
    bulletPoints: [
      'Developed Kubernetes Dashboard for AppsCode using Vue.js 2, Vuex, JavaScript, Axios. Designed & developed thousands of Vue Components from scratch, reuse the components, State reactive using Vuex, used Vue Plugins/Filtering/Mixins, etc.',
    ],
  },
];

export default function WorkSection() {
  return (
    <Section classes="w-full md:w-3/5" title="WORK EXPERIENCE">
      <div className="space-y-4">
        <div className="">
          {exp.map((e, index) => (
            <Experience key={index} {...e} hideHead3 />
          ))}
        </div>
      </div>
    </Section>
  );
}
