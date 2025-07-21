'use client';
import { useState } from 'react';

const faqs = [
  {
    title: 'Can I pay off my loan early?',
    content:
      'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.',
  },
  {
    title: 'How much can I Banca?',
    content:
      'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.',
  },
  {
    title: 'Do you offering refinancing ?',
    content:
      'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.',
  },
  {
    title: 'Can I do all of my banking with you?',
    content:
      'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.',
  },
  {
    title: 'When should I apply?',
    content:
      'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.',
  },
];

const AboutAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="faq-area-2 pt-125 pb-200 bg_white">
      <div className="container">
        <div className="section-title">
          <h2 className="wow fadeInUp">Frequently asked questions</h2>
        </div>
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="faq-widget">
              <div className="accordion" id="accordionExample">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="single-widget-one wow fadeInUp px-sm-5 px-4"
                    data-wow-delay={`${0.1 + index * 0.2}s`}
                  >
                    <div className="widget-icon">
                      <i className="icon_question_alt2"></i>
                    </div>
                    <div className="w-100">
                      <div className="faq-header" id={`heading${index}`}>
                        <div className="d-flex justify-content-between align-items-center">
                          <h4 className="mb-0">{faq.title}</h4>
                          <div>
                            <i
                              className={`icon_plus ${
                                activeIndex === index ? 'd-none' : ''
                              }`}
                              style={{ cursor: 'pointer' }}
                              onClick={() => toggleAccordion(index)}
                            ></i>
                            <i
                              className={`icon_minus-06 ${
                                activeIndex === index ? '' : 'd-none'
                              }`}
                              style={{ cursor: 'pointer' }}
                              onClick={() => toggleAccordion(index)}
                            ></i>
                          </div>
                        </div>
                      </div>

                      <div
                        id={`collapse${index}`}
                        className={`collapse ${
                          activeIndex === index ? 'show' : ''
                        }`}
                        aria-labelledby={`heading${index}`}
                      >
                        <div className="faq-body pr-lg-130">
                          <p>{faq.content}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAccordion;
