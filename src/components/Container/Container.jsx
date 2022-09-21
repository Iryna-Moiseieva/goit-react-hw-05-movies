import React from 'react';
import PropTypes from 'prop-types';
import { StyledContainer } from './Container.styles';

export default function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node.isRequired),
    PropTypes.node.isRequired,
  ]),
};
