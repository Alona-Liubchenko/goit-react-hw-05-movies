import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as API from 'components/servises/api';
import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

export const App = () => {
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
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home movies={movies} />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
