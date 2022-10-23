import { Outlet } from 'react-router-dom';
import { Heder, Container, Navigate, Link } from './SharedLayout.styled';

export const SharedLayout = () => {
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
      <Outlet />
    </div>
  );
};
