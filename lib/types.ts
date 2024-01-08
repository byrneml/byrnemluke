export type Config = {
  avatar?: string;
  siteUrl: string;
  siteName: string;
  siteDescription: string;
  nav: Array<{ label: string; href: string }>;
  portfolio: Array<{
    name: string;
    href: string;
    date: string;
    description: string;
  }>;
};

export type PostCardProps = {
  title: string;
  description: string;
};
