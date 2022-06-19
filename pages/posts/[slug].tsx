import { MDXRemote } from "next-mdx-remote";
import allMDXComponents from "@/components/MDXComponents";
import getPost from "@/lib/getPost";
import getPosts from "@/lib/getPosts";
import { serialize } from "next-mdx-remote/serialize";
import Layout from "@/components/Layout";

const Post = ({ data, content }) => {
  return (
    <Layout
      title={data.title}
      description={data.description}
      includeLine={false}
    >
      <h1 className="font-bold text-4xl mt-6 mb-6">{data.title}</h1>
      <time className="text-gray-500 italic">{data.date}</time>
      <span className="prose max-w-none prose-md mt-8 dark:prose-invert">
        <MDXRemote {...content} components={allMDXComponents} />
      </span>
    </Layout>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const posts = await getPosts();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug);
  const mdxSource = await serialize(post.content);
  return {
    props: {
      data: post.data,
      content: mdxSource,
    },
  };
};
