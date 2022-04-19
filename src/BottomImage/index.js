import "./bottomImageStyles.css";

function BottomImage(props) {
  if (props.stage) {
    return (
      <div className="bottomDiv">
        <a href="#top">
          <img
            onClick={props.onClick}
            className="bottomImage"
            src="https://arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/FIN7ZFLY2VF7ZIO3F4VAH7DJ5I.jpg"
            alt="Rick and Morty men in black style"
          />
        </a>
      </div>
    );
  } else {
    return (
      <div className="bottomDiv">
        <a href="#top">
          <img
            onClick={props.onClick}
            className="bottomImage"
            src="https://studybreaks.com/wp-content/uploads/2017/06/social-1.jpg"
            alt="Rick opening Morty's eyes"
          />
        </a>
      </div>
    );
  }
}

export { BottomImage };
