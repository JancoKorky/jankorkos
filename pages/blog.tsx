import { GetStaticProps, NextPage } from 'next';
import { Col, Row } from 'react-bootstrap';
import CustomCard from '@/components/CustomCard/CustomCard';
import { posts as postsDB } from '@/db/post';

const Blog: NextPage<{ posts: PostType[] }> = ({ posts }) => {
  return (
    <Row xs={1} md={1} lg={1} className="g-2">
      {posts.map((post, id) => (
        <Col md key={`${post.title + '_' + id}`}>
          <CustomCard
            key={`${post.title + '_' + id}`}
            imageUrl={post.url}
            title={post.title}
            description={post.description}
          />
        </Col>
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
