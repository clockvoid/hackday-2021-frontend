import './App.css';
import { useEffect, useState } from 'react';
import FileUploader from './FileUploader';
import UploadProgress from './UploadProgress';
import ResultList from './ResultList.js';
import axios from 'axios';

const UploadMode = 1;
const ViewInvalidMode = 2; // eslint-disable-line

function App() {

  const [file, setFile] = useState(undefined);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [results, setResults] = useState([]);
  const [mode, setMode] = useState(UploadMode); // eslint-disable-line

  useEffect(() => {
    if (mode === UploadMode) {
      axios.request({
        method: 'get',
        url: 'https://csvlinter.volare.site/'
      }).then(data => {
        setResults(data.data);
        console.log(data.data);
      });
    }
  }, [mode]);

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
    <div class="App">
      <header class="header">
        <h1 class="headerInner">
          Open Data Linter
        </h1>
      </header>
      <main class="main">
        <div class="mainInner">
          <FileUploader setFile={setFile} />
          <UploadProgress uploadProgress={uploadProgress} file={file} />
          <ResultList results={results} />
        </div>
      </main>
    </div>
  );
}

export default App;
