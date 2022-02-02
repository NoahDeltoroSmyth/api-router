import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CharacterDetail from '../../components/CharacterDetail/CharacterDetail';
import { fetchCharactersById } from '../../services/apiRoute';

const DetailView = () => {
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharactersById(id);
      setCharacter(data);
      setLoading(false);
    };
    fetchData();
  }, [id]);
  return (
    <div>
      {loading && <h1>fetching character information</h1>}
      {!loading && <CharacterDetail {...character} />}
    </div>
  );
};

export default DetailView;
