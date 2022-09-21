import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { ButtonSearch, Form, Input } from './SearchForm.styles';

export default function SearchForm({ getQuery }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = e => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const normalizedSearchQuery = searchQuery.toLowerCase().trim();

    if (!normalizedSearchQuery) {
      toast.error('Please enter search parameters.');
      return;
    }

    getQuery(normalizedSearchQuery);
    setSearchQuery('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input value={searchQuery} onChange={handleChange} />
      <ButtonSearch type="submit">Search</ButtonSearch>
    </Form>
  );
}

SearchForm.propTypes = {
  getQuery: PropTypes.func.isRequired,
};
