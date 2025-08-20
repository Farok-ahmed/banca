import { Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 }, 
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 }, 
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 }, 
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export { fadeInUp, fadeInLeft, fadeInRight };