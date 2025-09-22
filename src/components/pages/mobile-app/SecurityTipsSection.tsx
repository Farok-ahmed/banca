import Image from "next/image";
import { fadeInUp, fadeInRight } from "@/components/animation";
// Assets
import secImg1 from "@/assets/img/security-tips/img-1.png";
import secImg2 from "@/assets/img/security-tips/img-2.png";
import secImg3 from "@/assets/img/security-tips/img-3.png";
import AnimationDiv  from '@/components/animation/AnimationDiv';

const SecurityTipsSection = () => {
  return (
    <section className="security-area pt-115 pb-130">
      <div className="container">
        <div className="section-title">
          <h2>Security Tips</h2>
        </div>

        <div className="row pt-40">
          <div className="col-xl-6">
            <AnimationDiv
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="single-security-widget wow fadeInUp"
            >
              <div className="security-img text-center">
                <Image
                  className="img-fluid round-15"
                  src={secImg1}
                  alt="security image"
                />
              </div>
              <div className="security-content">
                <h4>Online Security</h4>
                <p>
                  Banca will never send emails that ask for confidential
                  information. We will never seek your personal details
                  such as account information, password, etc at any time.
                </p>
              </div>
            </AnimationDiv>
          </div>
          <div className="col-xl-6">
            <AnimationDiv
              variants={fadeInRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="single-security-widget mt-xl-0 mt-4 wow fadeInRight"
              data-wow-delay="0.2s"
            >
              <div className="row align-items-center">
                <div className="col-4">
                  <div className="security-img h-100">
                    <Image
                      className="img-fluid round-10 h-100"
                      src={secImg2}
                      alt="security image"
                    />
                  </div>
                </div>
                <div className="col-8">
                  <div className="security-content-2 ps-2">
                    <p className="mb-4">
                      Naver share your OTP with anyon,click here for more
                      security tips to keep you safe.
                    </p>
                    <span className="tips-title">Card Safety</span>
                  </div>
                </div>
              </div>
            </AnimationDiv>

            <AnimationDiv
              variants={fadeInRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="single-security-widget mt-25 mt-lg-30 wow fadeInRight"
              data-wow-delay="0.4s"
            >
              <div className="row">
                <div className="col-7">
                  <div className="security-content-2">
                    <p>
                      Never disclose your pin number to anyone, Mashreq
                      staff will never ask for your pin number. For your
                      security, we recommend that you change your ATM PIN
                      regularly.
                    </p>
                    <span className="tips-title mt-35">ATM Safety</span>
                  </div>
                </div>

                <div className="col-5">
                  <div className="security-img h-100">
                    <Image
                      className="img-fluid round-10 h-100"
                      src={secImg3}
                      alt="security image"
                    />
                  </div>
                </div>
              </div>
            </AnimationDiv>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityTipsSection;