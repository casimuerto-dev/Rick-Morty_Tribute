const URL = "https://rickandmortyapi.com/api/character/";
const characterNames = {
  Rick: "1",
  Morty: "2",
  Summer: "3",
  Beth: "4",
  Jerry: "5",
};

const initialState = {
  name: "",
  character: {},
  selected: false,
  loading: false,
};

export { URL, characterNames, initialState };
