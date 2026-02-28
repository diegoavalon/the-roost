export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavColumn {
  title: string;
  links: NavLink[];
}

// Learning Tracks
export const TRACKS: NavLink[] = [
  {
    label: "The Mat",
    href: "/tracks/the-mat",
    description: "Wrestling & Character Development",
  },
  {
    label: "The Gym",
    href: "/tracks/the-gym",
    description: "Physical Fitness & Weight Management",
  },
  {
    label: "The Nutrients",
    href: "/tracks/the-nutrients",
    description: "Nutrition, Meal Planning & Supplements",
  },
  {
    label: "The Study",
    href: "/tracks/the-study",
    description: "Academic Prep & College Readiness",
  },
];

// Programs (age groups)
export const PROGRAMS: NavLink[] = [
  { label: "Little Roosters", href: "#little-roosters" },
  { label: "Varsity Prep", href: "#varsity-prep" },
  { label: "Open Mat", href: "#open-mat" },
];

// Program metadata for dropdown (images added in component)
export const PROGRAM_DETAILS = {
  "little-roosters": {
    label: "Little Roosters",
    description: "Ages 5–12",
    href: "#little-roosters",
  },
  "varsity-prep": {
    label: "Varsity Prep",
    description: "Ages 13–18",
    href: "#varsity-prep",
  },
  "open-mat": {
    label: "Open Mat",
    description: "Adults 18+",
    href: "#open-mat",
  },
} as const;

export const CONNECT_LINKS: NavLink[] = [
  { label: "Contact Us", href: "#contact" },
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
];

export const NAV_COLUMNS: NavColumn[] = [
  {
    title: "Tracks",
    links: TRACKS,
  },
  {
    title: "Connect",
    links: CONNECT_LINKS,
  },
];

export const CONTACT = {
  email: "info@theroostwrestling.org",
  whatsapp: "https://wa.me/",
};
