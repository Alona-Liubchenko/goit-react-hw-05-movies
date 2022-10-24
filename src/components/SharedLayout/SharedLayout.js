import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Heder, Container, Navigate, Link } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <div>
      <Heder>
        <Container>
          <Navigate>
            <Link to="/" end>
              Home
            </Link>
            <Link to="/movies">Movies</Link>
          </Navigate>
        </Container>
      </Heder>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
