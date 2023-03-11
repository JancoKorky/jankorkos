import classes from './CustomCard.module.scss';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Card } from 'react-bootstrap';

interface Props {
  imageUrl: string;
  title: string;
  description: string;
}

const CustomCard = ({ imageUrl, title, description }: Props) => {
  return (
    <Link href={'/post/1'}>
      <Card className={classNames(classes.CustomCard, 'text-white border-0')}>
        <Image
          src={imageUrl}
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
            className={classNames(classes.CustomCard__title, 'text-uppercase')}
          >
            {title}
          </Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </Link>
  );
};

export default CustomCard;
