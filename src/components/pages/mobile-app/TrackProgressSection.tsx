import Image from "next/image";
import Link from "next/link";
import { fadeInUp, fadeInRight } from "@/components/animation";
// Assets
import trackBg from "@/assets/img/track-progress/shape-bg.png";
import track1 from "@/assets/img/track-progress/track-1.png";
import track2 from "@/assets/img/track-progress/track-2.png";
import track3 from "@/assets/img/track-progress/track-3.png";
import AnimationDiv, { AnimationImg } from "@/components/animation/AnimationDiv";

const TrackProgressSection = () => {
  return (
    <section className="track-f-progress pt-125 pb-160">
      <div className="container">
        <div className="row gy-lg-0 gy-4 pb-10">
          <div className="col-md-6 mx-auto">
            <div className="img-content">
              <Image className="bg-img" src={trackBg} alt="shape image" />
              <AnimationDiv
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="wow fadeInUp"
              >
                <Image className="track-3" src={track1} alt="" />
              </AnimationDiv>

              <AnimationImg
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="track-img track-1"
                src={track2.src}
                alt=""
              />

              <AnimationImg
                variants={fadeInRight}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="track-img track-2"
                src={track3.src}
                alt=""
              />
            </div>
          </div>

          <div className="col-lg-6 col-xl-5 offset-xl-1 d-flex align-items-center">
            <div className="text-content">
              <h2>Track Your Financial Progress</h2>
              <p>
                Set challenges Set small challenges to motivate yourself
                to save. Setting smaller goals within your larger goals
                can be more engaging in tracking{" "}
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
        </div>
      </div>
    </section>
  );
};

export default TrackProgressSection;