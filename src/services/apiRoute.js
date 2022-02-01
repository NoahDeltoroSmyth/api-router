const fetchCharacters = async () => {
  const resp = fetch(`https://finalspaceapi.com/api/v0/character`);
  const jsonData = await resp.json();
  console.log('jsonData', jsonData);
  return jsonData;
};

export default fetchCharacters;
