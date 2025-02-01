'use client';

import Link from 'next/link';

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

export function AppShell({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();

  const { setColorScheme, colorScheme } = useMantineColorScheme();

  const changeTheme = () => {
    setColorScheme(colorScheme === 'light' ? 'dark' : 'light');
  };

  // Listen for theme change hotkey
  useHotkeys([[THEME_HOT_KEY, changeTheme]]);

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
              {/* Navigation links goes here */}
            </Flex>
          </Group>
          <UserMenu />
        </Group>
      </MantineAppShell.Header>
      {/* Mobile navigation bar menu */}
      <MantineAppShell.Navbar>
        <Flex direction="column" p="md" gap="sm">
          {/* Navigation links goes here */}
        </Flex>
      </MantineAppShell.Navbar>
      {/* Page content */}
      <MantineAppShell.Main display="flex" bg="background">
        <Box w="100%">{children}</Box>
      </MantineAppShell.Main>
    </MantineAppShell>
  );
}
