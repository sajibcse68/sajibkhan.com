'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import React from 'react';

import { Icons } from '@/components/icons';
import { Tooltip } from '@/components/ui/tooltip';

const themes = [
  {
    label: 'Light Mode',
    value: 'light',
    icon: Icons.Sun,
  },
  {
    label: 'Dark Mode',
    value: 'dark',
    icon: Icons.Moon,
  },
];
export function ThemeSwitcher({ btnText }: { btnText?: string }) {
  const [open, setOpen] = React.useState(false);
  const { setTheme, theme, resolvedTheme } = useTheme();
  const ThemeIcon = React.useMemo(
    () => themes.find((t) => t.value === theme)?.icon ?? Icons.Lightning,
    [theme]
  );

  function toggleTheme() {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  }

  return (
    <Tooltip.Provider disableHoverableContent>
      <Tooltip.Root open={open} onOpenChange={setOpen}>
        <Tooltip.Trigger asChild>
          <button
            type="button"
            aria-label="Change theme"
            className="group rounded-full bg-gradient-to-b from-zinc-50/50 to-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:from-zinc-900/50 dark:to-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
            onClick={toggleTheme}
          >
            <div className="flex items-center space-x-2 gap-2">
              <ThemeIcon className="h-6 w-6 stroke-zinc-500 p-0.5 transition group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-200" />

              {btnText && <span>{btnText}</span>}
            </div>
          </button>
        </Tooltip.Trigger>
        <AnimatePresence>
          {open && (
            <Tooltip.Portal forceMount>
              <Tooltip.Content asChild>
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  {themes.find((t) => t.value === theme)?.label}
                </motion.div>
              </Tooltip.Content>
            </Tooltip.Portal>
          )}
        </AnimatePresence>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
