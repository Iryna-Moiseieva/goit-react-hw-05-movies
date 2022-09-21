import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from 'components/Loader';
import CastItem from 'components/CastItem';
import api from '../../services/moviesApi';
import { CastStyled } from './Cast.styles.js';

export default function Cast() {
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { slug } = useParams();
  const movieId = slug.match(/[a-z0-9]+$/)[0];

  useEffect(() => {
    async function getMoviesCast() {
      try {
        setIsLoading(true);
        const response = await api.getMovieCast(movieId);
        setCast(response);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getMoviesCast();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      <CastStyled>
        {cast?.map(({ id, src, name, character }) => (
          <CastItem key={id} src={src} name={name} character={character} />
        ))}
      </CastStyled>
    </>
  );
}
