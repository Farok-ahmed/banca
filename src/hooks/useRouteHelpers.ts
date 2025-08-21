import { useCallback } from "react";
// Route configurations
const ROUTE_CONFIGS = {
  headerMenu2: [
    "/index-company",
    "/loan-steps",
    "/finance-sass-app",
    "/jobs",
    "/job-application",
    "/about-us",
    "/error",
  ],
  headerMenu3: [
    "/loan",
    "/loan-details",
    "/personal-details",
    "/document-upload",
    "/career",
    "/card",
    "/contact-us",
    "/blog-listing",
    "/blog-details",
  ],
  bgWhite: ["/jobs", "/job-application", "/about-us"],
  logo2Routes: ["/index-company", "/loan-steps", "/error"],
  logo3Routes: ["/mobile-app"],
} as const;
const useRouteHelpers = (pathname: string) => {
  const checkRouteMatch = useCallback(
    (routes: readonly string[]) => routes.includes(pathname),
    [pathname]
  );

  return {
    isHeaderMenu2: checkRouteMatch(ROUTE_CONFIGS.headerMenu2),
    isHeaderMenu3: checkRouteMatch(ROUTE_CONFIGS.headerMenu3),
    hasBgWhite: checkRouteMatch(ROUTE_CONFIGS.bgWhite),
    isLogo2Route: checkRouteMatch(ROUTE_CONFIGS.logo2Routes),
    isLogo3Route: checkRouteMatch(ROUTE_CONFIGS.logo3Routes),
    isMobileApp: pathname === "/mobile-app",
    isFinanceSass: pathname === "/finance-sass-app",
    isIndexCompany: pathname === "/index-company",
  };
};

export default useRouteHelpers;