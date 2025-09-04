"use client";
import Image from "next/image";
import Link from "next/link";

import Logo from "@/assets/img/logo/Logo.png";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { fadeInLeft, fadeInUp } from "../animation";
import Counter from "./Counter";
import { formatedDate } from "@/utils/dateFormat";
const Footer = () => {
  const pathName = usePathname();
  const error = pathName === "/error";
  const home = pathName === "/";
  const loanSteps = pathName ==="/loan-steps";
  const typography = pathName ==="/typography";
  const contactUs = pathName ==="/contact-us";
  const isTopPadding = home || loanSteps || typography || contactUs;
  if (error) return null;
  return (
    <>
      <footer className="footer footer-3">
        {/* Footer Top */}
        <div className={`footer-top ${isTopPadding ? "pt-200":"pt-105"} pb-lg-115 pb-120`}>
          <div className="container">
            <div className="row gx-0 pt-60">
              {/* About */}
              <div className="col-lg-4 col-sm-6 text-center text-sm-start">
                <motion.div
                  variants={fadeInLeft}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="footer-widget wow fadeInLeft mb-30"
                >
                  <div className="footer-text mb-20">
                    <p>
                      Banca is a leading bank in the worldzone and a prominent
                      international banking institution
                    </p>
                  </div>

                  <span className="overline">COTATION</span>

                  <div className="footer-bold">
                    <span className="counter">
                      $
                      <span>
                        <Counter count={35.105} decimals={3} />
                      </span>
                    </span>
                    <span className="counter">
                      -
                      <span>
                        <Counter count={0.46} decimals={2} />
                      </span>
                      %
                    </span>
                  </div>
                  <p className="time"> {formatedDate} (INTERNATIONAL TIME)</p>
                </motion.div>
              </div>

              {/* Link Columns */}
              {[
                {
                  title: "Banca at a Glance",
                  links: [
                    {
                      href: "/about-us",
                      title: "Our core Businesses",
                    },
                    {
                      href: "/about-us",
                      title: "Our 'company Purpose",
                    },
                    {
                      href: "/jobs",
                      title: "Jobs & Careers",
                    },
                    {
                      href: "/about-us",
                      title: "Our Responsibility",
                    },
                  ],
                },
                {
                  title: "Publications",
                  links: [
                    {
                      href: "/loan",
                      title: "Loan Agreements",
                    },
                    {
                      href: "/card",
                      title: "Cards",
                    },
                    {
                      href: "/contact-us",
                      title: "Contact Us",
                    },
                    {
                      href: "/loan-details",
                      title: "Loan Application",
                    },
                  ],
                },
                {
                  title: "Direct Access",
                  links: [
                    {
                      href: "/blog-listing",
                      title: "Our news",
                    },
                    {
                      href: "/blog-listing",
                      title: "Our press releases",
                    },
                    {
                      href: "/jobs",
                      title: "Our job offers",
                    },
                    {
                      href: "/",
                      title: "Our websites",
                    },
                  ],
                },
              ].map((section, index) => (
                <div
                  key={index}
                  className={`col-lg-2 col-sm-6 text-center text-sm-start ${
                    index === 0 ? "ms-lg-5" : ""
                  }`}
                >
                  <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="footer-widget mb-30 wow fadeInUp"
                    data-wow-delay={`${0.1 + index * 0.2}s`}
                  >
                    <div className="f-widget-title">
                      <h5>{section.title}</h5>
                    </div>
                    <div className="footer-link">
                      <ul>
                        {section.links.map((link, i) => (
                          <li key={i}>
                            <Link href={link.href}>{link.title}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Area */}
        <div className="copyright pt-25 pb-25">
          <div className="container">
            <div className="row align-items-center">
              {/* Logo */}
              <div className="col-lg-3 text-center text-lg-start">
                <Link href="/" className="p-0 m-0">
                  <Image src={Logo} alt="logo" />
                </Link>
              </div>

              {/* Text */}
              <div className="col-lg-5 text-center my-3 my-sm-0">
                <div className="copyright-text">
                  <p>
                    Copyright &copy; Banca {new Date().getFullYear()}.{" "}
                    <br className="d-sm-none" />
                    <Link className="ms-2" href="/privacy">
                      Privacy
                    </Link>{" "}
                    |{" "}
                    <Link className="ms-0" href="/terms-services">
                      Term of Use
                    </Link>
                  </p>
                </div>
              </div>

              {/* Social */}
              <div className="col-lg-4 text-center text-lg-end">
                <div className="social-button">
                  <Link href="#">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                  <Link href="#">
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link href="#">
                    <i className="fab fa-pinterest-p"></i>
                  </Link>
                  <Link href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
