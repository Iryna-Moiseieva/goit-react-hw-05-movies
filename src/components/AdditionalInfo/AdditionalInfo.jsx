import {
  AdditionalInfoStyled,
  Item,
  List,
  Title,
  Link,
} from './AdditionalInfo.styles';

export default function AdditionalInfo() {
  return (
    <AdditionalInfoStyled>
      <Title>Additional information:</Title>
      <List>
        <Item>
          <Link to="cast">Cast</Link>
        </Item>
        <Item>
          <Link to="reviews">Reviews</Link>
        </Item>
      </List>
    </AdditionalInfoStyled>
  );
}
