import styled from 'styled-components';

export const Item = styled.li`
  width: calc((100% - 60px) / 5);
  padding-bottom: 10px;
`;

export const Poster = styled.img`
  display: block;
  width: 228px;
  height: 342px;
  object-fit: cover;
  margin-bottom: 10px;
`;

export const Name = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const Character = styled.p`
  font-size: 16px;
`;
