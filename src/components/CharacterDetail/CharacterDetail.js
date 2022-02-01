import React from 'react';

const CharacterDetail = ({ name, species, origin, img_url, status, gender }) => {
  return (
    <div>
      <h1>{name}</h1>
      <img src={img_url} alt={name} />
      <p>{species}</p>
      <p>{origin}</p>
      <p>{status}</p>
      <p>{gender}</p>
    </div>
  );
};

export default CharacterDetail;
