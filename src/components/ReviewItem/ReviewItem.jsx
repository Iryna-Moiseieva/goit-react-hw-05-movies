import PropTypes from 'prop-types';
import { Review, Item, Name } from './ReviewItem.styles';

export default function ReviewItem({ name, review }) {
  return (
    <Item>
      <Name>{name}</Name>
      <Review>{review}</Review>
    </Item>
  );
}

ReviewItem.propTypes = {
  name: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
};
