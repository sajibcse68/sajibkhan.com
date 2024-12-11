import Link from 'next/link';

import { ContainerInner, ContainerOuter } from '@/components/container';

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="mt-32 flex w-full justify-center">
      <div className="border-t w-full max-w-7xl border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-zinc-400 dark:text-zinc-500">
            &copy; {new Date().getFullYear()} Sajib Khan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
