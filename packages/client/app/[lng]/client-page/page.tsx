'use client';

import Link from 'next/link';
import { useTranslation } from '../../i18n/client';
import { Footer } from '../components/Footer/client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Page({ params: { lng } }:any) {
  const { t } = useTranslation(lng, 'client-page')
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <h1>{t('title')}</h1>
      <Link href={`/${lng}`}>
        <button type="button">
          {t('back-to-home')}
        </button>
      </Link>
      <Footer lng={lng} currentUrl={usePathname()} />
    </>
  )
}
