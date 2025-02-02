'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

import { MantineProvider } from '@mantine/core';

import { theme } from '~/theme';

export default function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProgressBar
        height="4px"
        color="var(--mantine-primary-color-filled)"
        options={{ showSpinner: false }}
      />
      <MantineProvider theme={theme}>{children}</MantineProvider>
    </>
  );
}
