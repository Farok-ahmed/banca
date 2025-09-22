import Image from "next/image";
import Link from "next/link";
import { fadeInRight, fadeInLeft } from "@/components/animation";
// Assets
import bannerImg1 from "@/assets/img/home-5/banner-img-1.png";
import bannerImg2 from "@/assets/img/home-5/banner-img-2.png";
import bannerImg3 from "@/assets/img/home-5/banner-img-3.png";
import bannerShape from "@/assets/img/home-5/banner-shape.png";
import AnimationDiv, { AnimationImg } from '@/components/animation/AnimationDiv';

const CompanyBanner = () => {
  return (
    <section className="banner-area-6">
      <div className="container">
        <div className="row ">
          <div className="col-lg-7">
            <AnimationDiv
              variants={fadeInRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="banner-content wow fadeInRight"
              data-wow-delay="0.2s"
            >
              <h1>Simplify all your banking and loan methods.</h1>
              <p>
                Our team of experts uses a methodology to identify the
                credit cards most.
              </p>
              <div className="d-flex flex-column flex-sm-row mt-25 subscribe-field">
                <input
                  type="email"
                  className="form-control me-sm-1"
                  placeholder="Enter Email address"
                />
                <Link
                  href="#"
                  className="input-append theme-btn theme-btn-lg ms-sm-2"
                >
                  Get Started
                </Link>
              </div>
              <ul className="list-unstyled feature-list">
                <li>
                  <i className="fas fa-check-circle"></i> Get 30 day free
                  trial
                </li>
                <li>
                  <i className="fas fa-check-circle"></i> No Spamming
                </li>
              </ul>
            </AnimationDiv>
          </div>
          <div className="col-lg-5 text-center text-lg-start">
            <div className="banner-img">
              <AnimationImg
                variants={fadeInLeft}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="img-1"
                src={bannerImg1.src}
                alt=""
              />
              <AnimationImg
                variants={fadeInRight}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="img-2"
                src={bannerImg2.src}
                alt=""
              />

              <AnimationDiv
                variants={fadeInRight}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="wow fadeInRight"
                data-wow-delay="1.1s"
              >
                <Image className="img-3" src={bannerImg3} alt="" />
              </AnimationDiv>
              <Image className="img-shape" src={bannerShape} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyBanner;