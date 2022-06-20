export type Config = {
  avatar?: string;
  siteUrl: string;
  siteName: string;
  siteDescription: string;
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

export type PostCardProps = {
  title: string;
  description: string;
};

export type SubscribeProps = {
  email: string;
};
