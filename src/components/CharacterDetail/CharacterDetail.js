import React from 'react';
import { useHistory } from 'react-router-dom';

const CharacterDetail = ({ name, species, origin, img_url, status }) => {
  const history = useHistory();
  function handleButtonClick() {
    history.push('/');
  }

  return (
    <div>
      <h1 aria-label="heading-name">{name}</h1>
      <img src={img_url} alt={name} />
      <p>species: {species}</p>
      <p>origin: {origin}</p>
      <p>Dead or Alive?: {status}</p>
      <button onClick={handleButtonClick}>Go back to character list</button>
    </div>
  );
};

export default CharacterDetail;
