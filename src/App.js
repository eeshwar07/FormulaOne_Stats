import "./App.css";
import Header from "./Components/Header/Header";
import ImageHeader from "./Components/Header/ImageHeader";
import React from "react";
import MenuBar from "./Components/Header/MenuBar";
import Rout from "./Router";

function App() {
  return (
    <React.Fragment>
      <Header />
      <ImageHeader />
      <MenuBar />
      <Rout />
    </React.Fragment>
  );
}

export default App;
