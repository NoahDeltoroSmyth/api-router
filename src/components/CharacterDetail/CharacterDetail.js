import React from 'react';
import { useHistory } from 'react-router-dom';
import './CharacterDetail.css';

const CharacterDetail = ({ character, id }) => {
  const history = useHistory();
  function handleButtonClick() {
    history.push('/');
  }

  return (
    <div>
      <h1 className="name-header">{character.name}</h1>
      <img className="detail-img" src={character.img_url} alt={character.name} />
      <p>species: {character.species}</p>
      <p>origin: {character.origin}</p>
      <p>Dead or Alive?: {character.status}</p>
      <button onClick={handleButtonClick}>Go back to character list</button>
    </div>
  );
};

export default CharacterDetail;
