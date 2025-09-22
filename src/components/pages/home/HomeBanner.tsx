import Image from "next/image";
import Link from "next/link";
import { fadeInLeft, fadeInRight } from "@/components/animation";
import LoanForm from "./LoanForm";
// Assets
import shape1 from "@/assets/img/home-4/shape-1.png";
import shape2 from "@/assets/img/home-4/shape-2.png";
import shape3 from "@/assets/img/home-4/shape-3.png";
import shape4 from "@/assets/img/home-4/shape-4.png";
import shape5 from "@/assets/img/home-4/shape-5.png";
import cooperator1 from "@/assets/img/home-4/cooperator-1.png";
import cooperator2 from "@/assets/img/home-4/cooperator-2.png";
import cooperator3 from "@/assets/img/home-4/cooperator-3.png";
import AnimationDiv from "@/components/animation/AnimationDiv";

const HomeBanner = () => {
  return (
    <section className="banner-area-5 h-100" id="banner_animation">
      <div className="bg-shapes">
        <div className="shape" data-parallax='{"x": -30,"y": 90,"rotateZ":50}'>
          <Image
            className="layer"
            data-depth="-0.06"
            src={shape2}
            alt="Shape 2"
          />
        </div>
        <div className="shape" data-parallax='{"y": -250}'>
          <Image
            className="layer"
            data-depth="-0.15"
            src={shape3}
            alt="Shape 3"
          />
        </div>
        <div className="shape" data-parallax='{"x": -40, "y": -150}'>
          <Image
            className="layer"
            data-depth="-0.3"
            src={shape4}
            alt="Shape 4"
          />
        </div>
        <div
          className="shape"
          data-parallax='{"x": 300, "y": 370, "rotateZ":200}'
        >
          <Image
            className="layer"
            data-depth="0.5"
            src={shape5}
            alt="Shape 5"
          />
        </div>

        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <div className="container">
        <div className="row align-items-end pt-170 pb-120">
          <div className="col-lg-6">
            <AnimationDiv
              variants={fadeInRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="banner-content wow fadeInRight"
              data-wow-delay="0.1s"
            >
              <h1>
                Smart finance solutions for your{" "}
                <span className="underline-shape">business</span>
              </h1>
              <p>
                Inventore veritatis et architecto beatae vitae dicta explicabo
                nemo enim ipsam voluptatem quia voluptas aspernatur magni.
              </p>

              <div className="d-flex flex-wrap mt-40">
                <Link href="/contact-us" className="theme-btn me-4">
                  Get started now
                </Link>
                <Link href="/contact-us" className="under_link">
                  Explore more <i className="arrow_right"></i>
                </Link>
              </div>

              <div className="co-operators">
                <p className="mb-4">We are cooperating with:</p>
                <div className="d-flex flex-wrap">
                  <Link href="#">
                    <Image src={cooperator1} alt="cooperator 1" />
                  </Link>
                  <Link href="#">
                    <Image src={cooperator2} alt="cooperator 2" />
                  </Link>
                  <Link href="#">
                    <Image src={cooperator3} alt="cooperator 3" />
                  </Link>
                </div>
              </div>
            </AnimationDiv>
          </div>

          <div className="col-lg-6">
            <AnimationDiv
              variants={fadeInLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="basic-loan-calculator wow fadeInLeft"
              data-wow-delay="0.1s"
            >
              <Image className="shape" src={shape1} alt="Shape 1" />
              <h4>Loan calculator</h4>
              <LoanForm />
            </AnimationDiv>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
