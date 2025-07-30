"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  const backToTopActivator = () => {
    if (window.scrollY > 200) setVisible(true);
    else setVisible(false);
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const btn = buttonRef.current;
    window.document.addEventListener("scroll", backToTopActivator);
    btn?.addEventListener("click", handleBackToTop);

    return () => {
      window.document.removeEventListener("scroll", backToTopActivator);
      btn?.removeEventListener("click", handleBackToTop);
    };
  }, []);

  return (
    <Link
      href="#"
      ref={buttonRef}
      id="back-to-top"
      title="Back to Top"
      className={visible ? "show" : ""}
    ></Link>
  );
}