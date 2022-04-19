import { Image } from "antd";
import "./MainImage.css";

function MainImage(props) {
  if (props.stage) {
    return (
      <Image
        className="mainImage"
        src="https://studybreaks.com/wp-content/uploads/2017/06/social-1.jpg"
        alt="Rick opening Morty's eyes"
      />
    );
  } else {
    return (
      <Image
        className="mainImage"
        src="https://arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/FIN7ZFLY2VF7ZIO3F4VAH7DJ5I.jpg"
        alt="Rick and Morty men in black style"
      />
    );
  }
}

export { MainImage };
