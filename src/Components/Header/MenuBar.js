import React from "react";
import "./Menubar.css";
import Drivers from "../Drivers/Drivers";
import Teams from "../Teams/Teams";
import { Link } from "react-router-dom";

export default function () {
  return (
    <>
      <div className="menu-bar">
        <div>
          <Link to="/drivers">Drivers</Link>
        </div>
        <div>
          <Link to="/teams">Teams</Link>
        </div>
        <div>
          <Link to="/circuits">Circuits</Link>
        </div>
      </div>
    </>
  );
}
