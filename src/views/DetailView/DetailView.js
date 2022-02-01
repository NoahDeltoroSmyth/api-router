import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CharacterDetail from '../../components/CharacterDetail/CharacterDetail';
import fetchCharacters from '../../services/apiRoute';

const DetailView = () => {
  const [character, setCharacter] = useState([]);
  // const { id } = useParams();
  // console.log('id', id);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacters();
      setCharacter(data);
      console.log('data', data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <CharacterDetail {...{ character }} />
    </div>
  );
};

export default DetailView;
