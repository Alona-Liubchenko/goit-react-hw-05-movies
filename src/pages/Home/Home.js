import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as API from 'components/servises/api';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  //  const location = useLocation();
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
  console.log(movies);
  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
