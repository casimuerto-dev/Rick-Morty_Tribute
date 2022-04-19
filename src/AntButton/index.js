import React from "react";
import { Button } from "antd";
import "./AntButton.css";
import "antd/dist/antd.css";

class AntButton extends React.Component {
  render() {
    return (
      <>
        <Button
          className="antButton"
          type={this.props.type}
          loading={this.props.loading}
          onClick={() => this.props.onClick()}
        >
          {this.props.children}
        </Button>
      </>
    );
  }
}

export { AntButton };
