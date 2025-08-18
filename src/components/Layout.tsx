"use client"
import React from "react";
// import BackToTop from "./BackToTop";
import NavBar from "./common-section/NavBar";
import Footer from "./common-section/Footer";
import { usePathname } from "next/navigation";
import FooterTwo from "./common-section/FooterTwo";
import FooterThree from "./common-section/FooterThree";
import FooterFour from "./common-section/FooterFour";
import FooterFive from "./common-section/FooterFive";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  const indexCompany = pathName === "/index-company";
  const mobileApp = pathName === "/mobile-app";
  const simpleBanca = pathName === "/simple-banca";
  const financeSass = pathName === "/finance-sass-app";
  const smallBank = pathName === "/small-bank";
  return (
    <>
      {/* <BackToTop /> */}
      <NavBar />
      {children}
      {
        !indexCompany && !mobileApp && !simpleBanca && !financeSass && !smallBank && (
          <>
            <Footer />
          </>
        )
      }
      <FooterTwo />
      <FooterThree />
      <FooterFour />
      <FooterFive/>
    </>
  );
};

export default DefaultLayout;
