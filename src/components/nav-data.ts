/**
 * Shared nav constants.
 * Imported by both the server Nav shell (Nav.tsx) and the client mobile
 * overlay (MobileNavToggle.tsx). Pure data, no React.
 */

export type NavLink = {
  href: string;
  label: string;
};

export const navLinks: NavLink[] = [
  { href: "/collection", label: "Collection" },
  { href: "/lookbook", label: "Lookbook" },
  { href: "/areas", label: "Areas" },
  { href: "/about", label: "About" },
  { href: "/process", label: "Process" },
  { href: "/blog", label: "Blog" },
  { href: "/design-estimate", label: "Get Estimate" },
  { href: "/contact", label: "Contact" },
];

export const PHONE_HREF = "tel:08008611450";
export const PHONE_DISPLAY = "0800 861 1450";
