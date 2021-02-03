import React from "react";
import BottomComponent from "./components/BottomComponent";
import "./App.css";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCheckSquare, faAngleDoubleRight);

const App = () => {
  return (
    <div>
      <h1 className="title">
        Experience
        <div className="underline" />
      </h1>
      <BottomComponent />
    </div>
  );
};

export default App;
