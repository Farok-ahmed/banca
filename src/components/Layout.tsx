import React from "react";
// import BackToTop from "./BackToTop";
import NavBar from "./common-section/NavBar";
import Footer from "./common-section/Footer";
import { usePathname } from "next/navigation";
import FooterTwo from "./common-section/FooterTwo";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
    const pathName = usePathname();
    const indexCompany = pathName === "/index-company";
  return (
    <>
      {/* <BackToTop /> */}
      <NavBar />
      {children}
      {
        indexCompany ? <FooterTwo/> : <Footer />
      }
      
    </>
  );
};

export default DefaultLayout;
