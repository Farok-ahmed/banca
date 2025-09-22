"use client"
import React, { useState } from 'react'
import { FaqItem } from "@/types/Faqitem";
import { TabData } from "@/types/Tabdata";
import Image from 'next/image';
import freelanceTab from '@/assets/img/home-4/freelance-tab.png';
import freelanceTab2 from '@/assets/img/home-4/freelance-tab-2.png';
import faqImg from '@/assets/img/home-4/faq-Img.png';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import AnimationDiv, { AnimationH5 } from '@/components/animation/AnimationDiv';
const tabContent: TabData[] = [
  {
    id: "freelancer",
    label: "Freelancers",
    title: "Access to secure banking",
    description:
      "Lorem Ipsum is simply dummy text of the printing and the typesetting industry. Lorem Ipsum has been industry's",
  imgSrc: freelanceTab,
  },
  {
    id: "startup",
    label: "SMBs & Startups",
    title: "Manage your cash easily",
    description:
      "Lorem Ipsum is simply dummy text of the printing and the typesetting industry. Lorem Ipsum has been industry's",
  imgSrc: freelanceTab2,
  },
  {
    id: "business",
    label: "Business Founders",
    title: "Access to secure banking",
    description:
      "Lorem Ipsum is simply dummy text of the printing and the typesetting industry. Lorem Ipsum has been industry's",
  imgSrc: freelanceTab,
  },
  {
    id: "micro_business",
    label: "Micro businesses",
    title: "Manage your cash easily",
    description:
      "Lorem Ipsum is simply dummy text of the printing and the typesetting industry. Lorem Ipsum has been industry's",
  imgSrc: freelanceTab2,
  },
];

const faqItems: FaqItem[] = [
  {
    id: "one",
    question: "Can I pay off my loan early?",
    answer:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid...",
  },
  {
    id: "two",
    question: "How much can I Banca?",
    answer:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid...",
  },
  {
    id: "three",
    question: "Do you offering refinancing ?",
    answer:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid...",
  },
  {
    id: "four",
    question: "Can I do all of my banking with you?",
    answer:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid...",
  },
];

// Animation variants for tab content
const tabContentVariants = {
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

const FaqTabs = () => {
    const [activeTab, setActiveTab] = useState("freelancer");

  const [active, setActive] = useState<string>("one");

  const toggleAccordion = (id: string) => {
    setActive((prev) => (prev === id ? "" : id));
  };
  return (
    <>
     <section className="about-tab-area bg-white">
                <div className="container">
                  {/* Nav Buttons */}
                  <ul className="nav nav-tabs" role="tablist">
                    {tabContent.map((tab) => (
                      <li className="nav-item" role="presentation" key={tab.id}>
                        <motion.button
                          className={`nav-link ${
                            activeTab === tab.id ? "active" : ""
                          }`}
                          onClick={() => setActiveTab(tab.id)}
                          type="button"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                        >
                          {tab.label}
                        </motion.button>
                      </li>
                    ))}
                  </ul>
    
                  {/* Tab Panels */}
                  <div className="tab-content pt-4">
                    <AnimatePresence mode="wait">
                      {tabContent.map((tab) => 
                        activeTab === tab.id && (
                          <AnimationDiv
                            key={tab.id}
                            className="tab-pane fade show active"
                            variants={tabContentVariants}
                            initial="hidden"
                            animate="show"
                            exit="exit"
                          >
                            <div className="row align-items-center">
                              <div className="col-lg-5">
                                <div className="section-title text-start">
                                  <h1>
                                    {tab.title.split(" ")[0]}{" "}
                                    <span className="underline-shape">
                                      {tab.title.split(" ").slice(1).join(" ")}
                                    </span>
                                  </h1>
                                  <p>{tab.description}</p>
                                  <Link className="read-more" href="/contact-us">
                                    Get started now <i className="arrow_right" />
                                  </Link>
                                </div>
                              </div>
                              <div className="col-lg-7">
                                <Image className="img-fluid" src={tab.imgSrc} alt={tab.label} />
                              </div>
                            </div>
                          </AnimationDiv>
                        )
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </section>
    
              <section className="faq-area-3 py-16">
                <div className="container">
                  <div className="row gy-lg-0 gy-4">
                    <div className="col-lg-6">
                      <Image src={faqImg} alt="FAQ" className="faq-img img-fluid" />
                    </div>
                    <div className="col-lg-6 pl-lg-50">
                      <span className="subtitle">_FAQ</span>
                      <h1>
                        Frequently asked general{" "}
                        <span className="underline-shape">questions</span>
                      </h1>
    
                      <div className="faq-widget">
                        <div className="accordion" id="accordionExample">
                          {faqItems.map((item, index) => (
                            <AnimationDiv
                              className="single-faq wow fadeInUp"
                              data-wow-delay={`0.${index + 1}s`}
                              key={item.id}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ 
                                duration: 0.5, 
                                delay: index * 0.1,
                                ease: "easeOut"
                              }}
                            >
                              <div className="w-100">
                                <div
                                  className="faq-header"
                                  id={`heading${item.id}`}
                                 
                                >
                                  <h4
                                    className={`mb-0 ${
                                      active === item.id ? "" : "collapsed"
                                    }`}
                                    onClick={() => toggleAccordion(item.id)}
                                    style={{ cursor: "pointer" }}
                                   
                                  >
                                    {item.question}
                                    <i 
                                      className="icon_plus"
                                     
                                    ></i>
                                    <i 
                                      className="icon_minus-06"
                                     
                                    ></i>
                                  </h4>
                                </div>
                                <AnimatePresence>
                                  {active === item.id && (
                                    <AnimationDiv
                                      id={`collapse${item.id}`}
                                      className="collapse show"
                                      aria-labelledby={`heading${item.id}`}
                                      data-bs-parent="#accordionExample"
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ 
                                        height: "auto", 
                                        opacity: 1 
                                      }}
                                      exit={{ 
                                        height: 0, 
                                        opacity: 0 
                                      }}
                                      transition={{ 
                                        duration: 0.3,
                                        ease: "easeInOut"
                                      }}
                                      style={{ overflow: "hidden" }}
                                    >
                                      <AnimationDiv 
                                        className="faq-body"
                                        initial={{ y: -10 }}
                                        animate={{ y: 0 }}
                                        exit={{ y: -10 }}
                                        transition={{ 
                                          duration: 0.2,
                                          delay: 0.1
                                        }}
                                      >
                                        <p>{item.answer}</p>
                                      </AnimationDiv>
                                    </AnimationDiv>
                                  )}
                                </AnimatePresence>
                              </div>
                            </AnimationDiv>
                          ))}
                        </div>
                        <AnimationH5 
                          className="more-contact"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ 
                            duration: 0.5, 
                            delay: faqItems.length * 0.1 + 0.2 
                          }}
                        >
                          Have more question ? <Link href="/contact-us">Contact Us</Link>
                        </AnimationH5>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
    </>
  )
}

export default FaqTabs