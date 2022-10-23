import { Link, useParams, useLocation, Outlet } from 'react-router-dom';
import * as API from 'components/servises/api';
import { useState, useEffect } from 'react';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState(null);
  const location = useLocation();

  useEffect(() => {
    async function fechD() {
      try {
        const items = await API.movieDetails(movieId);
        setDetails(items);
      } catch {
        console.log('error');
      }
    }
    fechD();
  }, [movieId]);

  if (!details) {
    return null;
  }

  const baskLinkHref = location.state?.from ?? '/';
  const date = new Date(details.release_date).getFullYear();
  const userScore = Math.round(details.vote_average * 10);

  return (
    <div>
      <Link to={baskLinkHref}>Go back</Link>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
          alt={details.title}
        />
      </div>
      <div>
        <h1>
          {details.original_title}({date})
        </h1>
        <p>User Score: {userScore} %</p>
        <h3>Overview</h3>
        <span>{details.overview}</span>
        <h3>Genres</h3>
        <ul>
          {details.genres.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Additional information</h3>
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
