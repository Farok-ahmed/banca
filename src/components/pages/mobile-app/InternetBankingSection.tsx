import Image from "next/image";
import Link from "next/link";
import { fadeInUp, fadeInRight, fadeInLeft } from "@/components/animation";
// Assets
import ibBg from "@/assets/img/internet-banking/shape-bg.png";
import ibImg1 from "@/assets/img/internet-banking/img-1.png";
import ibImg2 from "@/assets/img/internet-banking/img-2.png";
import ibImg3 from "@/assets/img/internet-banking/img-3.png";
import ibInfo from "@/assets/img/internet-banking/info.png";
import AnimationDiv, { AnimationImg } from "@/components/animation/AnimationDiv";

const InternetBankingSection = () => {
  return (
    <section className="internet-banking pt-100 pb-150">
      <div className="container">
        <div className="row gy-lg-0 gy-4">
          <div className="col-md-6 mx-auto mx-lg-0 text-center">
            <div className="img-content">
              <Image className="bg-img" src={ibBg} alt="" />
              <AnimationDiv
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="wow fadeInUp"
              >
                <Image
                  className="bank-main img-fluid"
                  src={ibImg1}
                  alt=""
                />
              </AnimationDiv>

              <AnimationImg
                variants={fadeInRight}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="bank-1 img-fluid"
                src={ibImg2.src}
                alt=""
              />

              <AnimationImg
                variants={fadeInLeft}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="bank-2 img-fluid"
                src={ibImg3.src}
                alt=""
              />

              <AnimationImg
                variants={fadeInRight}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="bank-3 img-fluid"
                src={ibInfo.src}
                alt=""
              />
            </div>
          </div>

          <div className="col-lg-6 col-xl-4 offset-xl-1 d-flex align-items-center">
            <div className="text-content">
              <h2>Access Personal Internet Banking</h2>
              <p>
                If you have chosen to order a Security Key, you will be
                entitled a 30-day period after self-registration, which is
                referred to as Security Key Activation Grace Period.
                During this period, you can log on to Personal Internet
                Banking.
              </p>

              <div>
                <Link className="theme-btn-2 mt-55" href="/loan-steps">
                  <span className="arrow">
                    <span className="horizontal-line"></span>
                  </span>
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternetBankingSection;