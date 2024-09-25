import React, { useContext } from "react";
import PixaContest from "../Context/PixaContext";

const Navbar = () => {
  const { fetchCat, setQuery } = useContext(PixaContest);
  return (
    <div className="container">
      <div className="title">PIXA</div>
      <button
        onClick={() => fetchCat("fashion")}
        type="button"
        className="btn btn-outline-primary mx-3"
      >
        fashion
      </button>
      <button
        onClick={() => fetchCat("nature")}
        type="button"
        className="btn btn-outline-secondary mx-3"
      >
        nature
      </button>
      <button
        onClick={() => fetchCat("science")}
        type="button"
        className="btn btn-outline-success mx-3"
      >
        science
      </button>
      <button
        onClick={() => fetchCat("health")}
        type="button"
        className="btn btn-outline-danger mx-3"
      >
        health
      </button>
      <button
        onClick={() => fetchCat("computers")}
        type="button"
        className="btn btn-outline-warning mx-3"
      >
        computer
      </button>
      <button
        onClick={() => fetchCat("food")}
        type="button"
        className="btn btn-outline-info mx-3"
      >
        food
      </button>
      <button
        onClick={() => fetchCat("buildings")}
        type="button"
        className="btn btn-outline-dark mx-3 my-1"
      >
        buildings
      </button>

      <div>
        <input
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          placeholder="search"
          style={{ margin: "20px" }}
        />
      </div>
    </div>
  );
};

export default Navbar;
