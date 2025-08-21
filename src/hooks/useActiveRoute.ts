import { SubmenuItem } from "@/types/SubmenuItem";
import { useCallback } from "react";

const useActiveRoute = (pathname: string) => {
  return useCallback(
    (href: string, submenu: SubmenuItem[] | null = null): boolean => {
      if (pathname === href) return true;

      if (submenu) {
        return submenu.some((item: SubmenuItem) => {
          if (pathname === item.link) return true;
          if (item.submenu) {
            return item.submenu.some(
              (deepItem: SubmenuItem) => pathname === deepItem.link
            );
          }
          return false;
        });
      }

      return false;
    },
    [pathname]
  );
};

export default useActiveRoute;