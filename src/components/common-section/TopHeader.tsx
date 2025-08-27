"use client"
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import LanguageSelect from "./LanguageSelect";
import Link from "next/link";
import FormSelect from "./FormSelect";
import { OptionType } from "./type";

const TopHeader = () => {
  const pathname = usePathname();
  const loanSteps = pathname === "/loan-steps";
  const loan = pathname === "/loan";
  const loanDetails = pathname === "/loan-details";
  const personalDetails = pathname === "/personal-details";
  const documentUpload = pathname === "/document-upload";
  const career = pathname === "/career";
  const jobs = pathname === "/jobs";
  const jobApplication = pathname === "/job-application";
  const card = pathname === "/card";
  const aboutUs = pathname === "/about-us";
  const contactUs = pathname === "/contact-us";
  const blogListing = pathname === "/blog-listing";
  const blogDetails = pathname === "/blog-details";

  if (
    !loanSteps &&
    !loan &&
    !loanDetails &&
    !personalDetails &&
    !documentUpload &&
    !career &&
    !jobs &&
    !jobApplication &&
    !card &&
    !aboutUs &&
    !contactUs &&
    !blogListing &&
    !blogDetails
  )
    return null;

    const options: OptionType[] = [
  { value: "english", label: "English" },
  { value: "bangla", label: "Bangla" },
  { value: "french", label: "French" },
  { value: "hindi", label: "Hindi" },
];
  return (
    <>
      <div className="header-top py-2 bg_white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="header-info-left d-flex align-items-center">
                {/* Language Dropdown */}
                <div className="language-list position-relative w-auto">
                  <LanguageSelect/>
                    {/* <FormSelect options={options} name="bangla" /> */}
                  {/* Dropdown Arrow */}
                  <span
                    className="position-absolute top-50 end-0 translate-middle-y me-2 text-white pointer-events-none"
                    style={{ pointerEvents: "none" }}
                  >
                    <i className="bi bi-chevron-down ms-2"></i>
                  </span>
                </div>

                {/* Timestamp */}
                <div className="timestamp ms-4">
                  <i className="icon_clock_alt"></i> Mon - Fri 10:00-18:00
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="header-info-right">
                <ul>
                  <li>
                    <Image
                      width={15}
                      height={15}
                      className="img-fluid"
                      src="/img/phone-outline-white.png"
                      alt="phone"
                    />
                    <Link href="tel:01234567890">+01234-567890</Link>
                  </li>

                  <li>
                    <i className="icon_mail_alt"></i>
                    <Link href="mailto:bancainfo@email.com">bancainfo@email.com</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
