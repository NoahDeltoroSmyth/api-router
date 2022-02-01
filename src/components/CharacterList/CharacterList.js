import React from 'react';
import { Link } from 'react-router-dom';
import './CharacterList.css';

const CharacterList = ({ characters }) => {
  return (
    <div className="character-list">
      {characters.map((c) => (
        <Link className="character-link" key={c.id} to={`/detail/${c.id}`}>
          <h1>{c.name}</h1>
          <img src={c.img_url} alt={c.name} />
        </Link>
      ))}
    </div>
  );
};

export default CharacterList;
