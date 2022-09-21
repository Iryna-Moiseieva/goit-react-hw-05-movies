import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  margin-bottom: 15px;
`;

export const Input = styled.input.attrs({ type: 'search', name: 'search' })`
  width: 300px;
  padding: 5px;
  margin-right: 10px;
  font-size: 20px;

  &:hover,
  &:focus {
    outline: 1px solid var(--color-blue-200);
  }
`;

export const ButtonSearch = styled.button`
  display: block;
  margin: 0;
  min-width: 150px;
  padding: 10px;

  text-align: center;
  text-decoration: none;
  color: var(--color-white);
  font-size: var(--font-size-200);
  background-color: var(--color-blue-200);
  border: 1px solid transparent;
  border-radius: 4px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--color-blue-100);
  }
`;
