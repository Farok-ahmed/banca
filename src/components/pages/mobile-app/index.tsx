import NewsSlider from "@/components/BancaNews";
import "@/styles/css/slick.css";
import "@/styles/css/slick-theme.css";
import "@/styles/css/nice-select.css";
import DefaultLayout from "@/components/Layout";
// Assets
import MobileBanner from "./MobileBanner";
import MobileFeatures from "./MobileFeatures";
import TrackProgressSection from "./TrackProgressSection";
import CardPaymentSection from "./CardPaymentSection";
import InternetBankingSection from "./InternetBankingSection";
import SecurityTipsSection from "./SecurityTipsSection";
import ClientSection from "./ClientSection";

const MobileAppPage = () => {
  // helper to render caret icon on mobile

  return (
    <>
      <DefaultLayout>
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
