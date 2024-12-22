import Section from '@/components/sections/Section';

import Experience from '@/components/Experience';

const exp: ExperienceProps[] = [
  {
    bulletPoints: [
      'Strong experience on E6+, React hooks/context, Redux-saga, D3.js, GraphQL, Vue.js and Node.js.',
      'Deep understanding of JS, React - allowing me to write clean, efficient & maintainable codes leveraging the latest features.',
      'Pixel-perfect Figma design implementation using CSS (TailwindCSS, styled-components, SCSS, Bootstrap, Bulma, etc.).',
      'Proficient in e2e/unit testing with frameworks like Cypress, Jest, Puppeteer, Mocha.',
      'Experience in Blockchain, Web3, NFTs, and DeFi!',
      'Strong problem solver & debugger - former participants in ICPC, NCPC competetive programming contests!',
      "I've led multiple frontend teams & mentored over 50 developers in my career.",
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
