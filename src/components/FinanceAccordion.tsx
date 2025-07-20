'use client';

import React, { useState } from 'react';

const faqs = [
  {
    question: 'How do I reset my password?',
    answer:
      'To reset your password, go to the login page and click on the Forgot Password link. You will be prompted to enter your email address and a reset link will be sent to you.',
  },
  {
    question:
      'What payment methods do you accept and how do I track my purchase order?',
    answer:
      'We accept credit/debit cards, PayPal, and bank transfers. You can track your order in the dashboard.',
  },
  {
    question:
      'What is your return policy and how do I contact support incase of said event?',
    answer:
      'Returns are available within 30 days of purchase. Contact our support team via email or live chat.',
  },
];

const rightFaqs = [
  {
    question: 'What is a mutual fund and how does compound interest builds up?',
    answer:
      'A mutual fund is a pooled investment managed by professionals. Compound interest builds over time as returns generate more returns.',
  },
  {
    question:
      'What budget is a financial plan that outlines your expected income and expenses?',
    answer:
      'A budget helps allocate resources effectively and plan for savings or investments.',
  },
  {
    question:
      'What is a strategy of spreading your investment across different asset classes?',
    answer:
      'It’s called diversification. It minimizes risk by investing in various assets like stocks, bonds, and real estate.',
  },
];

const FinanceAccordion = () => {
  const [openLeftIndex, setOpenLeftIndex] = useState(0);
  const [openRightIndex, setOpenRightIndex] = useState(0);

  const toggleLeft = (index: number) => {
    setOpenLeftIndex((prev) => (prev === index ? -1 : index));
  };

  const toggleRight = (index: number) => {
    setOpenRightIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="saas-faq-area bg-white">
      <div className="container">
        <div
          className="saas-section-title text-center mb-60 wow fadeInUp"
          data-wow-delay="0.2s"
        >
          <h2>
            Frequently asked <span>questions</span>
          </h2>
          <p>
            There are many variations of passages of Lorem Ipsum available but
            them
            <br /> majority have suffered alteration form injected.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="accordion" id="accordionExample">
              {faqs.map((faq, index) => (
                <div
                  className="faq_item wow fadeInUp"
                  data-wow-delay={`0.${index + 3}s`}
                  key={index}
                >
                  <div className="faq-header">
                    <h6
                      className={`mb-0 ${openLeftIndex === index ? '' : 'collapsed'}`}
                      onClick={() => toggleLeft(index)}
                      style={{ cursor: 'pointer' }}
                    >
                      {faq.question}
                      <i
                        className="icon_plus"
                        style={{ display: openLeftIndex === index ? 'none' : 'inline-block' }}
                      ></i>
                      <i
                        className="icon_minus-06"
                        style={{ display: openLeftIndex === index ? 'inline-block' : 'none' }}
                      ></i>
                    </h6>
                  </div>
                  <div
                    className={`collapse ${openLeftIndex === index ? 'show' : ''}`}
                  >
                    <div className="faq-body">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="accordion" id="accordionExample2">
              {rightFaqs.map((faq, index) => (
                <div
                  className="faq_item wow fadeInUp"
                  data-wow-delay={`0.${index + 3}s`}
                  key={index}
                >
                  <div className="faq-header">
                    <h6
                      className={`mb-0 ${openRightIndex === index ? '' : 'collapsed'}`}
                      onClick={() => toggleRight(index)}
                      style={{ cursor: 'pointer' }}
                    >
                      {faq.question}
                      <i
                        className="icon_plus"
                        style={{ display: openRightIndex === index ? 'none' : 'inline-block' }}
                      ></i>
                      <i
                        className="icon_minus-06"
                        style={{ display: openRightIndex === index ? 'inline-block' : 'none' }}
                      ></i>
                    </h6>
                  </div>
                  <div
                    className={`collapse ${openRightIndex === index ? 'show' : ''}`}
                  >
                    <div className="faq-body">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinanceAccordion;
