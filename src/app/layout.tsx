import './globals.css';
import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import StyledComponentsRegistry from './../lib/registry';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'TMDB',
  description: 'The biggest movie database',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
