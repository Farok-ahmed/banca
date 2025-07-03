'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface TabData {
  id: string;
  label: string;
  title: string;
  description: string;
  imgSrc: string;
}

const tabContent: TabData[] = [
  {
    id: 'freelancer',
    label: 'Freelancers',
    title: 'Access to secure banking',
    description: 'Lorem Ipsum is simply dummy text of the printing and the typesetting industry. Lorem Ipsum has been industry\'s',
    imgSrc: '/img/home-4/freelance-tab.png',
  },
  {
    id: 'startup',
    label: 'SMBs & Startups',
    title: 'Manage your cash easily',
    description: 'Lorem Ipsum is simply dummy text of the printing and the typesetting industry. Lorem Ipsum has been industry\'s',
    imgSrc: '/img/home-4/freelance-tab-2.png',
  },
  {
    id: 'business',
    label: 'Business Founders',
    title: 'Access to secure banking',
    description: 'Lorem Ipsum is simply dummy text of the printing and the typesetting industry. Lorem Ipsum has been industry\'s',
    imgSrc: '/img/home-4/freelance-tab.png',
  },
  {
    id: 'micro_business',
    label: 'Micro businesses',
    title: 'Manage your cash easily',
    description: 'Lorem Ipsum is simply dummy text of the printing and the typesetting industry. Lorem Ipsum has been industry\'s',
    imgSrc: '/img/home-4/freelance-tab-2.png',
  },
];

const AboutTabs = () => {
  const [activeTab, setActiveTab] = useState('freelancer');

  return (
    <section className="about-tab-area bg-white">
      <div className="container">
        {/* Nav Buttons */}
        <ul className="nav nav-tabs" role="tablist">
          {tabContent.map((tab) => (
            <li className="nav-item" role="presentation" key={tab.id}>
              <button
                className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
                type="button"
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Tab Panels */}
        <div className="tab-content pt-4">
          {tabContent.map((tab) => (
            <div
              key={tab.id}
              className={`tab-pane fade ${activeTab === tab.id ? 'show active' : ''}`}
            >
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <div className="section-title text-start">
                    <h1>
                      {tab.title.split(' ')[0]} <span className="underline-shape">{tab.title.split(' ').slice(1).join(' ')}</span>
                    </h1>
                    <p>{tab.description}</p>
                    <a className="read-more" href="#">
                      Get started now <i className="arrow_right" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-7">
                  <Image
                    className="img-fluid"
                    src={tab.imgSrc}
                    alt={tab.label}
                    width={600}
                    height={400}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTabs;
