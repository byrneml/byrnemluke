import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface PostData {
  slug: string;
  data: matter.GrayMatterFile<string>["data"];
}

const getMarkdownFilesData = (folderName: string): PostData[] => {
  const directoryPath = path.join(folderName);
  const files = fs.readdirSync(directoryPath);
  const allFilesData = files
    .map((fileName) => {
      if (path.extname(fileName).match(/\.mdx?$/)) {
        const slug = fileName.replace(/\.mdx?$/, "");
        const filePath = path.join(directoryPath, fileName);
        const fileContents = fs.readFileSync(filePath, "utf8");
        const { data } = matter(fileContents);
        return {
          slug,
          data,
        };
      }
    })
    .filter(Boolean); // Remove undefined values caused by non-markdown files

  return allFilesData as PostData[];
};

export default getMarkdownFilesData;
