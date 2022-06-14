import type { Config } from "@/lib/types";

const config: Config = {
  avatar: "/avatar.jpg",
  siteUrl: "https://nextjs-mdx-blog-theme.vercel.app",
  siteName: "Luke Michael Byrne",
  siteDescription:
    "Personal website, built with Next.js, MDX, and Tailwind CSS.",
  nav: [
    { label: "About", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Posts", href: "/posts" },
  ],
  socials: [
    { label: "github", href: "https://github.com/byrneml" },
    { label: "twitter", href: "https://twitter.com/byrnemluke" },
    { label: "linkedin", href: "https://www.linkedin.com/in/byrnel/" },
  ],
  portfolio: [
    { name: "Northflank", href: "https://northflank.com" },
    { name: "Feathery", href: "https://feathery.io" },
    { name: "WorldQL", href: "https://worldql.com" },
    { name: "Grafbase", href: "https://grafbase.com" },
    { name: "Cloudsmith", href: "https://cloudsmith.com" },
    { name: "MetaMap", href: "https://metamap.com" },
    { name: "Sym", href: "https://symops.com" },
  ],
};
export default config;
