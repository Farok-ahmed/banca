export interface SubmenuItem {
  text: string;
  link: string;
  submenu?: SubmenuItem[];
}

interface NavigationItem {
  label: string;
  href: string;
  submenu?: SubmenuItem[];
}
const navigationItems: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
    submenu: [
      { text: "Smart Finance", link: "/" },
      { text: "Loan Company", link: "/index-company" },
      { text: "Mobile App", link: "/mobile-app" },
      { text: "Simple Banca", link: "/simple-banca" },
      { text: "Loan Steps", link: "/loan-steps" },
      { text: "Finance Sass App", link: "/finance-sass-app" },
      { text: "Small Bank", link: "/small-bank" },
    ],
  },
  {
    label: "Loan",
    href: "/loan",
    submenu: [
      { text: "Get loan", link: "/loan" },
      {
        text: "Loan Application",
        link: "/loan-details",
        submenu: [
          { text: "Step 01", link: "/loan-details" },
          { text: "Step 02", link: "/personal-details" },
          { text: "Step 03", link: "/document-upload" },
        ],
      },
    ],
  },
  {
    label: "Job Pages",
    href: "/career",
    submenu: [
      { text: "Career", link: "/career" },
      { text: "Jobs", link: "/jobs" },
      { text: "Job Application", link: "/job-application" },
    ],
  },
  {
    label: "Pages",
    href: "/card",
    submenu: [
      { text: "Cards", link: "/card" },
      { text: "Typography", link: "/typography" },
      { text: "About Us", link: "/about-us" },
      { text: "Contact Us", link: "/contact-us" },
      { text: "404 Error", link: "/error" },
    ],
  },
  {
    label: "Blog",
    href: "/blog-listing",
    submenu: [
      { text: "Blog Listing", link: "/blog-listing" },
      { text: "Blog Details", link: "/blog-details" },
    ],
  },
];

export { navigationItems };
