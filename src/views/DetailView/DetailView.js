import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CharacterDetail from '../../components/CharacterDetail/CharacterDetail';
import { fetchCharactersById } from '../../services/apiRoute';

const DetailView = () => {
  const [character, setCharacter] = useState([]);
  const { id } = useParams();
  console.log('id', id);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharactersById(id);
      setCharacter(data);
      console.log('data', data);
    };
    fetchData();
  }, [id]);
  return (
    <div>
      <CharacterDetail {...character} />
    </div>
  );
};

export default DetailView;
