"use client"
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "@/assets/img/logo/Logo.png";
const FooterFive = () => {
  const patheName = usePathname();
  const smallBank = patheName === "/small-bank";
  if (!smallBank) return null;
  return (
    <>
      <footer className="bank-footer-area">
        <div className="container">
          <div className="footer_top">
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                <div className="f-widget about-widget">
                  <Link href="/" className="p-0 m-0">
                    <Image
                      src={Logo}
                      alt="logo"
                    />
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
                      <Link href="#">Pricing</Link>
                    </li>
                    <li>
                      <Link href="#">Account Information</Link>
                    </li>
                    <li>
                      <Link href="#">About</Link>
                    </li>
                    <li>
                      <Link href="#">Contact us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-sm-6">
                <div className="f-widget link-widget">
                  <h4 className="f-widget-title">Resources</h4>
                  <ul className="footer-link">
                    <li>
                      <Link href="#">News</Link>
                    </li>
                    <li>
                      <Link href="#">Blog</Link>
                    </li>
                    <li>
                      <Link href="#">Help Center</Link>
                    </li>
                    <li>
                      <Link href="#">Tutorials</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-sm-6">
                <div className="f-widget link-widget">
                  <h4 className="f-widget-title">Design Online</h4>
                  <ul className="footer-link">
                    <li>
                      <Link href="#">Logo Maker</Link>
                    </li>
                    <li>
                      <Link href="#">Cover Photo Maker</Link>
                    </li>
                    <li>
                      <Link href="#">Banner Maker</Link>
                    </li>
                    <li>
                      <Link href="#">Branded Templates</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-sm-6">
                <div className="f-widget link-widget">
                  <h4 className="f-widget-title">Tools</h4>
                  <ul className="footer-link">
                    <li>
                      <Link href="#">Templates</Link>
                    </li>
                    <li>
                      <Link href="#">PDF Editor</Link>
                    </li>
                    <li>
                      <Link href="#">Animator</Link>
                    </li>
                    <li>
                      <Link href="#">Image Resizer</Link>
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
                  <Link href="#">Terms of Service</Link>
                  <Link href="#">Privacy Policy</Link>
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
