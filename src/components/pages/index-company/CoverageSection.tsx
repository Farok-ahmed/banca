import Image from "next/image";
import { fadeInUp, fadeInLeft } from "@/components/animation";
// Assets
import country1 from "@/assets/img/home-5/country-1.png";
import country2 from "@/assets/img/home-5/country-2.png";
import country3 from "@/assets/img/home-5/country-3.png";
import country4 from "@/assets/img/home-5/country-4.png";
import country5 from "@/assets/img/home-5/country-5.png";
import country6 from "@/assets/img/home-5/country-6.png";
import { AnimationH1, AnimationLink } from "@/components/animation/AnimationDiv";

const CoverageSection = () => {
  return (
    <section className="coverage-area">
      <div className="container">
        <div className="section-title">
          <span className="short-title-2">ABout us</span>
          <AnimationH1
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="wow fadeInUp"
          >
            Learn about how Banca works
          </AnimationH1>
        </div>
        <div className="row mt-50 gy-xl-0 gy-4 text-center">
          <div className="col-xl-2 col-lg-3 col-sm-4 col-6">
            <AnimationLink
              variants={fadeInLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              href="#"
              className="country-widget wow fadeInLeft"
              data-wow-delay="0.1s"
            >
              <Image src={country1} alt="country" />
              <h5>Brazil</h5>
            </AnimationLink>
          </div>
          <div className="col-xl-2 col-lg-3 col-sm-4 col-6">
            <AnimationLink
              variants={fadeInLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              href="#"
              className="country-widget wow fadeInLeft"
              data-wow-delay="0.3s"
            >
              <Image src={country2} alt="country" />
              <h5>Canada</h5>
            </AnimationLink>
          </div>
          <div className="col-xl-2 col-lg-3 col-sm-4 col-6">
            <AnimationLink
              variants={fadeInLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              href="#"
              className="country-widget wow fadeInLeft"
              data-wow-delay="0.5s"
            >
              <Image src={country3} alt="country" />
              <h5>Australia</h5>
            </AnimationLink>
          </div>
          <div className="col-xl-2 col-lg-3 col-sm-4 col-6">
            <AnimationLink
              variants={fadeInLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              href="#"
              className="country-widget wow fadeInLeft"
              data-wow-delay="0.7s"
            >
              <Image src={country4} alt="country" />
              <h5>USA</h5>
            </AnimationLink>
          </div>
          <div className="col-xl-2 col-lg-3 col-sm-4 col-6">
            <AnimationLink
              variants={fadeInLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              href="#"
              className="country-widget wow fadeInLeft"
              data-wow-delay="0.9s"
            >
              <Image src={country5} alt="country" />
              <h5>South Korea</h5>
            </AnimationLink>
          </div>

          <div className="col-xl-2 col-lg-3 col-sm-4 col-6">
            <AnimationLink
              variants={fadeInLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              href="#"
              className="country-widget wow fadeInLeft"
              data-wow-delay="1.1s"
            >
              <Image src={country6} alt="country" />
              <h5>Bangladesh</h5>
            </AnimationLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageSection;