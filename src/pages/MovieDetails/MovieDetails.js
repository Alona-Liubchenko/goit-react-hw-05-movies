import { Link, useParams, useLocation, Outlet } from 'react-router-dom';
import * as API from 'components/servises/api';
import { useState, useEffect } from 'react';

export const MovieDetails = () => {
  const { movieId } = useParams();
  console.log(movieId);
  const [details, setDetails] = useState(null);
  const location = useLocation();

  useEffect(() => {
    async function fechD() {
      try {
        const items = await API.movieDetails(movieId);
        setDetails(items);
        console.log(items);
      } catch {
        console.log('error');
      }
    }
    fechD();
  }, [movieId]);

  if (!details) {
    return null;
  }
  console.log(details.poster_path);
  console.log(location);
  const baskLinkHref = location.state?.from ?? '/';
  return (
    <div>
      <Link to={baskLinkHref}>Go back</Link>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${details.backdrop_path}`}
          alt={details.title}
        />
      </div>
      <div>
        <h1>
          {details.original_title}({details.release_date})
        </h1>
        <p>{details.vote_average}</p>
        <p>Overview</p>
        <span>{details.overview}</span>
        <p>Genres</p>
        <ul>
          {details.genres.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};
