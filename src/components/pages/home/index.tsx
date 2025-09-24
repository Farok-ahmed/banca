import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import DefaultLayout from "@/components/Layout";
import FaqTabs from "./FaqTabs";
import HomeTestimonials from "./HomeTestimonials";
// Assets
import HomeBanner from "./HomeBanner";
import StepsSection from "./StepsSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import BlogSection from "./BlogSection";
import CtaSection from "./CtaSection";

export default function Home() {
    return (
        <>
            <DefaultLayout footerType="one">
                <main>
                    <HomeBanner />

                    <StepsSection />

                    <AboutSection />

                    <FaqTabs />

                    <ServicesSection />

                    <HomeTestimonials />

                    <BlogSection />

                    <CtaSection />
                </main>
            </DefaultLayout>
        </>
    );
}
