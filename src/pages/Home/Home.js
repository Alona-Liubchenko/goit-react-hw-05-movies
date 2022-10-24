import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as API from 'components/servises/api';
import {
  Box,
  Title,
  MovieList,
  Item,
  Link,
  Image,
  MovieTitle,
} from './Home.styled';

const Home = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fechTrending() {
      try {
        const items = await API.trendingToDay();
        setMovies(items.results);
      } catch {
        console.log('error');
      }
    }
    fechTrending();
  }, []);

  if (!movies) {
    return;
  }
  return (
    <Box>
      <Title>Trending today</Title>
      <MovieList>
        {movies.map(movie => (
          <Item key={movie.id}>
            <Link to={`movies/${movie.id}`} state={{ from: location }}>
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt=""
              />
              <MovieTitle>{movie.title}</MovieTitle>
            </Link>
          </Item>
        ))}
      </MovieList>
    </Box>
  );
};
export default Home;
