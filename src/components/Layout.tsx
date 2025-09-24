import React from "react";
import dynamic from "next/dynamic";
import NavBar from "./common-section/NavBar";
import BackToTop from "./BackToTop";

// Lazy-load footers so only the selected variant is bundled/loaded
const Footer = dynamic(() => import("./common-section/Footer"), { ssr: true });
const FooterTwo = dynamic(() => import("./common-section/FooterTwo"), { ssr: true });
const FooterThree = dynamic(() => import("./common-section/FooterThree"), { ssr: true });
const FooterFour = dynamic(() => import("./common-section/FooterFour"), { ssr: true });
const FooterFive = dynamic(() => import("./common-section/FooterFive"), { ssr: true });
interface DefaultLayoutProps {
  children: React.ReactNode;
  footerType?: "one" | "two" | "three" | "four" | "five";
}

const DefaultLayout = ({ children, footerType="one" }: DefaultLayoutProps) => {
  return (
    <>
      <NavBar />
      {children}
        {footerType === "one" && <Footer />}
        {footerType === "two" && <FooterTwo />}
        {footerType === "three" && <FooterThree />}
        {footerType === "four" && <FooterFour />}
        {footerType === "five" && <FooterFive />}
      {/* Back-to-top is layout-scoped instead of app-wide */}
      <BackToTop />
    </>
  );
};

export default DefaultLayout;
