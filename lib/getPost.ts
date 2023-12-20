import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface PostContent {
  data: matter.GrayMatterFile<string>["data"];
  content: string;
}

const getPost = (folderPath: string, slug: string): PostContent => {
  // Construct the full path to the file
  const filePath = path.join(folderPath, `${slug}.mdx`);
  // Read the file contents
  const fileContents = fs.readFileSync(filePath, "utf8");
  // Use gray-matter to parse the post metadata section
  const { data, content } = matter(fileContents);
  return {
    data,
    content,
  };
};

export default getPost;
