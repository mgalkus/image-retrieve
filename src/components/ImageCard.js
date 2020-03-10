import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rows: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const imgHeight = this.imageRef.current.clientHeight;
    const rows = Math.ceil(imgHeight / 10 + 1);
    this.setState({ rows });
  };

  render() {
    return (
      <li
        style={{ gridRowEnd: `span ${this.state.rows}` }}
        ref={this.imageContRef}
        className="image-list__image-container"
      >
        <img
          ref={this.imageRef}
          src={this.props.imageProp.urls.regular}
          alt={this.props.imageProp.description}
          className="image-list__image"
        ></img>
      </li>
    );
  }
}

export default ImageCard;
