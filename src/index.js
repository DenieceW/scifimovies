//react importeren
//reactdom importeren
//app importeren
//de app in het dom zetten

import React from "react"; //is het framework
import ReactDOM from "react-dom"; //techniek om de app samen te voegen en in de site te gooien
import App from "./App";

ReactDOM.render(<App /> , document.getElementById("root")); //gooi die app in een div met id root
