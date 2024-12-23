import Section from './Section';
import LabelWithGraphic from '@/components/label-with-graphic';

// components
import TitleWithLink from '@/components/resume/TitleWithLink';

const education: CertificateProps[] = [
  {
    title: 'Front End Libraries',
    org: {
      name: '',
      logo: '',
    },
    time: '2009 - 2014',
    link: 'https://github.com/sajibcse68/certificates#front-end-libraries',
  },
  {
    title: 'Git in Depth',
    org: {
      name: '',
      logo: '',
    },
    time: '2009 - 2014',
    link: 'https://github.com/sajibcse68/certificates#git-in-depth',
  },
  {
    title: 'JavaScript Algorithms and DataStructures Cert',
    org: {
      name: '',
      logo: '',
    },
    time: '2009 - 2014',
    link: 'https://github.com/sajibcse68/certificates#javascript-algorithms-and-datastructures-certification',
  },
  {
    title: 'EXPERT in JavaScript - @Pluralsight',
    org: {
      name: '',
      logo: '',
    },
    time: '2009 - 2014',
    link: 'https://github.com/sajibcse68/certificates#expert-in-javascript----skill-assessment-at-pluralsight',
  },
  {
    title: 'Modern React with Redux',
    org: {
      name: '',
      logo: '',
    },
    time: '2009 - 2014',
    link: 'https://github.com/sajibcse68/certificates#modern-react-with-redux',
  },
];

function Certificate({ title, link, org, time }: CertificateProps) {
  return (
    <section className="text-base leading-[25px] text-zinc-700 dark:text-zinc-300">
      <div className="flex flex-wrap justify-between">
        <div className="flex gap-x-2 flex-wrap">
          <span>
            <TitleWithLink title={title} link={link} />
          </span>
        </div>
      </div>
      <LabelWithGraphic image={org.logo} content={org.name} />
    </section>
  );
}

export default function CertificateSection() {
  return (
    <Section title="CERTIFICATES" classes="relative">
      <div className="flex flex-row flex-wrap justify-between gap-y-1">
        {education.map((e, index) => (
          <Certificate key={index} {...e} />
        ))}
      </div>

      <div className="absolute right-10 top-0 mt-1 text-sm font-bold">
        <TitleWithLink
          title="(check over 50 cert?)"
          link="https://github.com/sajibcse68/certificates"
        />
      </div>
    </Section>
  );
}
