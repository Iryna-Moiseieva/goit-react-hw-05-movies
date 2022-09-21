import PropTypes from 'prop-types';
import { Character, Item, Name, Poster } from './CastItem.styles';

export default function CastItem({ src, name, character }) {
  return (
    <Item>
      <Poster src={src} />
      <Name>
        <b>Name:</b> {name}
      </Name>
      <Character>
        <b>Character:</b> {character}
      </Character>
    </Item>
  );
}

CastItem.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};
