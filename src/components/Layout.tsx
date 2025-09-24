import React from "react";
import NavBar from "./common-section/NavBar";
import Footer from "./common-section/Footer";
import FooterTwo from "./common-section/FooterTwo";
import FooterThree from "./common-section/FooterThree";
import FooterFour from "./common-section/FooterFour";
import FooterFive from "./common-section/FooterFive";
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
    </>
  );
};

export default DefaultLayout;
