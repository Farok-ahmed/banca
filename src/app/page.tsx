import AboutSection from "@/components/AboutSection";
import AboutTabs from "@/components/AboutTabs";
import FeatureSteps from "@/components/Features";
import Banner from "@/pages/Banner";

export default function Home() {
  return <main>
    <Banner/>
    <FeatureSteps/>
    <AboutSection/>
    <AboutTabs/>
  </main>;
}
