import { FaGit, FaJs, FaReact } from 'react-icons/fa';

import Section from './Section';

export default function SkillSection() {
  const topSkills = [
    'JavaScript',
    'React',
    'Next.js',
    'TypeScript',
    'Redux',
    'CSS',
    'HTML5',
    'Git',
  ];

  const stackOverflowBadges = [
    {
      name: 'gold',
      value: 9,
      color: '#FFCC00',
    },
    {
      name: 'silver',
      value: 68,
      color: '#B4B8BC',
    },
    {
      name: 'bronze',
      value: 79,
      color: '#D1A684',
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-between items-start">
      <Section classes="text-zinc-900 w-full md:w-auto dark:text-zinc-200" title="SKILLS">
        <div className="space-y-2">
          <ul className="grid grid-cols-2 gap-x-3 gap-y-1">
            {topSkills.map((skill) => (
              <li key={skill}>•&nbsp; {skill}</li>
            ))}
          </ul>
        </div>
      </Section>

      <div className="hidden md:block w-1 mt-10 h-[130px] border-2 border-gray-300" />

      <div className="pl-0 mt-4 w-2/3 md:w-auto">
        <h2 className="text-lg">StackOverflow</h2>

        <div className="flex justify-between items-center font-bold border-b-2 border-gray-300">
          <p className='text-lg'>24k &nbsp;&nbsp;</p>

          <ul className="flex gap-1">
            {stackOverflowBadges.map(({ name, value, color }) => (
              <li key={name}>
                <span
                  style={{ background: `${color}` }}
                  className={`w-3 h-3 rounded-full inline-flex items-center justify-center text-xl font-bold`}
                />
                &nbsp;{value}&nbsp;
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-1">
          <div className="space-y-2">
            <div className="flex flex-col gap-0">
              <div className="flex w-full items-center justify-between px-2 text-xs">
                <p>(Tags)</p>
                <p>(Score)</p>
              </div>
              <div className="flex w-full items-center justify-between px-3 text-sm font-bold">
                <FaGit
                  size="22"
                  className=" text-zinc-700 dark:text-zinc-300"
                />
                <p>1403</p>
              </div>
              <div className="flex w-full items-center justify-between px-3 text-sm font-bold">
                <FaJs size="22" className=" text-zinc-700 dark:text-zinc-300" />
                <p>171</p>
              </div>
              <div className="flex w-full items-center justify-between px-3 text-sm font-bold">
                <FaReact
                  size="22"
                  className=" text-zinc-700 dark:text-zinc-300"
                />
                <p>210</p>
              </div>
              {/* <div className="flex w-full items-center justify-between">
                <FaVuejs size="24" />
                <p>146</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
