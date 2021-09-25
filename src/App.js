import './App.css';
import { useEffect, useState } from 'react';
import FileUploader from './FileUploader';
import UploadProgress from './UploadProgress';
import ResultList from './ResultList.js';
import axios from 'axios';
import {
  Switch,
  Route,
  useHistory,
  useLocation
} from "react-router-dom";

const InitialMode = 0;
const UploadMode = 1;

function App() {

  const [file, setFile] = useState(undefined);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [results, setResults] = useState([]);
  const [mode, setMode] = useState(InitialMode);

  let history = useHistory();
  let location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setMode(InitialMode);
      axios.request({
        method: 'get',
        url: 'https://opendatalinter.volare.site/'
      }).then(data => {
        setResults(data.data);
        console.log(data.data);
      });
      setUploadProgress(0);
    }
  }, [location]);

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

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
        if (e.loaded === e.total) {
          sleep(50).then(() => {
            setMode(InitialMode);
            history.push("/result");
          });
        }
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
          <Switch>
            <Route path="/result">
              <ResultList results={results} file={file} />
            </Route>
            <Route path="/">
              { mode === UploadMode && <UploadProgress uploadProgress={uploadProgress} file={file} /> }
              { mode === InitialMode && <FileUploader setFile={setFile} /> }
            </Route>
          </Switch>
        </div>
      </main>
    </div>
  );
}

export default App;
