import PropTypes from 'prop-types';
import { Container, Ellipse } from './Loader.styles';

export default function Loader({ absolute = false }) {
  return (
    <Container absolute={absolute}>
      <Ellipse></Ellipse>
      <Ellipse></Ellipse>
      <Ellipse></Ellipse>
      <Ellipse></Ellipse>
    </Container>
  );
}

Loader.propTypes = {
  absolute: PropTypes.bool,
};
