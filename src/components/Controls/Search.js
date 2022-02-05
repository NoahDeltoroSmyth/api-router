import React from 'react';

const Search = ({ query, setQuery, handleSubmit }) => {
  return (
    <form>
      <input
        type="text"
        placeholder="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSubmit}>Take a Gander</button>
    </form>
  );
};

export default Search;
