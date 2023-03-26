import { GetStaticProps, NextPage } from 'next';
import { Row } from 'react-bootstrap';
import CustomCard from '@/components/CustomCard/CustomCard';
import { posts as postsDB } from '@/db/post';

const Blog: NextPage<{ posts: PostType[] }> = ({ posts }) => {
  return (
    <Row xs={1} md={1} lg={1} className="g-2">
      {posts.map((post, position) => (
        <CustomCard post={post} key={`${post.title + '_' + position}`} />
      ))}
    </Row>
  );
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
