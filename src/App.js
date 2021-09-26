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
  const [initialResult, setInitialResult] = useState([]);
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
        setInitialResult(data.data);
      });
      setUploadProgress(0);
    }
    if (location.pathname === "/result") {
      if (file === undefined || file === null) {
        history.replace("/");
      }
    }
  // fileを参照してhistoryを更新しているが，無限ループにはならないので無視
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const applyResult = async (newResult, loadTime) => {
    let minTime = 200;
    if (loadTime > minTime) minTime = 0;

    const shiftedWaitTime = initialResult.map((time, index) => {
      return index * 100;
    });

    let time = 0;
    while (time < Math.max(...shiftedWaitTime)) {
      let tmpResult = [...initialResult];
      await sleep(5);
      time += 5;
      for (let i = 0; i < shiftedWaitTime.length; i++) {
        if (time >= shiftedWaitTime[i]) {
          tmpResult[i] = newResult[i];
        }
      }
      setResults(tmpResult);
    }
  }

  useEffect(() => {
    if (file === undefined || file === null) {
      return;
    }

    setMode(UploadMode);
    setResults(initialResult);

    const submitData = new FormData();
    submitData.append("file", file);
    let uploadDone;
    axios.request({
      method: 'post',
      url: 'https://opendatalinter.volare.site/',
      data: submitData,
      onUploadProgress: (e) => {
        setUploadProgress(e.loaded / e.total * 100);
        if (e.loaded === e.total) {
          sleep(50).then(() => {
            uploadDone = Date.now();
            setMode(InitialMode);
            history.push("/result");
          });
        }
      }
    }).then(data => {
      const newResult = data.data;
      const responseDone = Date.now();
      applyResult(newResult, responseDone - uploadDone);
    }).catch(error => {
    });
  // setInitialResultとhistoryを更新しているが，無限ループにはならないので無視
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file]);

  return (
    <div className="App">
      <header className="header">
        <h1 className="headerInner">
          Open Data Linter
        </h1>
      </header>
      <main className="main">
        <div className="mainInner">
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
      <footer className="footer">
        <p className="footerText">
          総務省から提供されている
          <a href="https://www.soumu.go.jp/main_content/000723626.pdf" target="_blank" rel="noopener noreferrer" className="footerLink">機械判読可能な統計表の統一ルール</a>
          を基に形式をチェックしています
        </p>
      </footer>
    </div>
  );
}

export default App;
