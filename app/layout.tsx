import './globals.css';
import type { Metadata } from 'next';
import { JetBrains_Mono, Outfit } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/Header';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Salman Hersi - Security Guy',
  description:
    'Security Guy specializing in vulnerability assessment, threat detection, and risk mitigation. CompTIA Security+ certified.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${outfit.variable} ${jetbrains.variable}`}>
      <body className="font-sans antialiased" style={{ fontFamily: 'var(--font-outfit), system-ui, sans-serif' }}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
