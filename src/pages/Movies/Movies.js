import { Outlet, Link, useSearchParams } from 'react-router-dom';
import * as API from 'components/servises/api';
import { useState, useEffect } from 'react';
export const Movies = () => {
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  //  const location = useLocation();
  useEffect(() => {
    async function fechM(value) {
      try {
        const items = await API.searchMovies(value);
        setFilms(items.results);
        console.log(items.results);
      } catch {
        console.log('error');
      }
    }
    fechM();
  }, []);
  const onChange = value => {
    console.log(value);
    setSearchParams({ search: value });
  };
  return (
    <div>
      <div>
        <form>
          <input type="text" onChange={e => onChange(e.target.value)}></input>
          <button type="submit">Search</button>
        </form>
      </div>
      <ul>
        {films.map(film => (
          <li key={film.id}>
            <Link to={`${film.id}`}>{film.title}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};
