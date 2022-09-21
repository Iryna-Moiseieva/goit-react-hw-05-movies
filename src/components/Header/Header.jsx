import { TbMovie } from 'react-icons/tb';
import Container from 'components/Container';
import {
  StyledHeader,
  NavList,
  NavItem,
  Nav,
  Logo,
  Wrapper,
  Link,
} from './Header.styles';

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Wrapper>
          <Logo>
            <TbMovie size="34" color="gray" />
          </Logo>
          <Nav>
            <NavList>
              <NavItem>
                <Link to="/">Home</Link>
              </NavItem>
              <NavItem>
                <Link to="/movies">Movies</Link>
              </NavItem>
            </NavList>
          </Nav>
        </Wrapper>
      </Container>
    </StyledHeader>
  );
}
