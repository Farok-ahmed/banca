import Image from "next/image";
import Link from "next/link";
import { fadeInRight, fadeInUp } from "@/components/animation";
// Assets
import ctaImg from "@/assets/img/home-4/cta-Img.png";
import ctaShape from "@/assets/img/home-4/cta-shape.png";
import AnimationDiv, { AnimationImg } from "@/components/animation/AnimationDiv";

const CtaSection = () => {
  return (
    <section className="cta-area-3 bg-white">
      <div className="container">
        <div className="row">
          <div className="col-md-12 position-relative">
            <div className="cta-4 cta-bg-primary">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <AnimationDiv
                    variants={fadeInRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="cta-content wow fadeInRight"
                  >
                    <h2 className="mb-10">Start your free trial !</h2>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available.
                    </p>
                    <div className="d-flex flex-column flex-sm-row mt-40">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Email address"
                      />
                      <Link
                        href="#"
                        className="input-append theme-btn theme-btn-lg ms-sm-3"
                      >
                        Subscribe
                      </Link>
                    </div>
                    <ul className="list-unstyled feature-list">
                      <li>
                        <i className="fas fa-check-circle"></i> Get 30 day
                        free trial
                      </li>
                      <li>
                        <i className="fas fa-check-circle"></i> No
                        Spamming
                      </li>
                    </ul>
                  </AnimationDiv>
                </div>

                <div className="col-lg-6">
                  <AnimationImg
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: "all" }}
                    className="cta-img wow fadeInUp img-fluid"
                    src={ctaImg.src}
                    alt=""
                  />

                  <Image
                    className="shape img-fluid"
                    src={ctaShape}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;