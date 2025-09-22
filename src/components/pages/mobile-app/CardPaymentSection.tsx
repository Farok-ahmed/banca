import Image from "next/image";
import Link from "next/link";
import { fadeInLeft } from "@/components/animation";
// Assets
import cardBg from "@/assets/img/card-payment/shape-bg.png";
import card1 from "@/assets/img/card-payment/card-1.png";
import card2 from "@/assets/img/card-payment/card-2.png";
import AnimationDiv, { AnimationImg } from "@/components/animation/AnimationDiv";

const CardPaymentSection = () => {
  return (
    <section className="card-payment pt-100 pb-130">
      <div className="container">
        <div className="row gy-lg-0 gy-4">
          <div className="col-lg-6 col-xl-5 d-flex align-items-center order-2 order-lg-1">
            <div className="text-content">
              <h2>Simplicity Credit Card Payment</h2>
              <p>
                Make a Payment. Cardholders can pay any outstanding
                balances on their Citibank Simplicity Credit Card by
                logging in to their online account.
              </p>

              <div>
                <Link className="theme-btn-2 mt-55" href="/card">
                  <span className="arrow">
                    <span className="horizontal-line"></span>
                  </span>
                  Learn more
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 mx-auto offset-xl-1 order-1 order-lg-2">
            <div className="img-content">
              <Image className="bg-img" src={cardBg} alt="" />
              <AnimationDiv
                variants={fadeInLeft}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="wow fadeInLeft"
              >
                <Image className="card-1 img-fluid" src={card1} alt="" />
              </AnimationDiv>

              <AnimationImg
                variants={fadeInLeft}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="card-2"
                src={card2.src}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardPaymentSection;