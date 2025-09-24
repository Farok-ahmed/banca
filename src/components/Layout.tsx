import React from "react";
import dynamic from "next/dynamic";
import NavBar from "./common-section/NavBar";
import BackToTop from "./BackToTop";

const Footer = dynamic(() => import("./common-section/Footer"), { ssr: true });

interface DefaultLayoutProps {
  children: React.ReactNode;
  footer?: React.ReactNode;
}

const DefaultLayout = ({ children, footer = <Footer /> }: DefaultLayoutProps) => {
  return (
    <>
      <NavBar />
      {children}
      {footer}
      <BackToTop />
    </>
  );
};

export default DefaultLayout;
