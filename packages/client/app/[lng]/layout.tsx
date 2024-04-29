import './global.css';
import type { Metadata } from 'next'
import { dir } from 'i18next';

export const metadata: Metadata = {
  title: 'Household Accounts',
  description: '',
};

export default function RootLayout({
  children,
  params: {
    lng
  }
}: {
  children: React.ReactNode;
  params: {lng: string}
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body>{children}</body>
    </html>
  );
}
