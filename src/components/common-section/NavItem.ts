export type SubSubItem = [string, string];
type SubItem = [string, string] | [string, string, SubSubItem[]];
interface NavItem {
  label: string;
  href: string;
  sub: SubItem[];
}
const NavItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
    sub: [
      ["/", "Smart Finance"],
      ["/index-company", "Loan Company"],
      ["/mobile-app", "Mobile App"],
      ["/simple-banca", "Simple Banca"],
      ["/loan-steps", "Loan Steps"],
      ["/finance-sass-app", "Finance Sass App"],
      ["/small-bank", "Small Bank"],
    ],
  },
  {
    label: "Loan",
    href: "/loan",
    sub: [
      ["/loan", "Get Loan"],
      [
        "/loan-details",
        "Loan Application",
        [
          ["/loan-details", "Step 01"],
          ["/personal-details", "Step 02"],
          ["/document-upload", "Step 03"],
        ],
      ],
    ],
  },
  {
    label: "Job Pages",
    href: "/career",
    sub: [
      ["/career", "Career"],
      ["/jobs", "Jobs"],
      ["/job-application", "Job Application"],
    ],
  },
  {
    label: "Pages",
    href: "/card",
    sub: [
      ["/card", "Cards"],
      ["/about-us", "About Us"],
      ["/contact-us", "Contact Us"],
      ["/error", "404 Error"],
    ],
  },
  {
    label: "Blog",
    href: "/blog-listing",
    sub: [
      ["/blog-listing", "Blog Listing"],
      ["/blog-details", "Blog Details"],
    ],
  },
];

export { NavItems };