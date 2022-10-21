import { Outlet, Link } from 'react-router-dom';
import * as API from 'components/servises/api';
import { useState, useEffect } from 'react';

export const Movies = () => {
  const [films, setFilms] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query.trim() !== '') {
      async function fechM() {
        try {
          const items = await API.searchMovies(query);
          setFilms(items.results);
          console.log(items.results);
        } catch {
          console.log('error');
        }
      }
      fechM();
    }
  }, [query]);

  const hendleNameChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
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
    console.log(query);
    setQuery(' ');
  };
  return (
    <div>
      <div>
        <form onSubmit={hendleSubmit}>
          <input type="text" onChange={hendleNameChange} value={query}></input>
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
