import Image from "next/image";
import Link from "next/link";
import { fadeInUp } from "@/components/animation";
// Assets
import featureIcon1 from "@/assets/img/home-5/feature-icon-1.svg";
import featureIcon2 from "@/assets/img/home-5/feature-icon-2.svg";
import featureIcon3 from "@/assets/img/home-5/feature-icon-3.svg";
import featureIcon4 from "@/assets/img/home-5/feature-icon-4.svg";
import featureIcon5 from "@/assets/img/home-5/feature-icon-5.svg";
import featureIcon6 from "@/assets/img/home-5/feature-icon-6.svg";
import featureIcon7 from "@/assets/img/home-5/feature-icon-7.svg";
import AnimationDiv, { AnimationH1 } from "@/components/animation/AnimationDiv";

const FeaturesSection = () => {
  return (
    <section className="pt-115 pb-105 feature-area-3">
      <div className="container">
        <div className="section-title">
          <span className="short-title-2">OUR Features</span>
          <AnimationH1
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="wow fadeInUp"
          >
            We have better and more feature
          </AnimationH1>
        </div>
        <div className="row gy-4 mt-50">
          <div className="col-xl-3 col-lg-4 col-md-6">
            <AnimationDiv
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="feature-card-widget-9 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <Image src={featureIcon1} alt="" />
              <h5>Fast Mobility</h5>
              <p>Quis dapibus volutpat condi</p>
            </AnimationDiv>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <AnimationDiv
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="feature-card-widget-9 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <Image src={featureIcon2} alt="" />
              <h5>Term Loan</h5>
              <p>Quis dapibus volutpat condi</p>
            </AnimationDiv>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6">
            <AnimationDiv
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="feature-card-widget-9 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <Image src={featureIcon3} alt="" />
              <h5>Easy Experience</h5>
              <p>Quis dapibus volutpat condi</p>
            </AnimationDiv>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <AnimationDiv
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="feature-card-widget-9 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <Image src={featureIcon4} alt="" />
              <h5>Safe and protected</h5>
              <p>Quis dapibus volutpat condi</p>
            </AnimationDiv>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <AnimationDiv
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="feature-card-widget-9 wow fadeInUp"
              data-wow-delay="0.9s"
            >
              <Image src={featureIcon5} alt="" />
              <h5>Wordwide</h5>
              <p>Quis dapibus volutpat condi</p>
            </AnimationDiv>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <AnimationDiv
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="feature-card-widget-9 wow fadeInUp"
              data-wow-delay="1.1s"
            >
              <Image src={featureIcon6} alt="" />
              <h5>One term fees</h5>
              <p>Quis dapibus volutpat condi</p>
            </AnimationDiv>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <AnimationDiv
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="feature-card-widget-9 wow fadeInUp"
              data-wow-delay="1.3s"
            >
              <Image src={featureIcon7} alt="" />
              <h5>Merchant Payment</h5>
              <p>Quis dapibus volutpat condi</p>
            </AnimationDiv>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6">
            <AnimationDiv
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="feature-card-widget-9 wow fadeInUp widget-link"
              data-wow-delay="1.7s"
            >
              <h1>10+</h1>
              <Link href="#">
                More features <i className="arrow_right "></i>
              </Link>
            </AnimationDiv>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;