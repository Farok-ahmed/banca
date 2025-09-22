import Link from "next/link";
import { fadeInUp, fadeInLeft, fadeInRight } from "@/components/animation";
import ClientSlider from "@/components/MobileTestimonial";
// Assets
import ctaBg from "@/assets/img/client/cta-bg.png";
import AnimationDiv, { AnimationH2 } from "@/components/animation/AnimationDiv";

const ClientSection = () => {
  return (
    <section className="client-area pt-110 ">
      <div className="container">
        <div className="section-title">
          <AnimationH2
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="wow fadeInUp mb-0"
          >
            What Our Client Say
          </AnimationH2>
        </div>

        <ClientSlider />

        <div className="row pt-110">
          <div className="col-md-12 position-relative">
            <div
              className="cta cta-2"
              style={{
                backgroundImage: `url(${ctaBg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="bubbles">
                <div className="bubble-1"></div>
                <div className="bubble-2"></div>
                <div className="bubble-3"></div>
                <div className="bubble-4"></div>
                <div className="bubble-5"></div>
                <div className="bubble-6"></div>
                <div className="bubble-7"></div>
                <div className="bubble-8"></div>
              </div>
              <div className="row gy-xl-0 gy-4">
                <div className="col-xl-5">
                  <AnimationDiv
                    variants={fadeInLeft}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="cta-content wow fadeInLeft text-center text-xl-start"
                  >
                    <h2>Download Our Free Mobile App</h2>
                  </AnimationDiv>
                </div>
                <div className="col-xl-7 d-flex align-items-center flex-wrap justify-content-xl-end justify-content-center">
                  <Link href="#">
                    <AnimationDiv
                      variants={fadeInRight}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="app-btn mt-3 mt-sm-0 wow fadeInRight"
                      data-wow-delay="0.1s"
                    >
                      <i className="fab fa-google-play"></i>
                      <div className="btn-text">
                        <span>GET IT ON</span>
                        <p>Google Play</p>
                      </div>
                    </AnimationDiv>
                  </Link>
                  <Link href="#">
                    <AnimationDiv
                      variants={fadeInRight}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                      className="app-btn mt-3 mt-sm-0 wow fadeInRight"
                      data-wow-delay="0.2s"
                    >
                      <i className="fab fa-apple"></i>
                      <div className="btn-text">
                        <span>Downloan on the</span>
                        <p>Apple Store</p>
                      </div>
                    </AnimationDiv>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;