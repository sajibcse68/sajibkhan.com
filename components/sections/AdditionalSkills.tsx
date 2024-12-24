import Section from '@/components/sections/Section';

import Experience from '@/components/Experience';

const exp: ExperienceProps[] = [
  {
    bulletPoints: [
      'Extensive experience with ES6+, React (hooks/context), Redux (+redux-saga), D3.js, GraphQL, Vue.js, and Node.js.',
      'Master-level expertise in JavaScript/React architecture, delivering clean, efficient & scalable code using latest industry practices.',
      'Skilled in implementing pixel-perfect, responsive designs from Figma using CSS (TailwindCSS, styled-components, SCSS, etc.).',
      'Strong testing expertise using Cypress for E2E, Jest for unit testing, and Puppeteer/JenkinsCI for automations.',
      'Hands-on experience with Blockchain, Web3, NFTs, and Decentralized Finance (DeFi) technologies.',
      'Strong problem-solving and debugging skills, sharpened through competitive programming (ICPC/NCPC participation).',
      "Proven technical leadership - successfully led frontend teams and mentored 50+ developers in my career.",
    ],
  },
];

export default function AdditionalSkills() {
  return (
    <Section classes="w-full" title="ADDITIONAL SKILLS">
      <div className="space-y-4">
        {exp.map((e, index) => (
          <Experience key={index} {...e} hideHead3 />
        ))}
      </div>
    </Section>
  );
}
