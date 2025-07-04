import Image from 'next/image';
import React from 'react';

interface BlogItem {
  id: number;
  title: string;
  category: string;
  categoryClass: string;
  date: string;
  author: string;
  image: string;
  calendarIcon: string;
  userIcon: string;
  delay?: string;
}

const blogPosts: BlogItem[] = [
  {
    id: 1,
    title: 'Build a website that looks like it can run on it’s own',
    category: 'Design',
    categoryClass: 'yellow-bg',
    date: 'November 08, 2022',
    author: 'Spiderthemes',
    image: '/img/home-4/article-1.png',
    calendarIcon: '/img/home-4/calender-outline.svg',
    userIcon: '/img/home-4/user-profile.svg',
    delay: '0.1s',
  },
  {
    id: 2,
    title: 'Build a website that looks like it can run on it’s own',
    category: 'Design',
    categoryClass: 'orange-bg',
    date: 'November 08, 2022',
    author: 'Spiderthemes',
    image: '/img/home-4/article-2.png',
    calendarIcon: '/img/home-4/calender-outline.svg',
    userIcon: '/img/home-4/user-profile.svg',
    delay: '0.3s',
  },
  {
    id: 3,
    title: 'Build a website that looks like it can run on it’s own',
    category: 'Design',
    categoryClass: 'tulip-bg',
    date: 'November 08, 2022',
    author: 'Spiderthemes',
    image: '/img/home-4/article-3.png',
    calendarIcon: '/img/home-4/calender-outline.svg',
    userIcon: '/img/home-4/user-profile.svg',
    delay: '0.5s',
  },
];

const BlogSection = () => {
  return (
    <section
      className="news-area-2 pt-120 pb-200 bg-white position-relative"
      style={{ zIndex: 1 }}
    >
      <div className="container">
        <div className="section-title text-center mb-5">
          <span className="short-title-2">_Blog</span>
          <h1 className="wow fadeInUp mb-3">
            Our latest <span className="underline-shape">articles</span>
          </h1>
          <p>
            There are many variations of passages of Lorem Ipsum available,
            <br />
            but the majority have suffered alteration in some form,
          </p>
        </div>

        <div className="row pt-55 gy-lg-0 gy-4">
          {blogPosts.map((post) => (
            <div
              className="col-lg-4 col-md-6"
              key={post.id}
              data-wow-delay={post.delay}
            >
              <div className="blog-widget-3 wow fadeInUp">
                <a href="#" className="blog-img d-block position-relative">
                  <Image
                    src={post.image}
                    alt="blog-img"
                    width={450}
                    height={280}
                    className="w-100 h-auto"
                  />
                  <div className={`catagory ${post.categoryClass}`}>
                    {post.category}
                  </div>
                </a>
                <div className="blog-content mt-3">
                  <h4>
                    <a href="#">{post.title}</a>
                  </h4>
                  <div className="post-info d-flex justify-content-between mt-3">
                    <div className="post-date d-flex align-items-center gap-2">
                      <Image
                        src={post.calendarIcon}
                        alt="calendar"
                        width={18}
                        height={18}
                      />
                      <span>{post.date}</span>
                    </div>
                    <div className="author d-flex align-items-center gap-2">
                      <Image
                        src={post.userIcon}
                        alt="user profile"
                        width={18}
                        height={18}
                      />
                      <span>{post.author}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
