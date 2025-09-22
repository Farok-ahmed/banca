import Image from "next/image";
import { fadeInLeft, fadeInRight } from "@/components/animation";
// Assets
import manageCashImg from "@/assets/img/home-4/manage-cash-img.png";
import basicInfo2 from "@/assets/img/home-4/basic-info-2.png";
import basicInfo3 from "@/assets/img/home-4/basic-info-3.png";
import AnimationDiv from "@/components/animation/AnimationDiv";

const AboutSection = () => {
  return (
    <section className="about-area bg-white">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Image Section */}
          <div className="col-lg-7">
            <div className="cash-img position-relative">
              <Image
                className="img-fluid"
                src={manageCashImg}
                alt="Manage cash"
              />
              <AnimationDiv
                variants={fadeInRight}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                <Image
                  className="msg-1 wow fadeInRight"
                  data-wow-delay="0.1s"
                  src={basicInfo2}
                  alt="Info 2"
                />
              </AnimationDiv>
              <AnimationDiv
                variants={fadeInRight}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                <Image
                  className="msg-2 wow fadeInRight"
                  data-wow-delay="0.3s"
                  src={basicInfo3}
                  alt="Info 3"
                />
              </AnimationDiv>
            </div>
          </div>

          {/* Right Text Section */}
          <AnimationDiv
            variants={fadeInLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="col-lg-5 wow fadeInLeft"
          >
            <div className="section-title text-start">
              <span className="short-title-2">_WHY BANCA ?</span>
              <h1 className="mb-3">
                Manage your cash{" "}
                <span className="underline-shape">easily</span>
              </h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and the
                typesetting industry. Lorem Ipsum has been industrys
              </p>
              <ul className="list-unstyled feature-list">
                <li>
                  <i className="fas fa-check-circle"></i> Inventore
                  veritatis et architecto beatae
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> Tempor egestas
                  morbi pulvinar amet
                </li>
              </ul>
            </div>
          </AnimationDiv>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;