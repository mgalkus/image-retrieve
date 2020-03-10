import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.scss";

const ImageList = props => {
  const imageNodes = props.images.map(image => {
    return <ImageCard key={image.id} imageProp={image} />;
  });
  return <ul className="image-list">{imageNodes}</ul>;
};

export default ImageList;
