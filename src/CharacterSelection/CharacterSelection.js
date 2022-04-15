import React from "react";
const CharacterSelection = (props) => {
  return (
    <>
      <div id={props.id} className="lol" onClick={props.onClick}>
        {props.children}
      </div>
    </>
  );
};

export { CharacterSelection };
