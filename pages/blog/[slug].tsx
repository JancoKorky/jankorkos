import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import CustomCard from '@/components/CustomCard/CustomCard';
import { posts as postsDB } from '@/db/post';
import { postContent as postContentDB } from '@/db/postContent';
import { PostContentType } from '@/definitions/postContentType';

const BlogPost: NextPage<{ post: PostType; postContent: PostContentType }> = ({
  post,
  postContent,
}) => {
  return (
    <>
      <CustomCard post={post} />
      <h1 className="text-uppercase">{post.title}</h1>

      {postContent.outputData.blocks.map((postBlock) => {
        if (postBlock.type === 'header')
          return (
            <p key={postBlock.id} className={`h${postBlock.data.level}`}>
              {postBlock.data.text}
            </p>
          );
        return <p key={postBlock.id}>{postBlock.data}</p>;
      })}
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = postsDB.find((post) => post.url === params?.slug);
  const postContent =
    postContentDB.find((postContent) => post?.id === postContent.postIdRef) ||
    null;

  return { props: { post, postContent } };
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
