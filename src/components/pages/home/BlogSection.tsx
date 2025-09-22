import Image from "next/image";
import Link from "next/link";
import { fadeInUp } from "@/components/animation";
import { BlogItem } from "@/types/Blogitem";
// Assets
import article1 from "@/assets/img/home-4/article-1.png";
import article2 from "@/assets/img/home-4/article-2.png";
import article3 from "@/assets/img/home-4/article-3.png";
import calenderOutline from "@/assets/img/home-4/calender-outline.svg";
import userProfile from "@/assets/img/home-4/user-profile.svg";
import AnimationDiv, { AnimationH1 } from "@/components/animation/AnimationDiv";

const blogPosts: BlogItem[] = [
  {
    id: 1,
    title: "Build a website that looks like it can run on it’s own",
    category: "Design",
    categoryClass: "yellow-bg",
    date: "November 08, 2022",
    author: "Spiderthemes",
    image: article1,
    calendarIcon: calenderOutline,
    userIcon: userProfile,
    delay: "0.1s",
  },
  {
    id: 2,
    title: "Build a website that looks like it can run on it’s own",
    category: "Design",
    categoryClass: "orange-bg",
    date: "November 08, 2022",
    author: "Spiderthemes",
    image: article2,
    calendarIcon: calenderOutline,
    userIcon: userProfile,
    delay: "0.3s",
  },
  {
    id: 3,
    title: "Build a website that looks like it can run on it’s own",
    category: "Design",
    categoryClass: "tulip-bg",
    date: "November 08, 2022",
    author: "Spiderthemes",
    image: article3,
    calendarIcon: calenderOutline,
    userIcon: userProfile,
    delay: "0.5s",
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
          <AnimationH1
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="wow fadeInUp mb-3"
          >
            Our latest <span className="underline-shape">articles</span>
          </AnimationH1>
          <p>
            There are many variations of passages of Lorem Ipsum
            available,
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
              <AnimationDiv
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="blog-widget-3 wow fadeInUp"
              >
                <Link
                  href="/blog-details"
                  className="blog-img d-block position-relative"
                >
                  <Image
                    src={post.image}
                    alt="blog-img"
                    className="w-100 h-auto"
                  />
                  <div className={`catagory ${post.categoryClass}`}>
                    {post.category}
                  </div>
                </Link>
                <div className="blog-content mt-3">
                  <h4>
                    <Link href="/blog-details">{post.title}</Link>
                  </h4>
                  <div className="post-info d-flex justify-content-between mt-3">
                    <div className="post-date d-flex align-items-center gap-2">
                      <Image src={post.calendarIcon} alt="calendar" />
                      <span>{post.date}</span>
                    </div>
                    <div className="author d-flex align-items-center gap-2">
                      <Image src={post.userIcon} alt="user profile" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                </div>
              </AnimationDiv>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;