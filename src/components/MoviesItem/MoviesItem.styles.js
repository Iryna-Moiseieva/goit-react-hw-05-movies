import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const slideUp = keyframes`
  0% {
    transform: translateY(10%);
  }
  100% {
    transform: translateY(0%);
  }
`;

export const MoviesItemStyled = styled.li`
  animation-name: ${slideUp};
  animation-duration: 1s;
  animation-timing-function: ease;

  position: relative;
  padding-bottom: 5px;
  width: calc((100% - 90px) / 4);

  transition: transform 250ms linear;

  &:hover,
  &:focus {
    transform: scale(1.05);
    box-shadow: 0 0 5px #000, 0 0 5px #000, 0 0 25px #000, 0 0 100px #000;
  }
`;

export const LinkStyled = styled(Link)`
  width: 100%;
  color: #000;
`;

export const Image = styled.img`
  width: 100%;
  height: 398px;
`;

export const Title = styled.h2`
  padding: 10px;
  font-weight: 700;
  text-align: center;
  color: getColor(text-primary);
  text-transform: uppercase;
  font-size: 12px;
  line-height: 1.33;
`;
