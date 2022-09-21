import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AdditionalInfoStyled = styled.div`
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 30px 15px;
`;

export const Title = styled.h3`
  font-size: var(--font-size-500);
`;

export const List = styled.ul`
  margin-top: 15px;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Link = styled(NavLink)`
  font-size: var(--font-size-400);
  color: var(--color-gray-300);
  &:hover,
  &:focus {
    color: var(--color-blue-100);
  }

  &.active {
    color: var(--color-blue-300);
`;
