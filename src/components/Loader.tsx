'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import logo2 from '@/assets/img/logo/Logo-2.png';

const getRandomQuote = () => {
  const quotes = [
    'We design kbDoc for the readers, optimizing not for page views or engagement',
    'kbDoc turns out that context is a key part of learning.',
    'You can create any type of product documentation with kbDoc',
    'Advanced visual search system powered by Ajax',
  ];
  const randomIndex = Math.floor(Math.random() * quotes.length);

  if (randomIndex < 0 || randomIndex >= quotes.length) return getRandomQuote();

  return quotes[randomIndex];
};

export default function PreLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (!loading) return null;

  return (
    <div id="preloader">
      <div id="ctn-preloader" className="ctn-preloader">
        <div className="round_spinner">
          <div className="spinner"></div>
          <div className="text">
            <Image src={logo2} alt="Logo" />
          </div>
        </div>
        <h2 className="head">Did You Know?</h2>
        <p>{getRandomQuote()}</p>
      </div>
    </div>
  );
}
