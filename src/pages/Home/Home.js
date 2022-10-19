import { useState, useEffect } from 'react';
import * as API from 'components/servises/api';
import { Link, Outlet } from 'react-router-dom';

export const Home = () => {
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

  return (
    <div>
      <h1>Trending today</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};
