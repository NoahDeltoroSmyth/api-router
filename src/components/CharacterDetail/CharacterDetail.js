import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const CharacterDetail = ({ name, species, origin, img_url, status, gender }) => {
  const history = useHistory();
  function handleButtonClick() {
    history.push('/');
  }

  return (
    <div>
      <h1>{name}</h1>
      <img src={img_url} alt={name} />
      <p>{species}</p>
      <p>{origin}</p>
      <p>{status}</p>
      <p>{gender}</p>
      <button onClick={handleButtonClick}>Go back to character list</button>
    </div>
  );
};

export default CharacterDetail;
