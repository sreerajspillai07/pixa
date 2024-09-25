import React, { useEffect, useState } from "react";
import PixaContest from "./PixaContext";

const PixaState = (props) => {
  const [imageData, setImage] = useState([]);
  const [query, setQuery] = useState("london");
  const api_key = "22104808-79b483594341c98e92861ca6a";
  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://pixabay.com/api/?key=${api_key}&q=${query}&image_type=photo`
      );
      const data = await api.json();
      setImage(data.hits);
      console.log(data.hits);
    };

    fetchData();
  }, [query]);

  const fetchCat = async (cat) => {
    const api = await fetch(
      `https://pixabay.com/api/?key=${api_key}&category=${cat}`
    );
    const data = await api.json();
    setImage(data.hits);
    console.log(data.hits);
  };
  return (
    <PixaContest.Provider value={{ imageData, fetchCat, setQuery }}>
      {props.children}
    </PixaContest.Provider>
  );
};

export default PixaState;
