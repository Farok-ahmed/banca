"use client";
import { motion, MotionProps, Variants } from "framer-motion";

type AnimationProps = {
  children: React.ReactNode;
  variants?: Variants;
  href?: string;
}& MotionProps & React.HTMLAttributes<HTMLDivElement>;

type AnimationLinkProps ={
    children: React.ReactNode;
  variants?: Variants;
  href?: string;
} & MotionProps & React.HtmlHTMLAttributes<HTMLAnchorElement>;

const AnimationDiv = ({ children,variants, ...props }: AnimationProps) => {
  return <motion.div {...props} variants={variants}>{children}</motion.div>;
};

export const AnimationH1 = ({ children, ...props }: AnimationProps) => {
  return <motion.h1 {...props} >{children}</motion.h1>;
};
export const AnimationH2 = ({ children, ...props }: AnimationProps) => {
  return <motion.h2 {...props} >{children}</motion.h2>;
};
export const AnimationH4 = ({ children, ...props }: AnimationProps) => {
  return <motion.h4 {...props} >{children}</motion.h4>;
};
export const AnimationH5 = ({ children, ...props }: AnimationProps) => {
  return <motion.h5 {...props} >{children}</motion.h5>;
};
export const AnimationH6 = ({ children, ...props }: AnimationProps) => {
  return <motion.h6 {...props} >{children}</motion.h6>;
};
export const AnimationP = ({ children, variants, ...props }: AnimationProps) => {
  return <motion.p {...props} variants={variants}>{children}</motion.p>;
};
export const AnimationSpan = ({ children, variants, ...props }: AnimationProps) => {
  return <motion.span {...props} variants={variants}>{children}</motion.span>;
};

export const AnimationLink = ({ children,variants, ...props }:AnimationLinkProps) => {
  return <motion.a variants={variants} {...props} href={props.href}>{children}</motion.a>;
};

export const AnimationImg = ({ ...props }) => {
  return <motion.img {...props} initial="hidden" />;
};

export default AnimationDiv;
