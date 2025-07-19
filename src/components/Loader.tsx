"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function PreLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!loading) return null;

  return (
    <div id="preloader">
      <div id="ctn-preloader" className="ctn-preloader">
        <div className="round_spinner">
          <div className="spinner"></div>
          <div className="text">
            <img src="/img/logo/Logo-2.png" alt="Logo" />
          </div>
        </div>
        <h2 className="head">Did You Know?</h2>
        <p></p>
      </div>
    </div>
  );
}
