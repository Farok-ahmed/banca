import Image from "next/image";
import Link from "next/link";
import DefaultLayout from "@/components/Layout";
// Assets
import errorBg from "@/assets/img/error/404_bg.png";
import errorTwo from "@/assets/img/error/404_two.png";
import errorThree from "@/assets/img/error/404_three.png";
import errorOne from "@/assets/img/error/404_one.png";

const ErrorPage = () => {
  return (
    <>
      <DefaultLayout>
        <main>
          <section className="error_area bg_color pb-50 overflow-hidden">
            <div className="error_dot one"></div>
            <div className="error_dot two"></div>
            <div className="error_dot three"></div>
            <div className="error_dot four"></div>
            <div className="container">
              <div className="error_content_two text-center">
                <div className="error_img">
                  <Image
                    className="position-absolute error_shap"
                    src={errorBg}
                    alt=""
                  />
                  <div className="one wow clipInDown" data-wow-delay="1s">
                    <Image
                      className="img_one"
                      src={errorTwo}
                      alt=""
                    />
                  </div>
                  <div className="two wow clipInDown" data-wow-delay="1.5s">
                    <Image
                      className="img_two"
                      src={errorThree}
                      alt=""
                    />
                  </div>
                  <div className="three wow clipInDown" data-wow-delay="1.8s">
                    <Image
                      className="img_three"
                      src={errorOne}
                      alt=""
                    />
                  </div>
                </div>
                <h2 className="wow fadeIn">
                  Error. We can’t find the page you’re looking for.
                </h2>
                <p>
                  Sorry for the inconvenience. Go to our homepage or check out
                  our latest collections for Fashion, Chair, Decoration...
                </p>
                <form action="#" className="error_search">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                  />
                </form>
                <Link href="/" className="action_btn theme-btn">
                  <i className="arrow_left"></i>Back to Home Page
                </Link>
              </div>
            </div>
          </section>
        </main>
      </DefaultLayout>
    </>
  );
};

export default ErrorPage;
