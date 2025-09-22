import Image from "next/image";
import Counter from "@/components/common-section/Counter";
// Assets
import bannerIcon1 from "@/assets/img/banner/icon-1.svg";
import bannerIcon2 from "@/assets/img/banner/icon-2.svg";
import bannerIcon3 from "@/assets/img/banner/icon-3.svg";
import bannerIcon4 from "@/assets/img/banner/icon-4.svg";

const FloatedWidget = () => {
  return (
    <div className="row position-relative">
      <div className="col-12">
        <div className="floated-widget">
          <div className="row text-center gy-2 gy-lg-0">
            <div className="col-lg-3 col-6">
              <div className="statistics-widget-1 text-start pt-10">
                <Image src={bannerIcon1} alt="icon" />
                <p>Active user</p>
                <h2 className="counter">
                  <span>
                    <Counter count={15000} decimals={0} />
                  </span>
                </h2>
              </div>
            </div>

            <div className="col-lg-3 col-6">
              <div className="statistics-widget-1 text-start pt-10">
                <Image src={bannerIcon2} alt="icon" />
                <p>download</p>
                <h2 className="counter">
                  <span>
                    <Counter count={49.9} decimals={1} />
                  </span>
                  k
                </h2>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="statistics-widget-1 text-start pt-10">
                <Image src={bannerIcon3} alt="icon" />
                <p>reviews</p>
                <h2 className="counter">
                  <span>
                    <Counter count={35.7} decimals={1} />
                  </span>
                  k
                </h2>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="statistics-widget-1 text-start pt-10">
                <Image src={bannerIcon4} alt="icon" />
                <p>partners</p>
                <h2 className="counter">
                  <span>
                    <Counter count={199} decimals={0} />
                  </span>
                  +
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatedWidget;