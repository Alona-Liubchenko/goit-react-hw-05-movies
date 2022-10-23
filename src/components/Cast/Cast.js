import { useState, useEffect } from 'react';
import * as API from 'components/servises/api';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    async function fechCast() {
      try {
        const items = await API.searchCast(movieId);
        setCast(items.cast);
      } catch {
        console.log('error');
      }
    }
    fechCast();
  }, [movieId]);
  if (!cast) {
    return null;
  }
  return (
    <div>
      <ul>
        {cast.map(({ id, name, character, profile_path }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${profile_path}`}
              alt={name}
            ></img>
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
