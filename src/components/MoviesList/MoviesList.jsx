import PropTypes from 'prop-types';
import MoviesItem from 'components/MoviesItem';
import { MoviesListStyled } from './MoviesList.styles';

export default function MoviesList({ movies, from }) {
  return (
    <MoviesListStyled>
      {movies?.map(movie => (
        <MoviesItem
          key={movie.id}
          id={movie.id}
          title={movie.original_title}
          srcImage={movie.poster_path}
          from={from}
        />
      ))}
    </MoviesListStyled>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    })
  ).isRequired,
};
