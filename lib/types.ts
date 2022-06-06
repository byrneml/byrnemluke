export type Config = {
  avatar?: string;
  siteUrl: string;
  siteName: string;
  siteDescription: string;
  siteThumbnail: string;
  nav: Array<{ label: string; href: string }>;
  socials: Array<{ label: string; href: string }>;
  portfolio: Array<{ name: string; href: string }>;
};

export type ExternalLinkProps = {
  href: string;
  text: string;
  linkStyles: string;
  textStyles: string;
};

export type NavBarProps = {
  navItems: Array<{ label: string; href: string }>;
};
