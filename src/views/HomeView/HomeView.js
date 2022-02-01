import React, { useEffect, useState } from 'react';
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
  return <div></div>;
};

export default HomeView;
