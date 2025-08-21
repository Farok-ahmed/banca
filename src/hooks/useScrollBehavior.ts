import { useEffect, useMemo, useState } from "react";
// Constants
const SCROLL_THRESHOLD = 5;
// Custom hooks
const useScrollBehavior = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isScrollDown, setIsScrollDown] = useState<boolean | undefined>();
  const isScrolled = useMemo(() => lastScrollTop > SCROLL_THRESHOLD, [lastScrollTop]);

  useEffect(() => {
    let lastScrollTopRef = lastScrollTop;

    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTopRef) {
        setIsScrollDown(true);
      } else if (currentScrollTop < lastScrollTopRef) {
        setIsScrollDown(false);
      } else {
        setIsScrollDown(undefined);
      }

      lastScrollTopRef = currentScrollTop;
      setLastScrollTop(currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  return { isScrolled, isScrollDown, lastScrollTop };
};

export default useScrollBehavior;