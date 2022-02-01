import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import CharacterList from '../../components/CharacterList/CharacterList';
import fetchCharacters from '../../services/apiRoute';

const HomeView = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  // const { id } = useParams();

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
