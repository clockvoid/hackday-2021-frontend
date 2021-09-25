import './App.css';
import { useEffect, useState } from 'react';
import FileUploader from './FileUploader';
import UploadProgress from './UploadProgress';
import ResultList from './ResultList.js';
import axios from 'axios';

function App() {

  const [file, setFile] = useState(undefined);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (file === undefined || file == null) return;

    const submitData = new FormData();
    submitData.append("file", file);
    axios.request({
      method: 'post',
      url: 'https://csvlinter.volare.site/',
      data: submitData,
      onUploadProgress: (e) => {
        setUploadProgress(e.loaded / e.total * 100);
      }
    }).then(data => {
      console.log("Success: ", data);
      setResults(data.data);
    }).catch(error => {
      console.log("Error: ", error);
    });
  }, [file]);

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
