import "./App.css";
import { apiCall } from "../apiCall/apiCall";
import React, { useReducer, useState } from "react";
import { SelectionContainer } from "../CharacterSelection/SelectionContainer";
import { CharacterInfo } from "../CharacterInfo/CharacterInfo";
import { WrittenInfo } from "../CharacterInfo/WrittenInfo";
import { Reducer } from "../Reducer";
import { Portal } from "../Portal/Portal";
import { Loading } from "../Loading/Loading";
import { Info } from "../CharacterInfo/Info";
import { newContext } from "../newContext/newContext";
import { MainImage } from "../MainImage";
import { CharacterImage } from "../CharacterInfo/CharacterImage";
import { URL, characterNames, initialState } from "./constants";
import { BottomImage } from "../BottomImage";
import { TopBar } from "../gh-pages/TopBar/TopBar";

function App() {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const [stage, setStage] = useState(true);

  React.useEffect(() => {
    if (state.name !== "") {
      apiCall(URL, characterNames[state.name]).then((result) => {
        setTimeout(() => {
          dispatch({ type: "FETCH_INFO", payload: result });
        }, 1000);
      });
    }
  }, [state.name]);

  return (
    <div className="App">
      {/* gh-pages only */}
      {/* <TopBar /> */}
      <MainImage id="top" stage={stage} />

      <h2 style={{ color: "white", marginTop: "35px", marginBottom: "35px" }}>
        Choose a Suspect!
      </h2>

      <SelectionContainer loading={state.loading} dispatch={dispatch} />

      <h2 style={{ color: "white", marginTop: "25px" }}>Known Information:</h2>

      <CharacterInfo>
        {state.selected === false ? (
          <img
            className="characterImage"
            src="https://0.academia-photos.com/106295553/25474571/24203769/s200_mr.unknown.jpg"
            alt="Morty pondering towards the screen"
          />
        ) : !state.loading ? (
          <CharacterImage
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
        <h1 className="title">Rick and Morty Tribute!</h1>
      </Portal>
      {state.selected && (
        <BottomImage
          onClick={() => setStage((stage) => !stage)}
          stage={stage}
        />
      )}
      <hr
        style={{
          border: "1px solid white",
          width: "99%",
          marginBottom: "5px",
          marginTop: "20px",
        }}
      />
      <h6 style={{ fontSize: "15px" }}>
        Thanks to{" "}
        <a
          style={{ textDecoration: "none", color: "white" }}
          href="https://rickandmortyapi.com/"
          target="_blank"
          rel="noreferrer"
        >
          RickAndMortyAPI.com
        </a>
      </h6>
    </div>
  );
}

export default App;
