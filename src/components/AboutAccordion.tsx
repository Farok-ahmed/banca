'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const contentVariants = {
    hidden: { 
      height: 0, 
      opacity: 0
    },
    visible: { 
      height: "auto", 
      opacity: 1
    },
  };


  return (
    <section className="faq-area-2 pt-125 pb-200 bg_white">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2>Frequently asked questions</h2>
        </motion.div>
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="faq-widget">
              <motion.div 
                className="accordion" 
                id="accordionExample"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="single-widget-one px-sm-5 px-4"
                   
                  >
                    <div 
                      className="widget-icon"
                    
                    >
                      <i className="icon_question_alt2"></i>
                    </div>
                    <div className="w-100">
                      <div className="faq-header" id={`heading${index}`}>
                        <div className="d-flex justify-content-between align-items-center">
                          <h4 
                            onClick={() => toggleAccordion(index)} 
                            className="mb-0"
                           
                            style={{ cursor: "pointer" }}
                          >
                            {faq.title}
                          </h4>
                          <div>
                            <i
                              className="icon_plus"
                              style={{ 
                                cursor: 'pointer',
                                display: activeIndex === index ? 'none' : 'inline-block'
                              }}
                              onClick={() => toggleAccordion(index)}
                             
                            />
                            <i
                              className="icon_minus-06"
                              style={{ 
                                cursor: 'pointer',
                                display: activeIndex === index ? 'inline-block' : 'none'
                              }}
                              onClick={() => toggleAccordion(index)}
                              
                            />
                          </div>
                        </div>
                      </div>

                      <AnimatePresence>
                        {activeIndex === index && (
                          <motion.div
                            id={`collapse${index}`}
                            className="collapse show"
                            aria-labelledby={`heading${index}`}
                            variants={contentVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            transition={{
                              duration: 0.3,
                              ease: "easeInOut"
                            }}
                            style={{ overflow: "hidden" }}
                          >
                            <motion.div 
                              className="faq-body pr-lg-130"
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ delay: 0.1, duration: 0.3 }}
                            >
                              <p>{faq.content}</p>
                            </motion.div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAccordion;
