import { useState } from 'react';

const ResultList = (props) => {
  return (
    <div style={{height: 200, width: 300, borderStyle: "solid", borderColor: "#000000", borderWidth: 1}}>
      <h3>形式チェック</h3>
      {props.results.map((result) =>
      <ResultItem result={result} />
      )}
    </div>
  );
}

const ResultItem = (props) => {
  const [display, setDisplay] = useState("isOpen");

  const toggleDisplay = () => {
    setDisplay(display === "isOpen" ? "isClose" : "isOpen");
  }

  const invalid_contents = props.result.invalid_contents[0];
  const cells = invalid_contents !== undefined ? invalid_contents.invalid_cells : undefined;

  if (cells === undefined) {
    return (
      <div>
          <b>{props.result.item}</b>
      </div>
    );
  }

  return (
    <div>
      <div onClick={toggleDisplay}>
        <b>{props.result.item}</b>
      </div>
        <div className={display}>
          {cells.map((cell) =>
          <p>{cell.toString()}</p>
          )}
        </div>
    </div>
  );
}

export default ResultList;
