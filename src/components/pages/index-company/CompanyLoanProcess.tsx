import Image from "next/image";
import Link from "next/link";
import { fadeInLeft, fadeInRight } from "@/components/animation";
// Assets
import aboutArrow1 from "@/assets/img/home-5/about-arrow-1.png";
import aboutArrow2 from "@/assets/img/home-5/about-arrow-2.png";
import msg1 from "@/assets/img/home-5/msg-1.png";
import msg2 from "@/assets/img/home-5/msg-2.png";
import msg3 from "@/assets/img/home-5/msg-3.png";
import cardHolder from "@/assets/img/home-5/card-holder.png";
import bankBalance from "@/assets/img/home-5/bank-balance.png";
import AnimationDiv from "@/components/animation/AnimationDiv";

const CompanyLoanProcess = () => {
  return (
    <section className="about-area-2 bg-white">
      <div className="container">
        <div className="row align-items-center">
          <AnimationDiv
            variants={fadeInLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="col-lg-6 wow fadeInLeft"
          >
            <div className="text-start">
              <h1 className="mb-3">Get loan from 3 simple process</h1>
              <p>
                There are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in
                some form,
              </p>
              <ul className="list-unstyled feature-list">
                <li>
                  {" "}
                  <i className="fas fa-check-circle"></i>It is a long
                  established fact that a reader will be{" "}
                </li>
                <li>
                  {" "}
                  <i className="fas fa-check-circle"></i> It is a long
                  established fact distracted by the readable
                </li>
              </ul>
              <Link href="/loan" className="read-more-btn">
                <span>Learn about the process</span>
                <i className="arrow_right"></i>
              </Link>
            </div>
          </AnimationDiv>
          <AnimationDiv
            variants={fadeInRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="col-lg-6 wow fadeInRight"
          >
            <div className="sms-flow">
              <Image className="arrow-1" src={aboutArrow1} alt="" />
              <Image className="arrow-2" src={aboutArrow2} alt="" />
              <Image
                className="msg-1 wow fadeInUp"
                data-wow-delay="0.1s"
                src={msg1}
                alt=""
              />
              <Image className="msg-2" src={msg2} alt="" />
              <Image
                className="msg-3 wow fadeInDown"
                data-wow-delay="0.3s"
                src={msg3}
                alt=""
              />
            </div>
          </AnimationDiv>
        </div>

        <div className="row align-items-center gy-4 mt-3">
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="card-holder">
              <div className="shape-1"></div>
              <div className="shape-2"></div>
              <Image
                className="img-1 img-fluid"
                src={cardHolder}
                alt=""
              />
              <AnimationDiv
                variants={fadeInRight}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="wow fadeInRight"
                data-wow-delay="0.2s"
              >
                <Image className="img-2" src={bankBalance} alt="" />
              </AnimationDiv>
            </div>
          </div>
          <AnimationDiv
            variants={fadeInRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="col-lg-6 order-lg-2 order-1 wow fadeInRight"
          >
            <h1 className="mb-3">
              We have reputable customer relatinships
            </h1>
            <p>
              There are many variations of passages of Lorem Ipsum
              available, but the majority have suffered alteration in some
              form, by injected humour, or randomised words which do not
              look even slightly .{" "}
            </p>

            <div className="customer-num">
              <div>
                <h1>50</h1>
                <span>
                  Parters <br />
                  Included
                </span>
              </div>
              <div>
                <h1>1M</h1>
                <span>
                  Total <br />
                  Attendies
                </span>
              </div>
            </div>
          </AnimationDiv>
        </div>
      </div>
    </section>
  );
};

export default CompanyLoanProcess;