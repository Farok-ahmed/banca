import Image from "next/image";
import Link from "next/link";
import { fadeInUp, fadeInRight, fadeInLeft } from "@/components/animation";
// Assets
import aboutUsImg from "@/assets/img/home-5/about-us-img.png";
import AnimationDiv, { AnimationH1 } from "@/components/animation/AnimationDiv";

const CompanyAbout = () => {
  return (
    <section className="about-area-3 bg-white pb-lg-120 pb-60">
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
        <div className="row align-items-center pt-60 gy-lg-0 gy-4">
          <AnimationDiv
            variants={fadeInRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="col-lg-6 wow fadeInRight"
            data-wow-delay="0.1s"
          >
            <div>
              <h5>
                <span className="round-dot"></span> <span>1.5M</span>{" "}
                Active Customers
              </h5>
              <p>
                There are many variations of passages of Lorem Ipsum
                available, but the majority have.
              </p>
            </div>
            <div className="mt-40">
              <h5>
                <span className="round-dot"></span> <span>30k</span>{" "}
                Business Partners
              </h5>
              <p>
                There are many variations of passages of Lorem Ipsum
                available, but the majority have.
              </p>
            </div>
          </AnimationDiv>
          <AnimationDiv
            variants={fadeInLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="col-lg-6 wow fadeInLeft"
            data-wow-delay="0.3s"
          >
            <div className="video-tut">
              <Image
                src={aboutUsImg}
                alt=""
                style={{ width: "auto", height: "auto" }}
              />
              <Link
                className="play-btn"
                data-fancybox=""
                href="https://www.youtube.com/watch?v=xcJtL7QggTI"
                tabIndex={0}
              >
                <i className="fas fa-play"></i>
              </Link>
            </div>
          </AnimationDiv>
        </div>
      </div>
    </section>
  );
};

export default CompanyAbout;