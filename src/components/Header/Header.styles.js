import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #ececec;
  background-color: var(--color-gray-100);
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.div`
  margin-right: 15px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavList = styled.ul`
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: var(--font-size-400);
`;

export const NavItem = styled.li`
  &:not(:last-child) {
    margin-right: 15px;
  }
`;

export const Link = styled(NavLink)`
  color: var(--color-gray-300);
  &:hover,
  &:focus {
    color: var(--color-blue-100);
  }

  &.active {
    color: var(--color-blue-300);
`;
