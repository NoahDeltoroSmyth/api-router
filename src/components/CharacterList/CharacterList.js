import React from 'react';
import { Link } from 'react-router-dom';
// import CharacterDetail from '../CharacterDetail/CharacterDetail';

const CharacterList = ({ characters }) => {
  return (
    <>
      {characters.map((c) => (
        <Link key={c.id} to={`/detail/${c.id}`}>
          <h1>{c.name}</h1>
          <img src={c.img_url} alt={c.name} />
        </Link>
      ))}
      {/* <CharacterDetail {...{ characters }} /> */}
    </>
  );
};

export default CharacterList;
