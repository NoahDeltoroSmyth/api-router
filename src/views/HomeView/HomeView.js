import React, { useEffect, useState } from 'react';
import CharacterList from '../../components/CharacterList/CharacterList';
import fetchCharacters from '../../services/apiRoute';

const HomeView = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacters();
      setCharacters(data);
      console.log('data', data);
      setLoading(false);
    };
    const timer = setTimeout(() => {
      fetchData();
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {loading && <h1>please stand by while we fetch your space data...</h1>}
      {!loading && <CharacterList {...{ characters }} />}
    </div>
  );
};

export default HomeView;
