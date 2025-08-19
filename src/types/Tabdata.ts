import type { StaticImageData } from "next/image";

export interface TabData {
  id: string;
  label: string;
  title: string;
  description: string;
  imgSrc: string | StaticImageData;
}