"use client"
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp } from "@/components/animation";
import Image from "next/image";
import fCard1 from "@/assets/img/bank/f-card1.png";
import fCard2 from "@/assets/img/bank/f-card2.png";
import fCard3 from "@/assets/img/bank/f_card3.png";
import fCard4 from "@/assets/img/bank/f_card4.png";
import fCard5 from "@/assets/img/bank/f_card5.png";
import fCard6 from "@/assets/img/bank/f_card6.png";
import AnimationDiv, { AnimationH1, AnimationSpan } from "@/components/animation/AnimationDiv";

interface TabData {
  id: string;
  title: string;
  description: string;
  cardImages: {
    cardOne: typeof fCard1;
    cardTwo: typeof fCard2;
  };
  delay: string;
}

const tabsData: TabData[] = [
  {
    id: "freelancer",
    title: "Standard Card",
    description:
      "Choose your training and register for free. If you are a freelancer, the courses are entirely taken care you.",
    cardImages: {
      cardOne: fCard1,
      cardTwo: fCard2,
    },
    delay: "0s",
  },
  {
    id: "startup",
    title: "Premium Card",
    description:
      "Choose your training and register for free. If you are a freelancer, the courses are entirely taken care you.",
    cardImages: {
      cardOne: fCard3,
      cardTwo: fCard4,
    },
    delay: "0.2s",
  },
  {
    id: "business",
    title: "Business Card",
    description:
      "Choose your training and register for free. If you are a freelancer, the courses are entirely taken care you.",
    cardImages: {
      cardOne: fCard5,
      cardTwo: fCard6,
    },
    delay: "0.3s",
  },
];
const CardArea = () => {
  const [activeTab, setActiveTab] = useState("freelancer");

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  const activeTabData = tabsData.find((tab) => tab.id === activeTab);

  return (
    <>
      <section className="bank-card-area">
        <div className="container">
          <div className="section-title bank-section-title mb-80">
            <AnimationSpan
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="short-title-2 wow fadeInUp"
            >
              Cards
            </AnimationSpan>
            <AnimationH1
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="wow fadeInUp text-white"
            >
              We offer variety of <br />
              <span className="underline-shape">cards</span> with features
            </AnimationH1>
          </div>
          <div className="row">
            <div className="col-lg-5">
              <ul
                className="nav nav-tabs bank-card-tab"
                id="myTab"
                role="tablist"
              >
                {tabsData.map((tab, index) => (
                  <motion.li
                    key={tab.id}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.1 }}
                    className="nav-item wow fadeInUp"
                    role="presentation"
                  >
                    <button
                      className={`nav-link bank-card-item ${
                        activeTab === tab.id ? "active" : ""
                      }`}
                      id={`${tab.id}-tab`}
                      type="button"
                      role="tab"
                      onClick={() => handleTabClick(tab.id)}
                    >
                      <h5>{tab.title}</h5>
                      <p>{tab.description}</p>
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <AnimationDiv
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="tab-content bank-card-content wow fadeInUp"
                id="myTabContent"
              >
                <AnimatePresence mode="wait">
                  {activeTabData && (
                    <AnimationDiv
                      key={activeTab}
                      className="tab-pane fade show active"
                      id={activeTab}
                      role="tabpanel"
                      aria-labelledby={`${activeTab}-tab`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <AnimationDiv
                        className="card-img"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                      >
                        <AnimationDiv
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        >
                          <Image
                            className="card_one"
                            src={activeTabData.cardImages.cardOne}
                            alt={`${activeTabData.title} - Card 1`}
                          />
                        </AnimationDiv>
                        <AnimationDiv
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                          <Image
                            className="card_two"
                            src={activeTabData.cardImages.cardTwo}
                            alt={`${activeTabData.title} - Card 2`}
                          />
                        </AnimationDiv>
                      </AnimationDiv>
                    </AnimationDiv>
                  )}
                </AnimatePresence>
              </AnimationDiv>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CardArea;
