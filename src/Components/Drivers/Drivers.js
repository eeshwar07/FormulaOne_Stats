import React, { useEffect, useState } from "react";
import "./Drivers.css";
import Select from "react-select";

export default function Drivers() {
  const [driverData, setdriverData] = useState([]);
  const [selectedUserInput, setSelectedUserInput] = useState([]);

  const changeHandler = (data) => {
    setSelectedUserInput(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch(
      "https://formula1-425ee-default-rtdb.firebaseio.com/drivers.json"
    );
    const data = await response.json();
    const temp = [];
    for (let key in data) {
      data[key].data.map((val) => temp.push(val));
    }
    setdriverData(temp);
  }

  return (
    <>
      <div className="form">
        <div className="texts">
          <label>Search for driver </label>
        </div>
        <div>
          <Select
            options={driverData}
            onChange={changeHandler}
            value={selectedUserInput}
          />
        </div>
      </div>
      {Object.keys(selectedUserInput).length > 0 ? (
        <div className="list">
          <h3>
            Driver Name:{" "}
            {selectedUserInput.firstname.concat(" ", selectedUserInput.surname)}
          </h3>
          <h3>
            Driver car number:{" "}
            {!selectedUserInput.number === null
              ? selectedUserInput.number
              : "NA"}
          </h3>
          <h3>Driver DOB: {selectedUserInput.dob}</h3>
          <h3>Driver nationality: {selectedUserInput.nationality}</h3>
          <h3>
            Driver wiki link:{" "}
            <a href={selectedUserInput.url} target="_blank">
              {selectedUserInput.url}
            </a>
          </h3>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
