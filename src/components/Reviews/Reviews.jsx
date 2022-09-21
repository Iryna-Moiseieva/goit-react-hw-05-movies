import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from 'components/Loader';
import ReviewItem from 'components/ReviewItem';
import api from '../../services/moviesApi';
import { ReviewStyled } from './Reviews.styles.js';

export default function Reviews() {
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { slug } = useParams();
  const movieId = slug.match(/[a-z0-9]+$/)[0];

  useEffect(() => {
    async function getReviews() {
      try {
        setIsLoading(true);
        const response = await api.getMovieReviews(movieId);
        setReviews(response);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getReviews();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      <ReviewStyled>
        {reviews?.map(({ id, author, content }) => (
          <ReviewItem key={id} name={author} review={content} />
        ))}
      </ReviewStyled>
    </>
  );
}
