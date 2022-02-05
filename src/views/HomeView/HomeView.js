import React, { useEffect, useRef, useState } from 'react';
import CharacterList from '../../components/CharacterList/CharacterList';
import Search from '../../components/Controls/Search';
import HomeHeader from '../../components/HomeHeader/HomeHeader';
import { fetchCharacters } from '../../services/apiRoute';

const HomeView = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  let data = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFilter = data.current.filter((character) => {
      return character.name.toLowerCase().includes(query) || character.name.includes(query);
    });
    setCharacters(newFilter);
  };

  useEffect(() => {
    const fetchData = async () => {
      data.current = await fetchCharacters();
      setCharacters(data.current);
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
          <Search {...{ query, setQuery, handleSubmit }} />
          <CharacterList {...{ characters, data }} />
        </>
      )}
    </div>
  );
};

export default HomeView;
