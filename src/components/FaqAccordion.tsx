"use client";

import { useState } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  delay: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "How much can I borrow?",
    answer:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.",
    delay: "0.1s",
  },
  {
    id: 2,
    question: "What are the requirements to get a loan offer?",
    answer:
      "- You must be at least 18 years old\n- You must have permanent residence in United States\n- You are not registered in the RKI / Debtor Register (DBR)\n\nThe offers you receive are preliminary offers, which are provided that the information you have entered, are correct.\n\nAt the same time, you must sign the loan offer with NemID before the bank can pay out your loan.",
    delay: "0.3s",
  },
  {
    id: 3,
    question: "How can I borrow money ASAP?",
    answer:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.",
    delay: "0.5s",
  },
  {
    id: 4,
    question: "How can you reduce the cost of my loans?",
    answer:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.",
    delay: "0.7s",
  },
  {
    id: 5,
    question: "What does it cost to use Banca?",
    answer:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.",
    delay: "0.9s",
  },
  {
    id: 6,
    question: "When is the loan paid out?",
    answer:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.",
    delay: "1.1s",
  },
  {
    id: 7,
    question: "How long is the repayment period?",
    answer:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.",
    delay: "1.3s",
  },
  {
    id: 8,
    question: "Can I redeem the loan ahead of time?",
    answer:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.",
    delay: "1.5s",
  },
  {
    id: 9,
    question: "Can I change my application after submitting it?",
    answer:
      "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.",
    delay: "1.7s",
  },
];

export default function FAQAccordion() {
  const [openId, setOpenId] = useState<number | null>(2);

  const toggleFAQ = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="col-lg-6">
      <div className="faq-widget-2">
        <div className="accordion" id="accordionExample">
          {faqData.map((item) => (
            <div
              className="single-widget-one wow fadeInUp"
              data-wow-delay={item.delay}
              key={item.id}
            >
              <div className="faq-header" id={`heading${item.id}`}>
                <h6
                  className={`mb-0 ${openId === item.id ? "" : "collapsed"}`}
                  onClick={() => toggleFAQ(item.id)}
                  role="button"
                >
                  {item.question}
                  <i
                    className="icon_plus"
                    style={{
                      display: openId === item.id ? "none" : "inline-block",
                      marginLeft: 8,
                    }}
                  ></i>
                  <i
                    className="icon_close"
                    style={{
                      display: openId === item.id ? "inline-block" : "none",
                      marginLeft: 8,
                    }}
                  ></i>
                </h6>
              </div>
              <div
                id={`collapse${item.id}`}
                className={`collapse ${openId === item.id ? "show" : ""}`}
                aria-labelledby={`heading${item.id}`}
              >
                <div className="faq-body">
                  {item.answer.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
