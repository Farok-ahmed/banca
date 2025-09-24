import NewsSlider from "@/components/BancaNews";
import "@/styles/css/slick.css";
import "@/styles/css/slick-theme.css";
import DefaultLayout from "@/components/Layout";
// Assets
import MobileBanner from "./MobileBanner";
import MobileFeatures from "./MobileFeatures";
import TrackProgressSection from "./TrackProgressSection";
import CardPaymentSection from "./CardPaymentSection";
import InternetBankingSection from "./InternetBankingSection";
import SecurityTipsSection from "./SecurityTipsSection";
import ClientSection from "./ClientSection";
import FooterThree from "@/components/common-section/FooterThree";

const MobileAppPage = () => {
  return (
    <>
      <DefaultLayout footer={<FooterThree />}>
        <main>
          <MobileBanner />

          <MobileFeatures />

          <TrackProgressSection />

          <CardPaymentSection />

          <InternetBankingSection />

          <SecurityTipsSection />

          <ClientSection />

          <NewsSlider />
        </main>
      </DefaultLayout>
    </>
  );
};

export default MobileAppPage;
