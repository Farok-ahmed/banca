import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "nouislider/dist/nouislider.css";
import "@/styles/css/jquery.fancybox.min.css";
import LoanSlider from "@/components/LoanSlider";
import DefaultLayout from "@/components/Layout";
// Assets
import CompanyBanner from "./CompanyBanner";
import BannerFacts from "./BannerFacts";
import FeaturesSection from "./FeaturesSection";
import CompanyLoanProcess from "./CompanyLoanProcess";
import CalculatorSection from "./CalculatorSection";
import CompanyAbout from "./CompanyAbout";
import CoverageSection from "./CoverageSection";
import ConsultationSection from "./ConsultationSection";
import FooterTwo from "@/components/common-section/FooterTwo";

const CompanyPage = () => {
  return (
    <>
      <DefaultLayout footer={<FooterTwo />}>
        <main>
          <CompanyBanner/>

         <BannerFacts/>

         <FeaturesSection/>

         <CompanyLoanProcess/>

         <CalculatorSection/>

          <LoanSlider />

          <CompanyAbout />

         <CoverageSection/>
         <ConsultationSection/>
        </main>
      </DefaultLayout>
    </>
  );
};

export default CompanyPage;
