import React from 'react';

const CharacterList = ({ characters }) => {
  return (
    <>
      {characters.map((c) => (
        <div key={c.id}>
          <h1>{c.name}</h1>
          <img src={c.img_url} alt={c.name} />
        </div>
      ))}
    </>
  );
};

export default CharacterList;
