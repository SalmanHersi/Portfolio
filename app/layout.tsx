import './globals.css';
import type { Metadata } from 'next';
import { JetBrains_Mono, Outfit } from 'next/font/google';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Salman Hersi, CISSP - Cybersecurity Analyst',
  description:
    'CISSP-certified cybersecurity analyst specializing in vulnerability assessment, risk-based remediation, cloud security, SIEM visibility, and CIS/NIST hardening.',
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
    <html lang="en" className={`${outfit.variable} ${jetbrains.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground" style={{ fontFamily: 'var(--font-outfit), system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
