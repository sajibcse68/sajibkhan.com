import Section from './Section';

import Experience from '@/components/Experience';
import LabelWithGraphic from '@/components/label-with-graphic';
import { Icons } from '@/components/icons';

// components
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
    head4: '07/21 - Pres.',
    bulletPoints: [
      'Led a full UI/UX revamp that boosted application performance by 30% via React optimization, lazy loading and render blocking minimization.',
      'Architected a scalable system using React, Redux, Next.js & TypeScript.',
      'Delivered pixel-perfect, responsive interfaces from Figma designs using modern CSS methodologies.',
      'Mentored a 4-member frontend team, improving sprint velocity by 40%.',
      'Collaborated with cross-functional teams to launch seven high-impact product features.',
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
    head4: '07/19 - 06/21',
    bulletPoints: [
      'Designed and developed 100+ reusable React components across SaaS app.',
      'Developed and enhanced modern web applications using React, Context API, GraphQL, ES6+ & Styled-components, ensuring clean and maintainable code.',
      'Developed interactive data visualizations with D3.js while maintaining smooth user experience.',
      'Migrated APIs from REST to GraphQL using Axios, AWS AppSync & Normalizr, improving API efficiency, flexibility, and reducing load time by 20%.',
      'Manage the frontend team in an Agile environment, fostering collaboration and maintaining productivity.',
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
    head4: '11/14 - 06/19',
    bulletPoints: [
      'Developed Kubernetes Dashboard leveraging Vue.js 2, Vuex with 95% reusable components. Automated testing using Jenkins CI.',
      'Crafted a responsive website for appscode.com utilizing Hugo. Developed a chrome extension.',
    ],
  },
];

export default function WorkSection() {
  return (
    <Section classes="w-full lg:w-[59%] print:w-[59%]" title="WORK EXPERIENCE">
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
