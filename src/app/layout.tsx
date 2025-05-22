import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import Header from '@/shared/components/Header';
import { AuthProvider } from '@/app/AuthProvider';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: '%s - платформа для историй',
    default: 'StoryHub',
  },
  description:
    'Мы верим, что у каждого человека есть история, достойная быть услышанной. Наш проект создан для того, чтобы  объединить авторов, читателей и просто любопытных людей, которые хотят вдохновения и эмоций.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AuthProvider>
          <Header />

          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
