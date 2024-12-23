'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeSwitcher } from '@/components/theme/ThemeSwitcher';
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react';
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import {
  PhoneIcon,
  PlayCircleIcon,
} from '@heroicons/react/20/solid';

// utils
import { cn } from '@/utils/common';

const products = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of your traffic',
    href: '#',
    icon: ChartPieIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Security',
    description: 'Your customers’ data will be safe and secure',
    href: '#',
    icon: FingerPrintIcon,
  },
  {
    name: 'Integrations',
    description: 'Connect with third-party tools',
    href: '#',
    icon: SquaresPlusIcon,
  },
  {
    name: 'Automations',
    description: 'Build strategic funnels that will convert',
    href: '#',
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
];

const LINKS = [
  { name: 'Blog', to: '/blog' },
  { name: 'Resume', to: '/resume' },
];

function NavLink({
  href,
  ...rest
}: Omit<Parameters<typeof Link>['0'], 'href'> & { href: string }) {
  const pathname = usePathname();
  const isSelected = href === pathname || pathname.startsWith(`${href}/`);

  return (
    <li className="list-none px-5 py-2">
      <Link
        prefetch={true}
        className={cn(
          'underlined block whitespace-nowrap text-lg font-medium hover:text-team-current focus:text-team-current focus:outline-none',
          {
            'active text-primary': isSelected,
            'text-secondary': !isSelected,
          }
        )}
        href={href}
        {...rest}
      />
    </li>
  );
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div
      className={
        'text-primary relative mx-auto mb-10 mt-6 w-full max-w-7xl flex items-center justify-between gap-x-2'
      }
    >
      <div className="flex col-span-2 justify-start align-middle">
        <Link
          className={cn(
            'text-primary underlined block whitespace-nowrap text-2xl font-medium transition hover:text-team-current focus:text-team-current focus:outline-none',
            {
              'text-primary': pathname === '/',
              'text-secondary': pathname !== '/',
            }
          )}
          href="/"
        >
          <h1>Sajib Khan</h1>
        </Link>
      </div>

      <nav aria-label="Global" className="col-span-1 md:col-span-2 lg:col-span-9">
        <div className="flex lg:flex-1"></div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {LINKS.map((link) => (
            <NavLink key={link.to} href={link.to}>
              {link.name}
            </NavLink>
          ))}
        </PopoverGroup>
      </nav>

      <div className="hidden right-0 lg:flex lg:justify-end">
        <div className="w-12 h-10 pointer-events-auto">
          <ThemeSwitcher />
        </div>
      </div>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-blue2-900">
          <div className="flex items-center justify-between" onClick={() => setMobileMenuOpen(false)}>
            <Link
              className={cn(
                'text-primary underlined block whitespace-nowrap text-2xl font-medium transition hover:text-team-current focus:text-team-current focus:outline-none',
                {
                  'text-primary': pathname === '/',
                  'text-secondary': pathname !== '/',
                }
              )}
              href="/"
            >
              <h1>Sajib Khan</h1>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-white dark:bg-blue2-900"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div
                className="space-y-2 py-6"
                onClick={() => setMobileMenuOpen(false)}
              >
                {LINKS.map((link) => (
                  <NavLink key={link.to} href={link.to}>
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  );
}
