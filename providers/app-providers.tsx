'use client';

import { Notifications } from '@mantine/notifications';
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
      <MantineProvider theme={theme}>
        <Notifications position="top-right" />
        {children}
      </MantineProvider>
    </>
  );
}
