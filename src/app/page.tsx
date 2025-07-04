import AboutSection from "@/components/AboutSection";
import AboutTabs from "@/components/AboutTabs";
import BlogSection from "@/components/BlogSection";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import FeatureSteps from "@/components/Features";
import Footer from "@/components/Footer";
import ServiceComparison from "@/components/ServiceComparison";
import TestimonialSection from "@/components/TestimonialSection";
import Banner from "@/pages/Banner";

export default function Home() {
  return <main>
    <Banner/>
    <FeatureSteps/>
    <AboutSection/>
    <AboutTabs/>
    <FaqSection/>
    <ServiceComparison/>
    <TestimonialSection/>
    <BlogSection/>
    <CtaSection/>
    <Footer/>
  </main>;
}
