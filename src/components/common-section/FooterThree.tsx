"use client";
import "./custom.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Logo from "@/assets/img/logo/Logo.png";
import LanguageSelect from "./LanguageSelect";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInUp } from "../animation";
const FooterThree = () => {
  const patheName = usePathname();
  const mobile = patheName === "/mobile-app";
  if (!mobile) return null;
  return (
    <>
      <footer className="footer footer-1">
        <div className="footer-top  pt-115 pb-90">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-3 col-6 pr-lg-90">
                <motion.div
                  variants={fadeInLeft}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="footer-widget mb-30 wow fadeInLeft"
                >
                  <div className="flog mb-35">
                    <Link href="/">
                      <Image src={Logo} alt="logo" />
                    </Link>
                  </div>
                  <div className="footer-text mb-20">
                    <p>
                      Follow us on social media to find out the latest updates
                      on our progress.
                    </p>
                  </div>
                  <div className="social-icon mt-5">
                    <Link href="#">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link href="#">
                      <i className="fab fa-twitter"></i>
                    </Link>
                    <Link href="#">
                      <i className="fab fa-google"></i>
                    </Link>
                  </div>
                </motion.div>
              </div>

              <div className="col-xl-3 col-lg-2 col-6">
                <div
                  className="footer-widget mb-30 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="f-widget-title">
                    <h5>product</h5>
                  </div>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <Link href="#"> Download</Link>
                      </li>
                      <li>
                        <Link href="#"> Payments</Link>
                      </li>
                      <li>
                        <Link href="#"> Online Banking</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-2 col-6">
                <motion.div
                variants={fadeInUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="footer-widget mb-30 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="f-widget-title">
                    <h5>Company</h5>
                  </div>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <Link href="#"> About Us</Link>
                      </li>
                      <li>
                        <Link href="#"> Contact us</Link>
                      </li>
                      <li>
                        <Link href="#"> Roadmap</Link>
                      </li>
                      <li>
                        <Link href="#"> Blog</Link>
                      </li>
                      <li>
                        <Link href="#"> Careers</Link>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>
              <div className="col-xl-2 col-lg-2 col-6">
                <motion.div
                variants={fadeInUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="footer-widget mb-30 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="f-widget-title">
                    <h5>Services</h5>
                  </div>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <Link href="#">Borrow money</Link>
                      </li>
                      <li>
                        <Link href="#">Collective loans</Link>
                      </li>
                      <li>
                        <Link href="#">Budget schedule</Link>
                      </li>
                      <li>
                        <Link href="#">Debt calculator</Link>
                      </li>
                      <li>
                        <Link href="#">Student scholarship</Link>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright py-4">
          <div className="container-lg container-fluid">
            <div className="row align-items-center ">
              <div className="col-lg-3 select-language">
                <div
                  className="d-flex justify-content-center d-lg-block"
                  style={{ width: "130px" }}
                >
                  <LanguageSelect />

                  <span className="position-absolute top-50 end-0 translate-middle-y me-2">
                    <i className="bi bi-chevron-down text-white"></i>
                  </span>
                </div>
              </div>
              <div className="col-lg-5  text-center short-text">
                <Link href="#">Terms & Conditions </Link>
                <Link href="#">Privacy Policy</Link>
                <Link href="#">Legal Notice</Link>
              </div>
              <div className="col-lg-4 text-center text-lg-end ">
                <div className="copyright-text short-text">
                  <p>Copyright&copy; 2021, All Rights Reserved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterThree;
