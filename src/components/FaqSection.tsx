'use client';

import { useState } from 'react';
import Image from 'next/image';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    id: 'one',
    question: 'Can I pay off my loan early?',
    answer:
      'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid...',
  },
  {
    id: 'two',
    question: 'How much can I Banca?',
    answer:
      'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid...',
  },
  {
    id: 'three',
    question: 'Do you offering refinancing ?',
    answer:
      'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid...',
  },
  {
    id: 'four',
    question: 'Can I do all of my banking with you?',
    answer:
      'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid...',
  },
];

const FaqSection = () => {
  const [active, setActive] = useState<string>('one');

  const toggleAccordion = (id: string) => {
    setActive(prev => (prev === id ? '' : id));
  };

  return (
    <section className="faq-area-3 py-16">
      <div className="container">
        <div className="row gy-lg-0 gy-4">
          <div className="col-lg-6">
            <Image
              src="/img/home-4/faq-Img.png"
              alt="FAQ"
              width={600}
              height={500}
              className="faq-img img-fluid"
            />
          </div>
          <div className="col-lg-6 pl-lg-50">
            <span className="subtitle">_FAQ</span>
            <h1>
              Frequently asked general{' '}
              <span className="underline-shape">questions</span>
            </h1>

            <div className="faq-widget">
              <div className="accordion" id="accordionExample">
                {faqItems.map((item, index) => (
                  <div
                    className="single-faq wow fadeInUp"
                    data-wow-delay={`0.${index + 1}s`}
                    key={item.id}
                  >
                    <div className="w-100">
                      <div className="faq-header" id={`heading${item.id}`}>
                        <h4
                          className={`mb-0 ${
                            active === item.id ? '' : 'collapsed'
                          }`}
                          onClick={() => toggleAccordion(item.id)}
                          style={{ cursor: 'pointer' }}
                        >
                          {item.question}
                          <i className="icon_plus"></i>
                          <i className="icon_minus-06"></i>
                        </h4>
                      </div>
                      <div
                        id={`collapse${item.id}`}
                        className={`collapse ${active === item.id ? 'show' : ''}`}
                        aria-labelledby={`heading${item.id}`}
                        data-bs-parent="#accordionExample"
                      >
                        <div className="faq-body">
                          <p>{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <h6 className="more-contact">
                Have more question ?{' '}
                <a href="/contact">Contact Us</a>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
