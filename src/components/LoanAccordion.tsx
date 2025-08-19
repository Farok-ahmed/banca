'use client';
/* eslint-disable jsx-a11y/role-supports-aria-props */

import { useState } from 'react';
import Image from 'next/image';
import faqIllustration from '@/assets/img/faq/illustration.png';

const LoanAccordion = () => {
  const [openId, setOpenId] = useState('collapseOne');

  const toggle = (id: string) => {
    setOpenId(prev => (prev === id ? '' : id));
  };

  return (
    <div className="row pt-30 align-items-end">
      <div className="col-lg-7 col-md-8">
        <div className="faq-widget">
          <div className="accordion" id="accordionExample">
            {/* FAQ ITEM 1 */}
            <div className="single-widget-one wow fadeInUp" data-wow-delay="0.1s">
              <div className="w-100">
                <div className="faq-header" id="headingOne">
                  <h4
                    className="mb-0"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                    onClick={() => toggle('collapseOne')}
                  >
                    Can I pay off my loan early?
                    <i className="icon_plus" style={{ display: openId === 'collapseOne' ? 'none' : 'inline-block' }}></i>
                    <i className="icon_minus-06" style={{ display: openId === 'collapseOne' ? 'inline-block' : 'none' }}></i>
                  </h4>
                </div>
                <div
                  id="collapseOne"
                  className={`collapse ${openId === 'collapseOne' ? 'show' : ''}`}
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="faq-body">
                    <p>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ ITEM 2 */}
            <div className="single-widget-one wow fadeInUp" data-wow-delay="0.3s">
              <div className="w-100">
                <div className="faq-header" id="headingTwo">
                  <h4
                    className="mb-0 collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                    onClick={() => toggle('collapseTwo')}
                  >
                    How much can I Banca?
                    <i className="icon_plus" style={{ display: openId === 'collapseTwo' ? 'none' : 'inline-block' }}></i>
                    <i className="icon_minus-06" style={{ display: openId === 'collapseTwo' ? 'inline-block' : 'none' }}></i>
                  </h4>
                </div>
                <div
                  id="collapseTwo"
                  className={`collapse ${openId === 'collapseTwo' ? 'show' : ''}`}
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="faq-body">
                    <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ ITEM 3 */}
            <div className="single-widget-one wow fadeInUp" data-wow-delay="0.5s">
              <div className="w-100">
                <div className="faq-header" id="headingThree">
                  <h4
                    className="mb-0 collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                    onClick={() => toggle('collapseThree')}
                  >
                    Do you offering refinancing ?
                    <i className="icon_plus" style={{ display: openId === 'collapseThree' ? 'none' : 'inline-block' }}></i>
                    <i className="icon_minus-06" style={{ display: openId === 'collapseThree' ? 'inline-block' : 'none' }}></i>
                  </h4>
                </div>
                <div
                  id="collapseThree"
                  className={`collapse ${openId === 'collapseThree' ? 'show' : ''}`}
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="faq-body">
                    <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ ITEM 4 */}
            <div className="single-widget-one wow fadeInUp" data-wow-delay="0.7s">
              <div className="w-100">
                <div className="faq-header" id="headingFour">
                  <h4
                    className="mb-0 collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                    onClick={() => toggle('collapseFour')}
                  >
                    Can I do all of my banking with you?
                    <i className="icon_plus" style={{ display: openId === 'collapseFour' ? 'none' : 'inline-block' }}></i>
                    <i className="icon_minus-06" style={{ display: openId === 'collapseFour' ? 'inline-block' : 'none' }}></i>
                  </h4>
                </div>
                <div
                  id="collapseFour"
                  className={`collapse ${openId === 'collapseFour' ? 'show' : ''}`}
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="faq-body">
                    <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ ITEM 5 */}
            <div className="single-widget-one wow fadeInUp" data-wow-delay="0.9s">
              <div className="w-100">
                <div className="faq-header" id="headingFive">
                  <h4
                    className="mb-0 collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                    onClick={() => toggle('collapseFive')}
                  >
                    When should I apply?
                    <i className="icon_plus" style={{ display: openId === 'collapseFive' ? 'none' : 'inline-block' }}></i>
                    <i className="icon_minus-06" style={{ display: openId === 'collapseFive' ? 'inline-block' : 'none' }}></i>
                  </h4>
                </div>
                <div
                  id="collapseFive"
                  className={`collapse ${openId === 'collapseFive' ? 'show' : ''}`}
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample"
                >
                  <div className="faq-body">
                    <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="col-md-4 offset-lg-1 mt-4 mt-md-0 ps-lg-5">
        <div className="faq-img">
          <Image
            className="img-fluid"
            src={faqIllustration}
            alt="faq-image"
          />
        </div>
      </div>
    </div>
  );
};

export default LoanAccordion;
