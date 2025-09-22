import Image from "next/image";
import FloatedWidget from "./FloatedWidget";
// Assets
import logo1 from "@/assets/img/banner/Logo-1.png";
import logo2 from "@/assets/img/banner/Logo-2.png";
import logo3 from "@/assets/img/banner/Logo-3.png";
import logo4 from "@/assets/img/banner/Logo-4.png";
import logo5 from "@/assets/img/banner/Logo-5.png";
import logo6 from "@/assets/img/banner/Logo-6.png";
import bannerPerson from "@/assets/img/banner/person.png";

const MobileBanner = () => {
  return (
    <section className="banner-area" id="banner_animation">
      <div className="bubbles">
        <div data-parallax='{"x": 0, "y": -250, "rotateZ":0}'>
          <div className=" bubble"></div>
        </div>
        <div data-parallax='{"x": 0, "y": -250, "rotateZ":0}'>
          <div className=" bubble"></div>
        </div>
        <div data-parallax='{"x": 50, "y": -250, "rotateZ":0}'>
          <div className=" bubble"></div>
        </div>
        <div data-parallax='{"x": 60, "y": -200, "rotateZ":0}'>
          <div className=" bubble"></div>
        </div>
        <div data-parallax='{"x": 50, "y": -130, "rotateZ":0}'>
          <div className=" bubble"></div>
        </div>
        <div data-parallax='{"x": 130, "y": 250, "rotateZ":0}'>
          <div className=" bubble"></div>
        </div>
        <div data-parallax='{"x": 0, "y": -250, "rotateZ":0}'>
          <div className=" bubble"></div>
        </div>
        <div data-parallax='{"x": 100, "y": -250, "rotateZ":0}'>
          <div className=" bubble"></div>
        </div>
      </div>
      <div className="logos">
        <Image src={logo1} alt="social" />
        <Image src={logo2} alt="social" />
        <Image src={logo3} alt="social" />
        <Image src={logo4} alt="social" />
        <Image src={logo5} alt="social" />
        <Image src={logo6} alt="social" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="banner-content text-center pt-200">
              <h1>
                Simple and Safe Digital <br /> Banking Mobile App
              </h1>
              <div className="img-area mt-35">
                <Image
                  className="img-fluid"
                  data-depth="0.6"
                  src={bannerPerson}
                  alt="person"
                />
              </div>

              <div className="symbol-pulse">
                <div className="pulse-1"></div>
                <div className="pulse-2"></div>
                <div className="pulse-x"></div>
              </div>
            </div>
          </div>
        </div>

        <FloatedWidget />
      </div>
    </section>
  );
};

export default MobileBanner;