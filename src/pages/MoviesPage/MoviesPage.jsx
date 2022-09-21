import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from 'components/Loader';
import MoviesList from 'components/MoviesList';
import SearchForm from 'components/SearchForm';
import api from '../../services/moviesApi';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const from = `${location.pathname}${location.search}`;

  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    const getMovies = async () => {
      try {
        setIsLoading(true);

        const movies = await api.getMoviesByQuery(searchQuery);
        setMovies(movies);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getMovies();
  }, [searchQuery, setMovies]);

  const getQuery = query => {
    if (query === searchQuery) {
      toast.error('You are already on the page of this query.');
      return;
    }

    setSearchParams({ query });
  };

  return (
    <>
      <SearchForm getQuery={getQuery} />
      {isLoading && <Loader />}
      <MoviesList movies={movies} from={from} />
    </>
  );
}
