import { Image } from "antd";

import "./CharacterInfo";

function CharacterImage(props) {
  return <Image className="characterImage" src={props.src} alt={props.alt} />;
}

export { CharacterImage };
