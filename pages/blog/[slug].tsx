import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { posts as postsDB } from '@/db/post';

const BlogPost: NextPage<{ post: PostType }> = ({ post }) => {
  return <div>{post.title}</div>;
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = postsDB.find((post) => post.url === params?.slug);

  return { props: { post } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postsDB.map((post) => {
    return {
      params: {
        slug: post.url,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
export default BlogPost;
