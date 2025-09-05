"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  // Scroll checker
  const backToTopActivator = () => {
    if (window.scrollY > 200) setVisible(true);
    else setVisible(false);
  };

  // Back to top function
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", backToTopActivator);

    return () => {
      window.removeEventListener("scroll", backToTopActivator);
    };
  }, []);

  return (
    <button
      onClick={handleBackToTop}
      id="back-to-top"
      title="Back to Top"
      className={visible ? "show" : ""}
    >
    </button>
  );
}
