import { useState } from 'react';

const ResultList = (props) => {
  return (
    <div style={{height: 200, width: 300, borderStyle: "solid", borderColor: "#000000", borderWidth: 1}}>
      <h3>形式チェック</h3>
      {props.results.map((result) =>
      <ResultItem name={result.name} cells={result.invalid_cells} />
      )}
    </div>
  );
}

const ResultItem = (props) => {
  const [display, setDisplay] = useState("isOpen");

  const toggleDisplay = () => {
    setDisplay(display === "isOpen" ? "isClose" : "isOpen");
  }

  return (
    <div>
      <div onClick={toggleDisplay}>
        <b>{props.name}</b>
      </div>
      <div className={display}>
        {props.cells.map((cell) =>
        <p>{cell}</p>
        )}
      </div>
    </div>
  );
}

export default ResultList;
