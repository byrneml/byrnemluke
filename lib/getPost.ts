import fs from "fs";
import path from "path";
import matter from "gray-matter";

const getPost = (slug: String) => {
  const fileContents = fs.readFileSync(
    path.join(`data/posts/${slug}.mdx`),
    "utf8"
  );
  const { data, content } = matter(fileContents);
  return {
    data,
    content,
  };
};

export default getPost;
