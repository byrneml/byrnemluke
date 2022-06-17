import Link from "next/link";
import config from "@/data/config";
import Layout from "@/components/Layout";
import { PostCard } from "@/components/PostsCard";
import getPosts from "@/lib/getPosts";

const PostsPage = ({ posts }) => {
  return (
    <Layout
      title="Posts"
      description="Things I'm researching"
      includeLine={true}
    >
      <div>
        {posts.map((post, index) => {
          return (
            <PostCard
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
  const posts = getPosts();

  return {
    props: {
      posts,
    },
  };
};
