import { useContext } from "react";
import { newContext } from "../newContext/newContext";

export function Info() {
  const information = useContext(newContext);
  if (!information.loading) {
    return (
      <>
        <p>
          Name:{" "}
          <span className="characterInfoDescript">{information.name}</span>
        </p>
        <p>
          Species:{" "}
          <span className="characterInfoDescript">{information.species}</span>
        </p>
        <p>
          Gender:{" "}
          <span className="characterInfoDescript">{information.gender}</span>
        </p>
        <p>
          Status:{" "}
          <span className="characterInfoDescript">{information.status}</span>
        </p>
      </>
    );
  } else {
    return (
      <>
        <p>
          Name: <span className="characterInfoDescript"> Scanning...</span>
        </p>
        <p>
          Species:
          <span className="characterInfoDescript"> Scanning...</span>
        </p>
        <p>
          Gender: <span className="characterInfoDescript"> Scanning...</span>
        </p>
        <p>
          Status: <span className="characterInfoDescript"> Scanning...</span>
        </p>
      </>
    );
  }
}
