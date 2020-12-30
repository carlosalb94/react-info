import React, { useState, useEffect, Fragment } from "react";
import Character from "./components/Character";
import Logo from "./assets/logo.png";
import "./styles/App.css";

const BASE_URL = "https://rickandmortyapi.com/api/character";

function App() {
  const [personajes, setPersonajes] = useState([]);
  const [page, setPage] = useState(2);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => {
        setPersonajes(data.results);
      });
  }, []);

  function nextPage() {
    setPage(page + 1);
    fetch(BASE_URL + "/?page=" + page)
      .then((response) => response.json())
      .then((data) => {
        setPersonajes(data.results);
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchByName(inputValue);
  }

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function searchByName(name) {
    try {
      fetch(BASE_URL + "/?name=" + name)
        .then((response) => response.json())
        .then((data) => {
          if (!data.error) setPersonajes(data.results);
        });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Fragment>
      <div className="App">
        <header className="header">
          <figure className="logo">
            <img src={Logo} alt="" />
          </figure>
        </header>
        <form className="form_group" onSubmit={handleSubmit}>
          <input
            className="form_textField"
            type="text"
            onChange={handleChange}
            placeholder="Buscar por nombre"
          />
          <input
            className="form_button"
            type="submit"
            onSubmit={handleSubmit}
            value="Buscar"
          />
        </form>
        <div className="characters_container">
          {personajes.map((personaje) => (
            <Character
              key={personaje.id}
              name={personaje.name}
              image={personaje.image}
              species={personaje.species}
              status={personaje.status}
              origin={personaje.origin.name}
              gender={personaje.gender}
            />
          ))}
        </div>
        <div className="button_container">
          <button className="next_button" onClick={nextPage}>
            Ver mas
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
