import './globals.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font';
import { GeistMono } from 'geist/font';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: 'Ayush Prasad - Software Engineer',
  description: 'Software Engineer at InfiniSync Consulting | Google Summer of Code 2024 @Zendalona',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}