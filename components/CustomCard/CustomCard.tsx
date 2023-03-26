import classes from './CustomCard.module.scss';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Card, Col } from 'react-bootstrap';

interface Props {
  post: PostType;
}

const CustomCard = ({ post }: Props) => {
  return (
    <Col md>
      <Link
        href={{
          pathname: '/blog/[slug]',
          query: { slug: post.url },
        }}
      >
        <Card className={classNames(classes.CustomCard, 'text-white border-0')}>
          <Image
            src={post.image}
            alt="Card image"
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 992px) 50vw,
              33vw"
            className="object-fit-cover"
            quality={100}
          />
          <Card.ImgOverlay className="d-flex flex-column justify-content-end">
            <Card.Title
              className={classNames(
                classes.CustomCard__title,
                'text-uppercase',
              )}
            >
              {post.title}
            </Card.Title>
            <Card.Text>{post.description}</Card.Text>
          </Card.ImgOverlay>
        </Card>
      </Link>
    </Col>
  );
};

export default CustomCard;
