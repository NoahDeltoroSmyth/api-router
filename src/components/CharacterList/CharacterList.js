import React from 'react';
import { Link } from 'react-router-dom';
// import CharacterDetail from '../CharacterDetail/CharacterDetail';

const CharacterList = ({ characters }) => {
  return (
    <>
      <Link to="/detail/:id">
        {characters.map((c) => (
          <div key={c.id}>
            <h1>{c.name}</h1>
            <img src={c.img_url} alt={c.name} />
          </div>
        ))}
        {/* <CharacterDetail {...{ characters }} /> */}
      </Link>
    </>
  );
};

export default CharacterList;
