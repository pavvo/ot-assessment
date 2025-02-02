'use client';

import { useEffect } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  Anchor,
  Box,
  Burger,
  Flex,
  Group,
  AppShell as MantineAppShell,
  Title,
  useMantineColorScheme,
} from '@mantine/core';

import { useDisclosure, useHotkeys } from '@mantine/hooks';

import { UserMenu } from './user-menu';

const THEME_HOT_KEY = 'mod+J';

type Link = {
  href: string;
  label: string;
};

const LINKS: Array<Link> = [
  { href: '/', label: 'Home' },
  { href: '/patients', label: 'Patients' },
  { href: '/assessments', label: 'Assessments' },
  { href: '/reports', label: 'Reports' },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const [opened, { toggle, close }] = useDisclosure();

  const { setColorScheme, colorScheme } = useMantineColorScheme();

  const pathname = usePathname();

  const changeTheme = () => {
    setColorScheme(colorScheme === 'light' ? 'dark' : 'light');
  };

  // Listen for theme change hotkey
  useHotkeys([[THEME_HOT_KEY, changeTheme]]);

  // Close mobile navigation on route change
  useEffect(() => {
    close();
  }, [pathname]);

  const isLinkActive = (href: string) => {
    // Special case for home page
    if (href === '/') return pathname === href;
    // Check if pathname starts with href
    return pathname.startsWith(href);
  };

  return (
    <MantineAppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'lg', collapsed: { desktop: true, mobile: !opened } }}
      padding="md"
    >
      {/* Desktop header */}
      <MantineAppShell.Header
        display="flex"
        style={{ flexDirection: 'column', height: 60 }}
        bg="paper"
      >
        <Group justify="space-between" h="100%" px="md">
          <Group>
            <Burger opened={opened} onClick={toggle} hiddenFrom="lg" size="sm" />
            <Anchor underline="never" c="var(--mantine-color-text)" component={Link} href="/">
              <Title mr={16} order={4} fw={600} style={{ cursor: 'pointer' }}>
                OT Assessment
              </Title>
            </Anchor>
            <Flex gap="lg" visibleFrom="lg">
              {LINKS.map(link => (
                <Anchor
                  key={link.href}
                  underline="never"
                  c={
                    isLinkActive(link.href)
                      ? 'var(--mantine-color-dark-8)'
                      : 'var(--mantine-color-dark-3)'
                  }
                  fw={isLinkActive(link.href) ? 500 : 400}
                  component={Link}
                  href={link.href}
                >
                  {link.label}
                </Anchor>
              ))}
            </Flex>
          </Group>
          <UserMenu />
        </Group>
      </MantineAppShell.Header>
      {/* Mobile navigation bar menu */}
      <MantineAppShell.Navbar>
        <Flex direction="column" p="md" gap="sm">
          {LINKS.map(link => (
            <Anchor
              key={link.href}
              underline="never"
              c="var(--mantine-color-text)"
              component={Link}
              href={link.href}
            >
              {link.label}
            </Anchor>
          ))}
        </Flex>
      </MantineAppShell.Navbar>
      {/* Page content */}
      <MantineAppShell.Main display="flex" bg="background">
        <Box w="100%">{children}</Box>
      </MantineAppShell.Main>
    </MantineAppShell>
  );
}
