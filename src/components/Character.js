import React from "react";
import { FaSkullCrossbones, FaQuestion } from "react-icons/fa";
import { GiHeartBeats } from "react-icons/gi";
import "../styles/character.css";
const Character = (props) => {
  function getStatus() {
    switch (props.status) {
      case "Alive":
        return <GiHeartBeats />;
      case "Dead":
        return <FaSkullCrossbones />;
      default:
        return <FaQuestion />;
    }
  }
  function getType() {
    if (props.type) {
      return props.type;
    } else return "Unknown";
  }
  return (
    <div className="character_details">
      <figure className="character_image">
        <img src={props.image} alt="" />
        <figcaption>{props.name}</figcaption>
      </figure>
      <p className="details">Specie: {props.species}</p>
      <h3>{getStatus()}</h3>
      <p className="details">Type: {getType()}</p>
      <p className="details">Origin: {props.origin}</p>
      <p className="details">Gender: {props.gender}</p>
    </div>
  );
};

export default Character;
