import { ThemeSwitcher } from '@/components/theme/ThemeSwitcher';
import React from 'react';
import Image from 'next/image';
import { Container } from '../container';
import Link from 'next/link';
import { cn } from '@/utils/common';

export function SectionHeaderTitle({
  title,
  classes = [],
}: {
  title: string;
  classes?: string[];
}) {
  return (
    <h2
      className={cn(
        'text-xl mt-1 font-semibold text-gray-900 dark:text-white',
        ...classes
      )}
    >
      {title}
    </h2>
  );
}
