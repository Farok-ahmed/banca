import React from "react";
import NavBar from "./common-section/NavBar";
import Footer from "./common-section/Footer";
import FooterTwo from "./common-section/FooterTwo";
import FooterThree from "./common-section/FooterThree";
import FooterFour from "./common-section/FooterFour";
import FooterFive from "./common-section/FooterFive";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
      <FooterTwo />
      <FooterThree />
      <FooterFour />
      <FooterFive />
    </>
  );
};

export default DefaultLayout;
