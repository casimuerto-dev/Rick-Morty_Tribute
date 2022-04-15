import "./App.css";
import { apiCall } from "../apiCall/apiCall";
import React, { useReducer } from "react";
import { CharacterSelection } from "../CharacterSelection/CharacterSelection";
import { SelectionContainer } from "../CharacterSelection/SelectionContainer";
import { CharacterInfo } from "../CharacterInfo/CharacterInfo";
import { WrittenInfo } from "../CharacterInfo/WrittenInfo";
import { Reducer } from "../Reducer";
import { Portal } from "../Portal/Portal";
import { Loading } from "../Loading/Loading";
import { Info } from "../CharacterInfo/Info";
import { newContext } from "../newContext/newContext";

const URL = "https://rickandmortyapi.com/api/character/";
const characterNames = {
  Rick: "1",
  Morty: "2",
  Summer: "3",
  Beth: "4",
  Jerry: "5",
};

const initalState = {
  name: "",
  character: {},
  selected: false,
  loading: false,
};

function App() {
  const [state, dispatch] = useReducer(Reducer, initalState);

  React.useEffect(() => {
    console.log("useEffect");
    if (state.name !== "") {
      apiCall(URL, characterNames[state.name]).then((result) => {
        console.log("got the info!");
        setTimeout(() => {
          dispatch({ type: "FETCH_INFO", payload: result });
        }, 1000);
      });
    }
  }, [state.name]);

  console.log("re-render");

  return (
    <div className="App">
      <img
        className="mainImage"
        src="https://studybreaks.com/wp-content/uploads/2017/06/social-1.jpg"
        alt="Rick opening Morty's eyes"
      />
      <h2 style={{ color: "white" }}>Choose a suspect!</h2>

      <SelectionContainer>
        <CharacterSelection
          id="R"
          onClick={() => {
            dispatch({ type: "Rick" });
          }}
        >
          Rick
        </CharacterSelection>

        <CharacterSelection
          id="M"
          onClick={() => {
            dispatch({ type: "Morty" });
          }}
        >
          Morty
        </CharacterSelection>

        <CharacterSelection
          id="S"
          onClick={() => {
            dispatch({ type: "Summer" });
          }}
        >
          Summer
        </CharacterSelection>

        <CharacterSelection
          id="B"
          onClick={() => {
            dispatch({ type: "Beth" });
          }}
        >
          Beth
        </CharacterSelection>

        <CharacterSelection
          id="J"
          onClick={() => {
            dispatch({ type: "Jerry" });
          }}
        >
          Jerry
        </CharacterSelection>
      </SelectionContainer>

      <h2 style={{ color: "white" }}>Known Information:</h2>

      <CharacterInfo>
        {state.selected === false ? (
          <img
            className="characterImage"
            src="https://0.academia-photos.com/106295553/25474571/24203769/s200_mr.unknown.jpg"
            // src="https://i.pinimg.com/originals/75/b5/ec/75b5ec85fc5c78350a68721cd9ad0b4d.jpg"
            alt="Morty pondering towards the screen"
          />
        ) : !state.loading ? (
          <img
            className="characterImage"
            src={state.character.image}
            alt={`${state.character.name}`}
          />
        ) : (
          <Loading />
        )}

        <newContext.Provider
          value={{
            loading: state.loading,
            name: state.character.name,
            species: state.character.species,
            gender: state.character.gender,
            status: state.character.status,
          }}
        >
          <WrittenInfo>
            <Info />
          </WrittenInfo>
        </newContext.Provider>
      </CharacterInfo>
      <Portal>
        <h1>Rick and Morty Tribute!</h1>
      </Portal>
    </div>
  );
}

export default App;
