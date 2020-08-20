import React from "react";
import "./Text.css";

const Text = (props) => {
  return <h2> {props.text || "Geen tekst meegegeven"} </h2>;
}

export default Text;
