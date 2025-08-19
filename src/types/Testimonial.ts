import type { StaticImageData } from "next/image";

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string | StaticImageData;
  rating: number;
  quote: string;
  delay?: string;
}