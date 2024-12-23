'use client';

import React from 'react';
import Link from 'next/link';
import {
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
} from 'react-icons/fa';
import { SectionHeaderTitle } from '@/components/resume/SectionHeaderTitle';

type Props = {
  usage?: 'live' | 'pdf';
};

const summary = [
  '10 years driving frontend development, ensuring best practices & performance.',
  'Expert in JavaScript (10), React (7), Redux (7), TypeScript (5), Next.js (5), CSS3 & Git.',
  'Proven problem-solver with exceptional debugging skills, self-driven, proactive.',
  'Working in USA/UK/Europe companies as a full-time since 2019.',
];

const leftColumn = () => (
  <div className="flex w-full flex-col items-center justify-center md:w-[28%] md:items-start md:justify-start print:w-[28%] print:items-start print:justify-start">
    <div className="flex items-start justify-center md:justify-start print:justify-start">
      <h1 className="text-3xl font-bold text-black dark:text-white">
        Sajib Khan
      </h1>
      <div className="flex items-center mt-1 ml-3 text-zinc-700 dark:text-zinc-400">
        <Link href="https://www.linkedin.com/in/sajibkhan" target="_blank">
          <FaLinkedin className="h-6 w-6" />
        </Link>

        <Link
          href="https://github.com/sajibcse68"
          target="_blank"
          className="ml-2"
        >
          <FaGithub className="h-6 w-6 " />
        </Link>

        <Link
          href="https://stackoverflow.com/users/4133798/sajib-khan"
          className="ml-1"
          target="_blank"
        >
          <FaStackOverflow className="h-6 w-6" />
        </Link>
      </div>
    </div>
    <h2 className="text-xl mb-2 ">Lead Software Engineer</h2>

    <div className="space-y-2 text-zinc-800 dark:text-zinc-400">
      <div className="flex items-center gap-2">
        <FaEnvelope />
        <span>sajibcse68@gmail.com</span>
      </div>
      <div className="flex items-center gap-2">
        <FaPhone />
        <span>+8801798500100</span>
      </div>
    </div>
  </div>
);

const rightColumn = () => (
  <div className="w-full md:w-[72%] print:w-[72%]">
    <div className="bg-[#f1f8ff] pl-6 pr-2 py-2 rounded-lg dark:bg-zinc-800">
      <SectionHeaderTitle
        title="Professional Summary"
        classes={['text-center mt-0']}
      />

      <p className="text-base text-zinc-900 dark:text-zinc-400">
        {summary.map((sum, index) => (
          <li key={index}>{sum}</li>
        ))}
      </p>
    </div>
  </div>
);

export default function HeaderSection({ usage }: Props) {

  return (
    <>
      <section className="flex flex-col gap-4 md:flex-row print:flex-row">
        {leftColumn()}

        {/* right column */}
        {rightColumn()}
      </section>
    </>
  );
}
