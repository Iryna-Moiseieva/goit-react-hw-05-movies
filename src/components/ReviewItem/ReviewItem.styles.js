import styled from 'styled-components';

export const Item = styled.li`
  padding-top: 10px;
  padding-bottom: 10px;

  &:nth-child(2n) {
    background-color: #eee;
  }
`;

export const Name = styled.h3`
  font-size: 16px;
  margin-bottom: 10px;
`;

export const Review = styled.p`
  padding-left: 10px;
  padding-right: 10px;
  font-size: 16px;
`;
