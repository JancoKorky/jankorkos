import { BlockToolData } from '@editorjs/editorjs/types/tools';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import { Card } from 'react-bootstrap';
import Container from '@/components/Container/Container';
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
      <Container fluid={'sm'}>
        {postContent.outputData.blocks.map((postBlock) => {
          switch (postBlock.type) {
            case 'header':
              return (
                <p key={postBlock.id} className={`h${postBlock.data.level}`}>
                  {postBlock.data.text}
                </p>
              );
            case 'paragraph':
              return <p key={postBlock.id}>{postBlock.data}</p>;
            case 'image-block': {
              {
                return postBlock.data.map((image: BlockToolData) => {
                  return (
                    <Card className="text-white border-0 h-25" key="asdf">
                      {/* TODO: ImageBlock component that will do everything for me as i dont want to use Card in here */}
                      <Image
                        src={image.data.url}
                        alt="asdf"
                        fill
                        sizes="(max-width: 768px) 100vw,
              (max-width: 992px) 50vw,
              33vw"
                        className="object-fit-cover"
                        quality={100}
                      />
                    </Card>
                  );
                });
              }
            }
          }
        })}
      </Container>
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
