import { SectionHeaderTitle } from '../resume/SectionHeaderTitle';
import { cn } from '@/utils/common';

type Props = {
  title: string;
  classes?: string;
  children: React.ReactNode;
};

export default function Section({ title, classes = '', children }: Props) {
  return (
    <section className={cn('mt-2', classes)}>
      <SectionHeaderTitle title={title} />

      <div className="w-full border-t border-zinc-300 dark:border-zinc-800" />

      {children}
    </section>
  );
}
