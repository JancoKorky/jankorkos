import { GetStaticProps, NextPage } from 'next';
import Post from '@/components/Post/Post';
import { posts as postsDB } from '@/db/post';

const Blog: NextPage<{ posts: PostType[] }> = ({ posts }) => {
  return <Post posts={posts} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = postsDB;

  return {
    props: {
      posts,
    },
  };
};

export default Blog;
