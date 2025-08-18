import Image from "next/image";
import React from "react";

const TopHeader = () => {
  return (
    <>
      <div className="header-top py-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="header-info-left d-flex align-items-center">
                {/* Language Dropdown */}
                <div className="language-list position-relative w-auto">
                  <select
                    id="select-lang"
                    className="form-select border-0 shadow-none text-white pe-5 ps-2"
                    style={{
                      appearance: "none",
                      backgroundColor: "#171d24",
                      color: "#ffffff",
                      paddingRight: "2.5rem",
                      paddingLeft: "0.75rem",
                      border: "1px solid #ffffff22",
                      borderRadius: "6px",
                      height: "38px",
                      cursor: "pointer",
                    }}
                  >
                    <option value="English">English</option>
                    <option value="Bangla">Bangla</option>
                    <option value="French">French</option>
                    <option value="Hindi">Hindi</option>
                  </select>

                  {/* Dropdown Arrow */}
                  <span
                    className="position-absolute top-50 end-0 translate-middle-y me-2 text-white pointer-events-none"
                    style={{ pointerEvents: "none" }}
                  >
                    <i className="bi bi-chevron-down ms-2"></i>
                  </span>
                </div>

                {/* Timestamp */}
                <div className="timestamp ms-4 text-white d-flex align-items-center gap-2">
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
                    <a href="tel:01234567890">+01234-567890</a>
                  </li>

                  <li>
                    <i className="icon_mail_alt"></i>
                    <a href="mailto:bancainfo@email.com">bancainfo@email.com</a>
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
