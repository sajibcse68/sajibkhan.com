import Section from './Section';
import LabelWithGraphic from '@/components/label-with-graphic';

const education: EducationProps[] = [
  {
    title: 'BSc in Computer Science and Engineering',
    gpa: '1st class',
    org: {
      name: 'Chittagong University of Engineering & Technology',
      logo: '/images/cuet.png',
    },
    time: '2009 - 2014',
  },
  // {
  //   title: 'Data Visualization using D3, JavaScript, React.js, Web Development',
  //   gpa: '',
  //   org: {
  //     name: 'freeCodeCamp',
  //     logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQGLKj3JHcof0w/company-logo_100_100/company-logo_100_100/0/1630639684997/free_code_camp_logo?e=1740614400&v=beta&t=kgkmXH769Z-42_MMm_NUEwtHnNLnC_ECNomvLIKowgk',
  //   },
  //   time: 'Apr 2021 - Jun 2021',
  // },
];

function Education({ title, gpa, org, time }: EducationProps) {
  return (
    <section className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
      <div className="">
        <div className="text-base font-semibold flex flex-wrap justify-between">
          <div className="flex gap-x-4 flex-wrap">
            <span className="font-bold text-black dark:text-white">
              {title}
            </span>
          </div>
        </div>

        <div className=" text-base text-zinc-700 dark:text-zinc-400">
          <LabelWithGraphic image={org.logo} content={org.name} />
        </div>
      </div>
    </section>
  );
}

export default function EducationSection() {
  return (
    <Section title="EDUCATION">
      <div className="flex flex-col gap-y-1">
        {education.map((e, index) => (
          <Education key={index} {...e} />
        ))}
      </div>
    </Section>
  );
}
