export interface GlobalAnnouncement {
  enabled: boolean;
  id: string;
  message: string;
  href?: string;
  ctaLabel?: string;
  dismissible?: boolean;
}

export const GLOBAL_ANNOUNCEMENT: GlobalAnnouncement = {
  enabled: true,
  id: "global-announcement-v1",
  message: "Announcements go here. Update this message in src/constants/announcement.ts.",
  href: "/contact",
  ctaLabel: "Learn more",
  dismissible: true,
};
