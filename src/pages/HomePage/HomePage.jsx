import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from 'components/Loader';
import MoviesList from '../../components/MoviesList';
import api from '../../services/moviesApi';
import { HomePageStyled } from './HomePage.styles';

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (trendingMovies.length) {
      return;
    }

    const getTrendingMovies = async () => {
      try {
        setIsLoading(true);

        const movies = await api.getMoviesByTrend();
        setTrendingMovies(movies);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getTrendingMovies();
  }, [trendingMovies, setTrendingMovies]);

  return (
    <HomePageStyled>
      {isLoading && <Loader />}
      <MoviesList movies={trendingMovies} from={location.pathname} />
    </HomePageStyled>
  );
}
