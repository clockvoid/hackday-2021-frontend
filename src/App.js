import './App.css';
import { useState } from 'react';
import FileUploader from './FileUploader';
import UploadProgress from './UploadProgress';
import ResultList from './ResultList.js';

function App() {

  const [file, setFile] = useState();
  const [uploadProgress, setUploadProgress] = useState(0);

  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function doProgress() {
    await sleep(1000);

    for (let i = 0; i < 100; i++) {
      sleep(100).then(() => {
        setUploadProgress(uploadProgress + 5);
      });
    }
  }

  doProgress();

  const results = [
    {name: "てすと", invalid_cells: ["1-1", "1-2"]},
    {name: "てすと2", invalid_cells: ["2-1", "2-2"]},
  ];

  return (
    <div>
      <header>
        Open Data Linter
      </header>
      <center>
        <div>
          selected file: {file === undefined ? "" : file.name}
          <FileUploader setFile={setFile} />
          <UploadProgress uploadProgress={uploadProgress} />
          <ResultList results={results} />
        </div>
      </center>
    </div>
  );
}

export default App;
