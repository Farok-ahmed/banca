import Image from "next/image";
import { fadeInUp } from "@/components/animation";
// Assets
import featureIcon1 from "@/assets/img/feature/icon-1.svg";
import featureIcon2 from "@/assets/img/feature/icon-2.svg";
import featureIcon3 from "@/assets/img/feature/icon-3.svg";
import featureIcon4 from "@/assets/img/feature/icon-4.svg";
import AnimationDiv, { AnimationH2, AnimationP } from "@/components/animation/AnimationDiv";

const MobileFeatures = () => {
  return (
    <section id="feature" className="feature-area pt-200 pb-130">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto pt-160 pt-lg-90 pb-65">
            <div className="section-title">
              <AnimationH2
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="wow fadeInUp"
              >
                Our Featured
              </AnimationH2>
              <AnimationP
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="wow fadeInUp"
                data-wow-delay="0.3s"
              >
                You may want top security so that you can rest assured
                that your accounts will not be compromised while you are
                using the app.
              </AnimationP>
            </div>
          </div>
        </div>
        <div className="row gy-xl-0 gy-4">
          <div className="col-xl-3 col-md-6">
            <AnimationDiv
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="feature-card-widget wow fadeInUp"
            >
              <div className="card-img">
                <Image src={featureIcon1} alt="feature svg" />
              </div>
              <h4>Prepaid Card</h4>
              <p>
                It is a long established fact that a reader will be
                distracted by the readable content
              </p>
            </AnimationDiv>
          </div>
          <div className="col-xl-3 col-md-6">
            <AnimationDiv
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="feature-card-widget wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="card-img">
                <Image src={featureIcon2} alt="feature svg" />
              </div>
              <h4>Easy to use</h4>
              <p>
                The way to solve the word placement to treat the phrase
                easy to use as a single.
              </p>
            </AnimationDiv>
          </div>
          <div className="col-xl-3 col-md-6">
            <AnimationDiv
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="feature-card-widget wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="card-img">
                <Image
                  src={featureIcon3}
                  alt="feature svg"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
              <h4>save your Card</h4>
              <p>
                We keep your information safe and notify you anytime your
                saved payment card.
              </p>
            </AnimationDiv>
          </div>
          <div className="col-xl-3 col-md-6">
            <AnimationDiv
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="feature-card-widget wow fadeInUp"
              data-wow-delay="0.9s"
            >
              <div className="card-img">
                <Image src={featureIcon4} alt="feature svg" />
              </div>
              <h4>pay bill</h4>
              <p>
                That is why we have a wide range of bill payment options
                through our Banking service.
              </p>
            </AnimationDiv>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileFeatures;