export const menuItems = [
  {
    label: 'Home',
    href: '/',
    submenu: [
      { label: 'Smart Finance', href: '/' },
      { label: 'Loan Company', href: '/index-company' },
      { label: 'Mobile App', href: '/mobile-app' },
      { label: 'Simple Banca', href: '/simple-banca' },
      { label: 'Loan Steps', href: '/loan-steps' },
      { label: 'Finance Sass App', href: '/finance-sass-app' },
      { label: 'Small Bank', href: '/small-bank' },
    ],
  },
  {
    label: 'Loan',
    href: '/loan',
    submenu: [
      { label: 'Get loan', href: '/loan' },
      {
        label: 'Loan Application',
        href: '/loan-details',
        submenu: [
          { label: 'Step 01', href: '/loan-details' },
          { label: 'Step 02', href: '/personal-details' },
          { label: 'Step 03', href: '/document-upload' },
        ],
      },
    ],
  },
  {
    label: 'Job Pages',
    href: '/career',
    submenu: [
      { label: 'Career', href: '/career' },
      { label: 'Jobs', href: '/jobs' },
      { label: 'Job Application', href: '/job-application' },
    ],
  },
  {
    label: 'Pages',
    href: '/card',
    submenu: [
      { label: 'Cards', href: '/card' },
      { label: 'About Us', href: '/about-us' },
      { label: 'Contact Us', href: '/contact-us' },
      { label: '404 Error', href: '/error' },
    ],
  },
  {
    label: 'Blog',
    href: '/blog-listing',
    submenu: [
      { label: 'Blog Listing', href: '/blog-listing' },
      { label: 'Blog Details', href: '/blog-details' },
    ],
  },
];

// Optional: Logo configuration
export const logoConfig = {
  main: '/img/logo/Logo.png',
  mainRetina: '/img/logo/Logo@2x.png',
  sticky: '/img/logo/Logo-2.png',
  stickyRetina: '/img/logo/Logo-2@2x.png',
  alt: 'logo',
  width: 120,
  height: 40,
};

// Optional: External button configuration
export const externalButton = {
  text: 'Buy Banca',
  href: 'https://themeforest.net/item/banca-banking-business-loan-bootstrap5html-website-template/32788885?s_rank=9',
  target: '_blank',
  rel: 'noopener noreferrer',
  className: 'theme-btn theme-btn-rounded-2 theme-btn-alt',
  style: { backgroundColor: '#0050b2', color: '#fff' },
};