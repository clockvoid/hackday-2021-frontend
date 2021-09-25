import './App.css';
import { useEffect, useState } from 'react';
import FileUploader from './FileUploader';
import UploadProgress from './UploadProgress';
import ResultList from './ResultList.js';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

const InitialMode = 0;
const UploadMode = 1;
const RenderResultMode = 2;

function App() {

  const [file, setFile] = useState(undefined);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [results, setResults] = useState([]);
  const [mode, setMode] = useState(InitialMode);

  useEffect(() => {
    window.onpopstate = () => {
      setMode(InitialMode);
    };
  });

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  useEffect(() => {
    if (mode === InitialMode) {
      axios.request({
        method: 'get',
        url: 'https://opendatalinter.volare.site/'
      }).then(data => {
        setResults(data.data);
        console.log(data.data);
      });
      setUploadProgress(0);
    }
  }, [mode]);

  useEffect(() => {
    if (file === undefined || file === null) return;

    setMode(UploadMode);

    const submitData = new FormData();
    submitData.append("file", file);
    axios.request({
      method: 'post',
      url: 'https://opendatalinter.volare.site/',
      data: submitData,
      onUploadProgress: (e) => {
        setUploadProgress(e.loaded / e.total * 100);
      }
    }).then(data => {
      console.log("Success: ", data);
      setMode(RenderResultMode);
      sleep(2000).then(() => {
        setResults(data.data);
      });
    }).catch(error => {
      console.log("Error: ", error);
    });
  }, [file]);

  return (
    <Router>
      <div class="App">
        <header class="header">
          <h1 class="headerInner">
            Open Data Linter
          </h1>
        </header>
        <main class="main">
          <div class="mainInner">
            <Redirect to={mode === RenderResultMode ? "/result" : "/"} />
            <Switch>
              <Route path="/result">
                <ResultList results={results} file={file} />
              </Route>
              <Route path="/">
                { mode === InitialMode && <FileUploader setFile={setFile} /> }
                { mode === UploadMode && <UploadProgress uploadProgress={uploadProgress} file={file} /> }
              </Route>
            </Switch>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
