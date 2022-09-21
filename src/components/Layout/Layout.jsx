import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'components/Container';
import Header from 'components/Header';
import Loader from 'components/Loader/Loader';
import { Main } from './Layout.styles';

export default function Layout() {
  return (
    <>
      <Header />
      <Main>
        <Container>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </Main>
    </>
  );
}
