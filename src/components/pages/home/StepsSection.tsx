import Image from "next/image";
import { fadeInUp } from "@/components/animation";
// Assets
import stepIcon01 from "@/assets/img/home-4/step-icon-01.svg";
import stepIcon02 from "@/assets/img/home-4/step-icon-02.svg";
import stepIcon03 from "@/assets/img/home-4/step-icon-03.svg";
import AnimationDiv, { AnimationH1, AnimationP } from "@/components/animation/AnimationDiv";

const StepsSection = () => {
  return (
    <section id="feature" className="steps-area pt-115 pb-105 bg-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto pb-55">
            <div className="section-title">
              <span className="short-title-2">_OUR PROCESS</span>
              <AnimationH1
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="wow fadeInUp"
              >
                3 <span className="underline-shape">steps</span> to follow
              </AnimationH1>
              <AnimationP
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="wow fadeInUp"
                data-wow-delay="0.3s"
              >
                There are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in
                some form,
              </AnimationP>
            </div>
          </div>
        </div>

        <div className="row gy-xl-0 gy-4">
          {/* Step 1 */}
          <div className="col-xl-4 col-md-6">
            <AnimationDiv
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="feature-card-widget-8 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="card-img">
                <Image src={stepIcon01} alt="Apply for loan" />
              </div>
              <h4>Apply for loan</h4>
              <p>
                Quis dapibus volutpat condimentum quam sed non elit sed
                magna lectus dui interdum facilisi justo
              </p>
            </AnimationDiv>
          </div>

          {/* Step 2 */}
          <div className="col-xl-4 col-md-6">
            <AnimationDiv
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="feature-card-widget-8 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="card-img">
                <Image src={stepIcon02} alt="Get approved" />
              </div>
              <h4>Get approved</h4>
              <p>
                Quis dapibus volutpat condimentum quam sed non elit sed
                magna lectus dui interdum facilisi justo
              </p>
            </AnimationDiv>
          </div>

          {/* Step 3 */}
          <div className="col-xl-4 col-md-6 mx-auto">
            <AnimationDiv
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="feature-card-widget-8 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="card-img">
                <Image src={stepIcon03} alt="Get your money" />
              </div>
              <h4>Get your money</h4>
              <p>
                Quis dapibus volutpat condimentum quam sed non elit sed
                magna lectus dui interdum facilisi justo
              </p>
            </AnimationDiv>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;