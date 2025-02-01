import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';
import '@mantine/core/styles.css';

import { theme } from '~/theme';

import './globals.css';

export const metadata = {
  title: 'AstroMVP Boilerplate',
  description: 'Astro Boilerplate is a simple boilerplate used for all AstroMVP projects.',
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
