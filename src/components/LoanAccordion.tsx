"use client";

import { useState } from "react";
import Image from "next/image";
import faqIllustration from "@/assets/img/faq/illustration.png";
import { fadeInUp, fadeInRight } from "./animation";
import AnimationDiv from "./animation/AnimationDiv";

interface AccordionData {
  id: string;
  question: string;
  answer: string;
  delay: string;
}

const accordionData: AccordionData[] = [
  {
    id: "collapseOne",
    question: "Can I pay off my loan early?",
    answer:
      "Yes, you can pay off your personal loan early without any prepayment penalties. This can save you money on interest charges over the life of your loan.",
    delay: "0.1s",
  },
  {
    id: "collapseTwo",
    question: "How much can I borrow with Banca?",
    answer:
      "Loan amounts typically range from $1,000 to $100,000, depending on your credit score, income verification, and loan type. Business loans can go up to $5 million.",
    delay: "0.3s",
  },
  {
    id: "collapseThree",
    question: "Do you offer refinancing options?",
    answer:
      "Yes, we offer refinancing options for personal loans, mortgages, and business loans. Refinancing can help you get better rates or access equity.",
    delay: "0.5s",
  },
  {
    id: "collapseFour",
    question: "Can I do all of my banking with you?",
    answer:
      "Absolutely! We offer a full range of banking services including checking accounts, savings accounts, credit cards, loans, and investment services.",
    delay: "0.7s",
  },
  {
    id: "collapseFive",
    question: "When should I apply for a loan?",
    answer:
      "The best time to apply is when you have stable income, good credit score, and clear purpose for the loan. We recommend applying at least 30 days before you need the funds.",
    delay: "0.9s",
  },
];

const LoanAccordion = () => {
  const [openId, setOpenId] = useState("collapseOne");

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? "" : id));
  };

  return (
    <div className="row pt-30 align-items-end">
      <div className="col-lg-7 col-md-8">
        <div className="faq-widget">
          <div className="accordion" id="accordionExample">
            {accordionData.map((faq, index) => (
              <AnimationDiv
                key={faq.id}
                className="single-widget-one wow fadeInUp"
                data-wow-delay={faq.delay}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-100">
                  <div
                    className="faq-header"
                    id={`heading${faq.id.charAt(faq.id.length - 1)}`}
                  >
                    <h4 className="mb-0" onClick={() => toggle(faq.id)}>
                      {faq.question}
                      <i
                        className="icon_plus"
                        style={{
                          display: openId === faq.id ? "none" : "inline-block",
                        }}
                      />
                      <i
                        className="icon_minus-06"
                        style={{
                          display: openId === faq.id ? "inline-block" : "none",
                        }}
                      />
                    </h4>
                  </div>
                  <AnimationDiv
                    id={faq.id}
                    className={`collapse ${openId === faq.id ? "show" : ""}`}
                    aria-labelledby={`heading${faq.id.charAt(
                      faq.id.length - 1
                    )}`}
                    data-bs-parent="#accordionExample"
                    initial={false}
                    animate={{
                      height: openId === faq.id ? "auto" : 0,
                      opacity: openId === faq.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    style={{
                      overflow: "hidden",
                      maxHeight: openId === faq.id ? "500px" : "0px",
                    }}
                  >
                    <AnimationDiv
                      className="faq-body"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{
                        opacity: openId === faq.id ? 1 : 0,
                        y: openId === faq.id ? 0 : -10,
                      }}
                      transition={{
                        duration: 0.3,
                        delay: openId === faq.id ? 0.1 : 0,
                      }}
                    >
                      <p>{faq.answer}</p>
                    </AnimationDiv>
                  </AnimationDiv>
                </div>
              </AnimationDiv>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="col-md-4 offset-lg-1 mt-4 mt-md-0 ps-lg-5">
        <AnimationDiv
          className="faq-img"
          variants={fadeInRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div
          >
            <Image
              className="img-fluid"
              src={faqIllustration}
              alt="faq-image"
            />
          </div>
        </AnimationDiv>
      </div>
    </div>
  );
};

export default LoanAccordion;
