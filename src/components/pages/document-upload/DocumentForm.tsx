"use client"
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import UploadLoan from "@/assets/img/apply-loan/upload.png";

const DocumentForm = () => {
  return (
    <><form onSubmit={(e) => e.preventDefault()}>
                      <div className="row gy-4">
                        <div className="col-12">
                          <div className="doc-info">
                            <span>1.</span>
                            <p>
                              Selfie Photo. Your Personal Photo. The photo must
                              be done by yourself. The photo must show your face
                              and your both shoulders. (Please attach file )
                            </p>
                          </div>
                          <div className="doc-info mt-3">
                            <span>2.</span>
                            <p>
                              ID Card. Valid Government ID Card. Front and Back
                              side. Original ID Card. Full photo. All parts of
                              the ID card must be shown. The four corners of the
                              ID card must show on the photo. ID must be
                              original and valid. ID card must be very clear.
                              (Please attach file) *
                            </p>
                          </div>
                        </div>
                        <div className="col-12">
                          <div id="dropzone" className="dropzone">
                            <Image src={UploadLoan} alt="" />
                            <h4 className="dz-button">
                              Drag and drop an image
                            </h4>
                            <p className="dz-custom-upload-text">
                              or to{" "}
                              <span
                                style={{
                                  color: "#0050b2",
                                  fontWeight: "semi-bold",
                                  textDecoration: "underline",
                                }}
                              >
                                Browse
                              </span>{" "}
                              choose a file <br /> PNG,JPG,PDF
                            </p>
                          </div>
                        </div>
                        <div className="col-12 mt-4">
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="agreeBox"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="agreeBox"
                            >
                              I hereby agree that the information given is true,
                              accurate and complete as of the date of this
                              application submission. **
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-5">
                        <div className="col-md-12">
                          <div className="nav-btn d-flex flex-wrap justify-content-between">
                            <Link
                              href="/personal-details"
                              className="prev-btn theme-btn-primary_alt theme-btn"
                            >
                              <i className="arrow_left"></i>previous
                            </Link>
                            <button
                              type="submit"
                              className="theme-btn-primary_alt theme-btn"
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </form></>
  )
}

export default DocumentForm