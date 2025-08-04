import { NestedSubmenuItem } from "./NestedSubmenuItem";

export interface SubmenuItem {
  text: string;
  link: string;
  submenu?: NestedSubmenuItem[];
}