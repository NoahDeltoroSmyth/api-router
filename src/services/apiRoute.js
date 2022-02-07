export const fetchCharacters = async () => {
  const resp = await fetch(`https://finalspaceapi.com/api/v0/character`);
  const jsonData = await resp.json();
  return jsonData;
};

export const fetchCharactersById = async (id) => {
  const resp = await fetch(`https://finalspaceapi.com/api/v0/character/${id}`);
  const characterId = await resp.json();
  return characterId;
};
