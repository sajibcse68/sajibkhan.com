import Section from './Section';
import Experience from '@/components/Experience';
import LabelWithGraphic from '@/components/label-with-graphic';
import { Icons } from '@/components/icons';

// components
import TitleWithLink from '@/components/resume/TitleWithLink';

export default async function ProjectSection() {
  const exp: ExperienceProps[] = [
    {
      head1: (
        <TitleWithLink
          // image="/images/logos/nextjs.png"
          title="MyDailyLearn"
          link="https://github.com/sajibcse68/MyDailyLearn"
        />
      ),
      head2: (
        <LabelWithGraphic
          icon={Icons.Stack}
          content="JavaScript, React, Git, CSS"
        />
      ),
      head3: <LabelWithGraphic icon={Icons.Star} content="" />,
      bulletPoints: [
        'Collection of interview questions for frontend development, categorized by topic and technology.',
      ],
    },
    {
      head1: (
        <TitleWithLink
          // image="/images/logos/tailwind.webp"
          title="CSS Advanced Animations"
          link="https://github.com/sajibcse68/css-advanced-animations"
        />
      ),
      head2: <LabelWithGraphic icon={Icons.Stack} content="HTML, CSS" />,
      head3: <LabelWithGraphic icon={Icons.Star} content="" />,
      bulletPoints: [
        'Collection of interactive buttons, a distinct CSS animation or, transition effect triggered on hover',
      ],
    },
    {
      head1: (
        <TitleWithLink
          title="Different Charts Using D3.js"
          link="https://github.com/sajibcse68/charts-using-d3.js"
        />
      ),
      head2: <LabelWithGraphic icon={Icons.Stack} content="D3.js, JS, CSS" />,
      head3: <LabelWithGraphic icon={Icons.Star} content="" />,
      bulletPoints: [
        'A collection of dynamic charts including tree maps, choropleths, heat maps, scatterplots, and bar charts to visualize complex data interactively.',
      ],
    },
  ];

  return (
    <Section title="PROJECT">
      <div className="flex flex-col gap-y-1">
        {exp.map((e, index) => (
          <Experience key={index} {...e} />
        ))}
      </div>
    </Section>
  );
}
