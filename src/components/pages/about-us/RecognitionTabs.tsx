"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { fadeInUp } from "@/components/animation";
import Image from "next/image";
import recognitionIcon from "@/assets/img/recognition/icon.svg";
import AnimationDiv from "@/components/animation/AnimationDiv";
const tabData = [
  {
    year: "2020",
    content: [
      "The First Mauritian Bank to join the GRI Community",
      "Instant account opening with a Customer On-boarding App",
    ],
  },
  {
    year: "2019",
    content: [
      "The First Mauritian Bank to join the GRI Community",
      "Instant account opening with a Customer On-boarding App",
    ],
  },
  {
    year: "2018",
    content: [
      "The First Mauritian Bank to join the GRI Community",
      "Instant account opening with a Customer On-boarding App",
    ],
  },
  {
    year: "2017",
    content: [
      "The First Mauritian Bank to join the GRI Community",
      "Instant account opening with a Customer On-boarding App",
    ],
  },
  {
    year: "2016",
    content: [
      "The First Mauritian Bank to join the GRI Community",
      "Instant account opening with a Customer On-boarding App",
    ],
  },
  {
    year: "2015",
    content: [
      "The First Mauritian Bank to join the GRI Community",
      "Instant account opening with a Customer On-boarding App",
    ],
  },
  {
    year: "2014 and before",
    content: [
      "The First Mauritian Bank to join the GRI Community",
      "Instant account opening with a Customer On-boarding App",
      "Another achievement text here",
    ],
  },
];
const contentVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
    },
  },
};

export default function RecognitionTabs() {
  const [activeTab, setActiveTab] = useState(tabData[0].year);

  return (
    <div className="recognition-widget pt-70">
      <div className="row gy-4 gy-lg-0">
        {/* Left Side Tabs */}
        <div className="col-lg-3 col-5">
          <div className="widget-navigation wow fadeInUp pe-lg-4">
            <ul className="nav nav-tabs">
              {tabData.map((tab) => (
                <li key={tab.year} className="nav-item">
                  <Link
                    href="#"
                    className={`nav-link ${
                      activeTab === tab.year ? "active" : ""
                    }`}
                    onClick={(e)=>{
                        e.preventDefault();
                        setActiveTab(tab.year);
                    }}
                  >
                    {tab.year}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Middle Content */}
        <div className="col-lg-4 col-7">
          <AnimatePresence mode="wait">
            {tabData.map(
              (tab) =>
                activeTab === tab.year && (
                  <AnimationDiv 
                    key={tab.year} 
                    className="tab-content"
                    variants={contentVariants}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                  >
                    <h3>{tab.year}</h3>
                    {tab.content.map((item, i) => (
                      <p key={i}>{item}</p>
                    ))}
                  </AnimationDiv>
                )
            )}
          </AnimatePresence>
        </div>

        {/* Right Side Awards Example */}
        <div className="col-xl-4 col-lg-5 offset-xl-1 pr-lg-35 pl-lg-35">
          <AnimationDiv
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="accolades-widget wow fadeInUp"
            data-wow-delay="0.5s"
          >
            <div className="accolades-header d-flex justify-content-between align-items-end">
              <h2>Awards</h2>
              <Image src={recognitionIcon} alt="Awards icon" />
            </div>
            <div className="accolades-content">
              <ul>
                <li className="">
                  <p className="subtitle">CITI BANK</p>
                  <p className="text">
                    Straight-Through processing (STP) Excellence Award
                  </p>
                </li>
                <li className="mt-3">
                  <p className="subtitle">MARCOM AWARDS</p>
                  <p className="text">
                    Platinum Winner for ‘The Believers’ Campaign
                  </p>
                </li>
                <li className="mt-3">
                  <p className="subtitle">BURJ CEO AWARDS</p>
                  <p className="text">Most Innovative Bank in Mauritius</p>
                </li>
                <li className="mt-3">
                  <p className="subtitle">GLOBAL BRANDS MAGAZINE</p>
                  <p className="text">Most Innovative Treasury Services</p>
                  <p className="text">Best Banking Brand in Mauritius</p>
                  <p className="text">Best Credit Card Rewards Program</p>
                </li>
              </ul>
            </div>
          </AnimationDiv>
        </div>
      </div>
    </div>
  );
}
