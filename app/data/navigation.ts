export interface NavigationItem {
  label: string;
  href: string;
}

export const navigation: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Solutions",
    href: "/solutions",
  },
  {
    label: "Our Work",
    href: "/showcase",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];