import { useParams } from 'react-router-dom';
import * as API from 'components/servises/api';
import { useState, useEffect } from 'react';

export const MovieDetails = () => {
  const { movieId } = useParams();
  console.log(movieId);
  const [details, setDetails] = useState(null);

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

  return (
    <div>
      <button type="button">Go back</button>
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
    </div>
  );
};
