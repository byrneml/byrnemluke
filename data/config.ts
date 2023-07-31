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
      name: "Cloudsmith",
      href: "https://cloudsmith.com",
      date: "2021",
      description: "Artifact management in the cloud",
    },
    {
      name: "Dynaboard",
      href: "https://dynaboard.com",
      date: "2021",
      description: "The low code cloud platform",
    },
    {
      name: "Oxen",
      href: "https://oxen.ai",
      date: "Mar 2023",
      description: "Data version control and more",
    },
    {
      name: "Feathery",
      href: "https://feathery.io",
      date: "Apr 2022",
      description: "Forms as flexible as code",
    },
    {
      name: "Grafbase",
      href: "https://grafbase.com",
      date: "Oct 2021",
      description: "The data platform for developers",
    },
    {
      name: "MetaMap",
      href: "https://metamap.com",
      date: "Nov 2020",
      description: "Identity infrastructure for everyone",
    },
    {
      name: "Dylibso",
      href: "https://dylibso.com",
      date: "Oct 2022",
      description: "Bringing Wasm to production",
    },
    {
      name: "nMachine",
      href: "https://nmachine.io",
      date: "Mar 2022",
      description: "Run Kubernetes your way",
    },
  ],
};
export default config;
