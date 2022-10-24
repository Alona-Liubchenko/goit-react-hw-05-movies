import { Outlet, useSearchParams, useLocation } from 'react-router-dom';
import * as API from 'components/servises/api';
import { useState, useEffect, Suspense } from 'react';
import {
  Form,
  Input,
  Button,
  Searchbar,
  MovieList,
  Item,
  Link,
  MovieTitle,
  Image,
} from './Movies.styled';
import { BiSearchAlt } from 'react-icons/bi';

const Movies = () => {
  const location = useLocation();
  const [films, setFilms] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('query') ?? '';

  useEffect(() => {
    if (search !== '') {
      async function fechMovies() {
        try {
          const items = await API.searchMovies(search);
          setFilms(items.results);
        } catch {
          console.log('error');
        }
      }
      fechMovies();
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
      <Searchbar>
        <Form onSubmit={hendleSubmit}>
          <Input
            type="text"
            onChange={hendleNameChange}
            name={search}
            value={query}
            placeholder={'Please enter a movie title'}
          ></Input>
          <Button type="submit">
            <BiSearchAlt size="25px" />
          </Button>
        </Form>
      </Searchbar>
      <div>
        <MovieList>
          {films.map(film => (
            <Item key={film.id}>
              <Link to={`${film.id}`} state={{ from: location }}>
                <Image
                  src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                  alt=""
                />
                <MovieTitle>{film.title}</MovieTitle>
              </Link>
            </Item>
          ))}
        </MovieList>
      </div>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Movies;
