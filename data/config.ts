import type { Config } from "@/lib/types";

const config: Config = {
  avatar: "/avatar.jpg",
  siteUrl: "https://byrnemluke.com",
  siteName: "Luke Michael Byrne",
  siteDescription:
    "Personal website, built with Next.js, MDX, and Tailwind CSS.",
  nav: [
    { label: "About", href: "/" },
    { label: "Posts", href: "/posts" },
  ],
  socials: [
    { label: "github", href: "https://github.com/byrneml" },
    { label: "twitter", href: "https://twitter.com/byrnemluke" },
    { label: "linkedin", href: "https://www.linkedin.com/in/byrnel/" },
  ],
  portfolio: [
    {
      name: "Northflank",
      href: "https://northflank.com",
      date: "Jan 2020",
      description: "The full stack cloud platform",
    },
    {
      name: "Feathery",
      href: "https://feathery.io",
      date: "Apr 2022",
      description: "Forms as flexible as code",
    },
    {
      name: "Dynaboard",
      href: "https://dynaboard.com",
      date: "2021",
      description: "The low code cloud platform",
    },
    {
      name: "WorldQL",
      href: "https://worldql.com",
      date: "Mar 2022",
      description: "Multiplayer worlds with vibrant economies",
    },
    {
      name: "Grafbase",
      href: "https://grafbase.com",
      date: "Oct 2021",
      description: "The data platform for developers",
    },
    {
      name: "Cloudsmith",
      href: "https://cloudsmith.com",
      date: "2021",
      description: "Artifact management in the cloud",
    },
    {
      name: "MetaMap",
      href: "https://metamap.com",
      date: "Nov 2020",
      description: "Identity infrastructure for everyone",
    },
    {
      name: "Sym",
      href: "https://symops.com",
      date: "Mar 2020",
      description: "Access workflows for developers",
    },
    {
      name: "Unflow",
      href: "https://unflow.com",
      date: "Mar 2020",
      description: "Mobile experiences without code",
    },
  ],
};
export default config;
