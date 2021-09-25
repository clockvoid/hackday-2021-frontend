import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import DragAndDrop from './DragAndDrop'

function App() {

  const [files, setFiles] = useState([]);

  const handleDrop = (newFiles) => {
    // filesはuseStateから来るので，deep copyしておかないと参照が変わらず変更がフックされない
    // この方法はnested listでは有効ではないらしい
    let fileList = [...files];
    for (var i = 0; i < newFiles.length; i++) {
      fileList.push(newFiles[i]);
    }
    setFiles(fileList);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Hello value="False" />
        <DragAndDrop handleDrop={handleDrop}>
          <div style={{height: 300, width: 250}}>
            {files.map((file, i) =>
            <div key={i}>{file.name}</div>
            )}
          </div>
        </DragAndDrop>
      </header>
    </div>
  );
}

const Hello = (props) => {
  const [test, setTest] = useState(props.value);
  return (
    <div>
      <p>{test}</p>
      <button onClick={() => {
        setTest(test === "False" ? "True" : "False");
      }}>press me</button>
    </div>
  );
}

export default App;
