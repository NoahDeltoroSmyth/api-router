import React, { useEffect, useState } from 'react';
import CharacterList from '../../components/CharacterList/CharacterList';
import HomeHeader from '../../components/HomeHeader/HomeHeader';
import { fetchCharacters } from '../../services/apiRoute';

const HomeView = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacters();
      setCharacters(data);
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div>
      {loading && <h1>please stand by while we fetch your space data...</h1>}
      {!loading && (
        <>
          <HomeHeader />
          <CharacterList {...{ characters }} />
        </>
      )}
    </div>
  );
};

export default HomeView;
