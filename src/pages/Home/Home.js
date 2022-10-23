import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as API from 'components/servises/api';

export const Home = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fechTrending() {
      try {
        const items = await API.trendingToDay();
        setMovies(items.results);
        console.log(items.results);
      } catch {
        console.log('error');
      }
    }
    fechTrending();
  }, []);
  if (!movies) {
    return;
  }
  console.log(movies);
  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
