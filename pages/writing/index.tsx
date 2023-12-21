import Layout from "@/components/Layout";
import { PostCard } from "@/components/Writing/PostsCard";
import getMarkdownFilesData from "@/lib/getMarkdownFilesData";

const PostsPage = ({ posts }) => {
  return (
    <Layout between={false}>
      <div className="pt-8">
        {posts.map((post, index) => {
          return (
            <PostCard
              key={index}
              title={post.data.title}
              description={post.data.description}
            />
          );
        })}
      </div>
    </Layout>
  );
};

export default PostsPage;

export const getStaticProps = () => {
  const posts = getMarkdownFilesData("./data/posts");

  return {
    props: {
      posts,
    },
  };
};
