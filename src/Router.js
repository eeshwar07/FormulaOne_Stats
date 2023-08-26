import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Drivers from "./Components/Drivers/Drivers";
import Teams from "./Components/Teams/Teams";
import Circuits from "./Components/Circuits/Circuits";

export default function Rout() {
  // const location = useLocation();
  const [constructorData, setConstructorData] = useState(0);

  useEffect(() => {
    setConstructorData(constructorData + 1);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Drivers />} />
      <Route path="/teams" element={<Teams />} />
      <Route path="/drivers" element={<Drivers />} />
      <Route path="/circuits" element={<Circuits />} />
    </Routes>
  );
}
