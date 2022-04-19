import "./Selection.css";
import { AntButton } from "../AntButton";

function SelectionContainer(props) {
  return (
    <div className="selectionContainer">
      <AntButton
        type="primary"
        loading={props.loading}
        onClick={() => {
          props.dispatch({ type: "Rick" });
        }}
      >
        Rick
      </AntButton>

      <AntButton
        type="primary"
        loading={props.loading}
        onClick={() => {
          props.dispatch({ type: "Morty" });
        }}
      >
        Morty
      </AntButton>

      <AntButton
        type="primary"
        loading={props.loading}
        onClick={() => {
          props.dispatch({ type: "Summer" });
        }}
      >
        Summer
      </AntButton>

      <AntButton
        type="primary"
        loading={props.loading}
        onClick={() => {
          props.dispatch({ type: "Beth" });
        }}
      >
        Beth
      </AntButton>

      <AntButton
        type="primary"
        loading={props.loading}
        onClick={() => {
          props.dispatch({ type: "Jerry" });
        }}
      >
        Jerry
      </AntButton>
    </div>
  );
}

export { SelectionContainer };
