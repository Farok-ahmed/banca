import { fadeInRight } from "@/components/animation";
import AnimationDiv from "@/components/animation/AnimationDiv";

const BannerFacts = () => {
  return (
    <div className="banner-fact">
      <div className="container">
        <div className="row gy-lg-0 gy-4">
          <AnimationDiv
            variants={fadeInRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="col-lg-4 col-md-6 wow fadeInRight"
            data-wow-delay="0.1s"
          >
            <div className="single-fact">
              <div className="icon">
                <i className="fas fa-globe"></i>
              </div>
              <p>A global customer base from over 120 countries</p>
            </div>
          </AnimationDiv>
          <AnimationDiv
            variants={fadeInRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="col-lg-4 col-md-6 wow fadeInRight"
            data-wow-delay="0.4s"
          >
            <div className="single-fact">
              <div className="icon">
                <i className="fas fa-user"></i>
              </div>
              <p>Almost over 250 thousand active users</p>
            </div>
          </AnimationDiv>
          <AnimationDiv
            variants={fadeInRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="col-lg-4 col-md-6 wow fadeInRight mx-auto"
            data-wow-delay="0.7s"
          >
            <div className="single-fact">
              <div className="icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <p>10 years worth of experience as a industry expert</p>
            </div>
          </AnimationDiv>
        </div>
      </div>
    </div>
  );
};

export default BannerFacts;