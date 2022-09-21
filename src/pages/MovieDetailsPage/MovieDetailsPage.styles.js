import styled from 'styled-components';

export const MovieStyled = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
  padding: 30px 15px;
`;

export const BackButton = styled.button`
  display: block;
  margin: 0 auto;
  min-width: 300px;
  padding: 10px;

  text-align: center;
  text-decoration: none;
  color: var(--color-white);
  font-size: var(--font-size-200);
  background-color: var(--color-blue-200);
  border: 1px solid transparent;
  border-radius: 8px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--color-blue-100);
  }
`;

export const Image = styled.img`
  width: 240px;

  box-shadow: 0 1px 4px black, -23px 0 20px -23px rgb(0 0 0 / 80%),
    23px 0 20px -23px rgb(0 0 0 / 80%), 0 0 40px rgb(0 0 0 / 10%) inset;
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: var(--font-size-300);
  color: var(--color-black);
  line-height: 1.15;
  text-transform: uppercase;
  margin-bottom: 15px;

  &:first-child {
    font-size: 30px;
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: var(--font-size-100);
  color: var(--color-gray-200);

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
