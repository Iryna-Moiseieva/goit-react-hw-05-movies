import { useState, useEffect, useRef, Suspense } from 'react';
import { useParams, useNavigate, Outlet, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from 'components/Loader';
import AdditionalInfo from 'components/AdditionalInfo';
import api from '../../services/moviesApi';
import {
  MovieStyled,
  BackButton,
  Image,
  Title,
  Text,
} from './MovieDetailsPage.styles.js';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { slug } = useParams();
  const movieId = slug.match(/[a-z0-9]+$/)[0];

  const prevPage = useRef(location.state?.prevPath);

  useEffect(() => {
    const getMovie = async () => {
      try {
        setIsLoading(true);

        const response = await api.getMovieById(movieId);
        setMovie({ ...response });
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getMovie();
  }, [movieId]);

  const goBack = () => {
    if (prevPage.current) {
      navigate(prevPage.current);
      return;
    }

    navigate('/');
  };

  return (
    <>
      <BackButton type="button" onClick={goBack}>
        Go back
      </BackButton>
      {isLoading && <Loader />}
      <MovieStyled>
        <Image src={movie.src} alt={movie.title} />
        <div>
          <Title>{movie.title}</Title>
          <Text>User Score: {movie.userScore}</Text>
          <Title>Overview</Title>
          <Text>{movie.overview}</Text>
          <Title>Genres</Title>
          <Text>{movie.genres}</Text>
        </div>
      </MovieStyled>
      <AdditionalInfo />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
