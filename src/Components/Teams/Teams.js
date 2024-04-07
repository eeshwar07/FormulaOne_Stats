import React, { useState, useEffect } from "react";
import "./Teams.css";

export default function Teams() {
  const [inputText, setInputText] = useState("");
  const [constructorData, setconstructorData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch(
      "https://formula1-425ee-default-rtdb.firebaseio.com/constructors.json"
    );
    const data = await response.json();
    const temp = [];
    for (let key in data) {
      data[key].data.map((val) => temp.push(val));
    }
    setconstructorData(temp);
  }

  const arr = constructorData.filter((item) => {
    if (inputText === " ") return item;
    else
      return (
        item.name.toLowerCase().includes(inputText) ||
        item.nationality.toLowerCase().includes(inputText)
      );
  });

  const handleChange = (e) => {
    setInputText(e.target.value.toLowerCase());
  };

  return (
    <React.Fragment>
      <div>
        <div className="texts">
          <label>Search for Constructor </label>
        </div>
        <input type="text" className="input-text" onChange={handleChange} />
      </div>

      <div className="div">
        <table className="table">
          {arr.length == 0 ? (
            <h3>No data Found</h3>
          ) : (
            <tr>
              <th>Serial Number</th>
              <th>Constructor Name</th>
              <th>Constructor Nationality</th>
              <th>Constructor Wiki link</th>
            </tr>
          )}
          {arr.length == 0
            ? null
            : arr.map((data) => (
                <tr key={data.constructorId}>
                  <td>{data.constructorId}</td>
                  <td>{data.name}</td>
                  <td>{data.nationality}</td>
                  <td>
                    <a href={data.url} target="_blank">
                      {data.url}
                    </a>
                  </td>
                </tr>
              ))}
        </table>
      </div>
    </React.Fragment>
  );
}
