import React, { useState, useEffect } from "react";
import "./Circuits.css";

export default function Circuits() {
  const [inputText, setInputText] = useState("");
  const [circuitData, setcircuitData] = useState([]);

  const handleChange = (e) => {
    setInputText(e.target.value.toLowerCase());
  };

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch(
      "https://formula1-425ee-default-rtdb.firebaseio.com/circuits.json"
    );
    const data = await response.json();
    const temp = [];
    for (let key in data) {
      data[key].data.map((val) => temp.push(val));
    }
    setcircuitData(temp);
  }

  const arr = circuitData.filter((item) => {
    if (inputText === " ") return item;
    else
      return (
        item.name.toLowerCase().includes(inputText) ||
        item.location.toLowerCase().includes(inputText) ||
        item.country.toLowerCase().includes(inputText)
      );
  });

  return (
    <React.Fragment>
      <div>
        <div className="texts">
          <label>Search for a circuit </label>
        </div>
        <input type="text" className="input-text" onChange={handleChange} />
      </div>

      <div className="div">
        <table className="table">
          {arr.length != 0 ? (
            <thead>
              <tr>
                <th>Serial Number</th>
                <th>Circuit Name</th>
                <th>Location</th>
                <th>Wiki link</th>
              </tr>
            </thead>
          ) : null}
          <tbody>
            {arr.length == 0 ? (
              <h3>No values Found</h3>
            ) : (
              arr.map((data) => (
                <tr key={data.circuitId}>
                  <td>{data.circuitId}</td>
                  <td>{data.name}</td>
                  <td>{data.location.concat(", ", data.country)}</td>
                  <td>
                    <a href={data.url} target="_blank">
                      {data.url}
                    </a>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}
