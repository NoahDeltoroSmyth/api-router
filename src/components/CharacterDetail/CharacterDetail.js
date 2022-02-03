import React from 'react';
import { useHistory } from 'react-router-dom';
import './CharacterDetail.css';

const CharacterDetail = ({ name, species, origin, img_url, status }) => {
  const history = useHistory();
  function handleButtonClick() {
    history.push('/');
  }

  return (
    <div>
      <h1 className="name-header">{name}</h1>
      <img className="detail-img" src={img_url} alt={name} />
      <p>species: {species}</p>
      <p>origin: {origin}</p>
      <p>Dead or Alive?: {status}</p>
      <button onClick={handleButtonClick}>Go back to character list</button>
    </div>
  );
};

export default CharacterDetail;
