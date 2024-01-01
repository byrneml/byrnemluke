// pages/index.tsx
import React from "react";
import Layout from "@/components/Layout";
import getMarkdownFilesData from "@/lib/getMarkdownFilesData";
import { serialize } from "next-mdx-remote/serialize";
import Link from "next/link";

const Ideas = ({ ideas, content }) => {
  return (
    <Layout between={false}>
      <div className="mt-8" />
      {ideas.map((idea, index) => {
        return (
          <div className="flex flex-col py-2">
            <div className="w-full">
              <Link href={`/ideas/${idea.slug}`}>
                <span className="text-lg font-semibold hover:cursor-pointer hover:text-green">
                  {idea.data.title}
                </span>
              </Link>
            </div>
            <div className="flex flex-col lg:row justify-between items-start">
              <span className="text-gray-400">{idea.data.description}</span>
              <span className="flex-grow align-self-end border-t border-gray-700 mx-4"></span>{" "}
              <span className="text-gray-500">{idea.data.date}</span>{" "}
            </div>
          </div>
        );
      })}
    </Layout>
  );
};

export default Ideas;

export const getStaticProps = async () => {
  const ideas = getMarkdownFilesData("./data/ideas");
  const mdxSource = await serialize(ideas[0].data.content);

  return {
    props: {
      ideas,
      content: mdxSource,
    },
  };
};
