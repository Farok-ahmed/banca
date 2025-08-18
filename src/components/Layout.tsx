import React from "react";
// import BackToTop from "./BackToTop";
import NavBar from "./common-section/NavBar";
import Footer from "./common-section/Footer";
import { usePathname } from "next/navigation";
import FooterTwo from "./common-section/FooterTwo";
import FooterThree from "./common-section/FooterThree";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  const indexCompany = pathName === "/index-company";
  const mobileApp = pathName === "/mobile-app";
  const simpleBanca = pathName === "/simple-banca";
  return (
    <>
      {/* <BackToTop /> */}
      <NavBar />
      {children}
      {
        !indexCompany && !mobileApp && !simpleBanca && (
          <>
            <Footer />
          </>
        )
      }
      <FooterTwo />
      <FooterThree />
    </>
  );
};

export default DefaultLayout;
