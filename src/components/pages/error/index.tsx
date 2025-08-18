import Image from "next/image";
import Link from "next/link";
import "@/styles/css/elegant-icons.min.css";
import "@/styles/css/all.min.css";
import "@/styles/css/animate.css";
import "@/styles/css/default.css";
import "@/styles/css/responsive.css";
import DefaultLayout from "@/components/Layout";

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
                    width={700}
                    height={420}
                    className="position-absolute error_shap"
                    src="/img/error/404_bg.png"
                    alt=""
                  />
                  <div className="one wow clipInDown" data-wow-delay="1s">
                    <Image
                      width={140}
                      height={380}
                      className="img_one"
                      src="/img/error/404_two.png"
                      alt=""
                    />
                  </div>
                  <div className="two wow clipInDown" data-wow-delay="1.5s">
                    <Image
                      width={160}
                      height={380}
                      className="img_two"
                      src="/img/error/404_three.png"
                      alt=""
                    />
                  </div>
                  <div className="three wow clipInDown" data-wow-delay="1.8s">
                    <Image
                      width={160}
                      height={380}
                      className="img_three"
                      src="/img/error/404_one.png"
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
