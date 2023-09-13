import React,{useContext }  from "react";
import { getImageUrl } from "./Utils";
import { ImageSizeContext}from "./MyContext.js";

const PlaceImage = ({ place }) => {
  let imageSize = useContext(ImageSizeContext);

  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
};

export default PlaceImage;