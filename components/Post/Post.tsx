import React from 'react';

interface Props extends React.ComponentPropsWithoutRef<'div'> {
  posts: PostType[];
}

const Post = ({ posts, ...divProps }: Props) => {
  return (
    <div {...divProps}>
      {posts.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Post;
