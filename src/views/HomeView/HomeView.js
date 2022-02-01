import React, { useEffect, useState } from 'react';
import CharacterList from '../../components/CharacterList/CharacterList';
import fetchCharacters from '../../services/apiRoute';

const HomeView = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacters();
      setCharacters(data);
      console.log('data', data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <CharacterList {...{ characters }} />
    </div>
  );
};

export default HomeView;
