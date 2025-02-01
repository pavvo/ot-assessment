import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';
import '@mantine/core/styles.css';

import { theme } from '~/theme';

import './globals.css';

export const metadata = {
  title: 'OT Assessment',
  description:
    'Occupational therapy evaluation and documentation system for worker compensation cases with integrated assessment tools and normative data',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
