"use client"
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import VisaImg from "@/assets/img/saas-app/visa.png";
import AmazonImg from "@/assets/img/saas-app/amazon.png";
import StripeImg from "@/assets/img/saas-app/stripe.png";
import PaypalImg from "@/assets/img/saas-app/paypal.png";
import AmexImg from "@/assets/img/saas-app/amex.png";
import DiscoverImg from "@/assets/img/saas-app/discover.png";
const FooterFour = () => {
  const patheName = usePathname();
  const financeSass = patheName === "/finance-sass-app";
  if (!financeSass) return null;
  return (
    <>
      <footer className="saas-footer-area bg-white">
        <div className="saas-footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                <div className="f-widget about-widget">
                  <h4 className="f-widget-title">Contact us</h4>
                  <ul className="list-unstyled">
                    <li>
                      214 Cleo Street Suite 832 <br />
                      Botswana
                    </li>
                    <li>
                      <Link href="tel:235684154">+23 572-904-6013</Link>
                    </li>
                    <li>
                      <Link href="mailto:banca.support@webmail.com">
                        banca.support@webmail.com
                      </Link>
                    </li>
                    <li>
                      <Link href="mailto:banca.support@webmail.com">
                        Contact us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="f-widget link-widget">
                  <h4 className="f-widget-title">Support</h4>
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
              <div className="col-lg-3 col-sm-6">
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
        </div>
        <div className="saas-footer-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-6">
                <div className="d-flex">
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
                  <p>
                    2025 <Link href="#">Banca</Link>. All rights reserved
                  </p>
                </div>
              </div>

              <div className="col-lg-5 col-md-6 ">
                <ul className="list-unstyled payment-list d-flex flex-wrap gap-1 align-items-center">
                  <li>
                    <Link href="#">
                      <Image
                        src={VisaImg}
                        alt="Visa"
                        className="payment-icon"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <Image
                        src={AmazonImg}
                        alt="Amazon"
                        className="payment-icon"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <Image
                        src={StripeImg}
                        alt="Stripe"
                        className="payment-icon"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <Image
                        src={PaypalImg}
                        alt="Paypal"
                        className="payment-icon"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <Image
                        src={AmexImg}
                        alt="Amex"
                        className="payment-icon"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <Image
                        width={40}
                        height={33}
                        src={DiscoverImg}
                        alt="Discover"
                        className="payment-icon"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterFour;
