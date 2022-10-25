import { useParams, useLocation, Outlet } from 'react-router-dom';
import * as API from 'components/servises/api';
import { useState, useEffect, Suspense } from 'react';
import { IoArrowUndo } from 'react-icons/io5';
import {
  Container,
  Back,
  Box,
  Image,
  Link,
  List,
  Title,
  DetailsTitle,
  Info,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState(null);
  const location = useLocation();

  useEffect(() => {
    async function fechDetails() {
      try {
        const items = await API.movieDetails(movieId);
        setDetails(items);
      } catch {
        console.log('error');
      }
    }
    fechDetails();
  }, [movieId]);

  if (!details) {
    return null;
  }

  const baskLinkHref = location.state?.from ?? '/';
  const date = new Date(details.release_date).getFullYear();
  const userScore = Math.round(details.vote_average * 10);

  return (
    <Container>
      <Back to={baskLinkHref}>
        <IoArrowUndo size="25px" />
        <p>Go back</p>
      </Back>
      <Box>
        <Image
          src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
          alt={details.title}
        />

        <div>
          <Title>
            {details.original_title}({date})
          </Title>
          <p>User Score: {userScore} %</p>
          <DetailsTitle>Overview</DetailsTitle>
          <span>{details.overview}</span>
          <DetailsTitle>Genres</DetailsTitle>
          <ul>
            {details.genres.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </div>
      </Box>
      <Info>
        <DetailsTitle>Additional information</DetailsTitle>
        <List>
          <li>
            <Link to="cast" state={{ from: location.state?.from }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from: location.state?.from }}>
              Reviews
            </Link>
          </li>
        </List>
      </Info>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieDetails;
