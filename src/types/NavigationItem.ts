import { SubmenuItem } from "./SubmenuItem";

export interface NavigationItem {
  label: string;
  href: string;
  submenu?: SubmenuItem[];
}