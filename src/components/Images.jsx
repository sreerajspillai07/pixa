import React, { useContext } from "react";
import PixaContest from "../Context/PixaContext";

const Images = () => {
  const { imageData } = useContext(PixaContest);
  return (
    <div className="container">
      <div className="flex">
        {imageData.map((image) => (
          <div key={image.id}>
            <div className="item">
              <img src={image.largeImageURL} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
