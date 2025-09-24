'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import logo2 from '@/assets/img/logo/Logo-2.png';

export default function PreLoader({ quote }: { quote: string }) {
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  const timer = setTimeout(() => setLoading(false), 1000); 
  return () => clearTimeout(timer);
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
        <p>{quote}</p>
      </div>
    </div>
  );
}
