import classes from './Container.module.scss';
import React from 'react';
import { Container as BootstrapContainer } from 'react-bootstrap';
import { BsPrefixProps } from 'react-bootstrap/helpers';

export interface Props
  extends BsPrefixProps,
    React.HTMLAttributes<HTMLElement> {
  fluid?: boolean | string | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
}

const Container = ({ children, fluid, ...divProps }: Props) => {
  return (
    <BootstrapContainer
      fluid={fluid}
      className={classes.Container}
      {...divProps}
    >
      {children}
    </BootstrapContainer>
  );
};

export default Container;
