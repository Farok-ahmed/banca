import type { StaticImageData } from "next/image";

export interface BlogItem {
  id: number;
  title: string;
  category: string;
  categoryClass: string;
  date: string;
  author: string;
  image: string | StaticImageData;
  calendarIcon: string | StaticImageData;
  userIcon: string | StaticImageData;
  delay?: string;
}