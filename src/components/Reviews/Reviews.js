import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'components/servises/api';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  useEffect(() => {
    async function fechReviews() {
      try {
        const items = await API.searchReviews(movieId);
        setReviews(items.results);
      } catch {
        console.log('error');
      }
    }
    fechReviews();
  }, [movieId]);
  if (!reviews) {
    return null;
  }
  return (
    <div>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <p>Author: {review.author}</p>
            <span>{review.content}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
