import { Outlet, Link, useSearchParams, useLocation } from 'react-router-dom';
import * as API from 'components/servises/api';
import { useState, useEffect } from 'react';

export const Movies = () => {
  const location = useLocation();
  const [films, setFilms] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('query') ?? '';

  useEffect(() => {
    if (search !== '') {
      async function fechM() {
        try {
          const items = await API.searchMovies(search);
          setFilms(items.results);
        } catch {
          console.log('error');
        }
      }
      fechM();
    }
  }, [search]);

  if (!films) {
    return null;
  }

  const hendleNameChange = e => {
    setQuery(e.target.value.toLowerCase());
  };
  // const hendleFormSubmit = query => {
  //   setQuery(query);
  //   // setPage(1);
  //   // setImages([]);
  //   console.log(query);
  // };
  const hendleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      alert('Enter the search query');
      return;
    }
    setQuery(query);
    setSearchParams(query !== '' ? { query: query } : '');
  };
  return (
    <div>
      <div>
        <form onSubmit={hendleSubmit}>
          <input
            type="text"
            onChange={hendleNameChange}
            name={search}
            value={query}
          ></input>
          <button type="submit">Search</button>
        </form>
      </div>
      <ul>
        {films.map(film => (
          <li key={film.id}>
            <Link to={`${film.id}`} state={{ from: location }}>
              {film.title}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};
