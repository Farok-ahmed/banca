import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/img/logo/Logo.png";

const FooterFive = () => {
  return (
    <>
      <footer className="bank-footer-area">
        <div className="container">
          <div className="footer_top">
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                <div className="f-widget about-widget">
                  <Link href="/" className="p-0 m-0">
                    <Image src={Logo} alt="logo" />
                  </Link>
                  <p>
                    It is difficult to find examples of lorem ipsum in use
                    before Letrase.
                  </p>
                </div>
              </div>
              <div className="col-lg-2 col-sm-6">
                <div className="f-widget link-widget">
                  <h4 className="f-widget-title">Company</h4>
                  <ul className="footer-link">
                    <li>
                      <Link href="/about-us">About Us</Link>
                    </li>
                    <li>
                      <Link href="/loan">Loan</Link>
                    </li>
                    <li>
                      <Link href="/card">Cards</Link>
                    </li>
                    <li>
                      <Link href="/contact-us">Contact us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-sm-6">
                <div className="f-widget link-widget">
                  <h4 className="f-widget-title">Resources</h4>
                  <ul className="footer-link">
                    <li>
                      <Link href="/blog-listing">News</Link>
                    </li>
                    <li>
                      <Link href="/blog-listing">Blog</Link>
                    </li>
                    <li>
                      <Link href="/contact-us">Help Center</Link>
                    </li>
                    <li>
                      <Link href="/career">Career</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-sm-6">
                <div className="f-widget link-widget">
                  <h4 className="f-widget-title">Product</h4>
                  <ul className="footer-link">
                    <li>
                      <Link href="/jobs">Jobs</Link>
                    </li>
                    <li>
                      <Link href="/loan">Loan</Link>
                    </li>
                    <li>
                      <Link href="/job-application">Jobs Application</Link>
                    </li>
                    <li>
                      <Link href="/loan-details">Loan Application</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-sm-6">
                <div className="f-widget link-widget">
                  <h4 className="f-widget-title">Publications</h4>
                  <ul className="footer-link">
                    <li>
                      <Link href="/loan">Loan Agreements</Link>
                    </li>
                    <li>
                      <Link href="/card">Cards</Link>
                    </li>
                    <li>
                      <Link href="/contact-us">Contact Us</Link>
                    </li>
                    <li>
                      <Link href="/loan-details">Loan Application</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-6">
              <div className="d-flex">
                <p className="copyright-text">
                  <Link href="/terms-services">Terms of Service</Link>
                  <Link href="/privacy">Privacy Policy</Link>
                  <Link href="#">Cookies Policy</Link>
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 text-end">
              <div className="f-social">
                <Link href="#">
                  <i className="social_facebook"></i>
                </Link>
                <Link href="#">
                  <i className="social_youtube"></i>
                </Link>
                <Link href="#">
                  <i className="social_instagram"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterFive;
