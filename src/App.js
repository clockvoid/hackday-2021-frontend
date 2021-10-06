import './App.css';
import { useEffect, useState } from 'react';
import FileUploader from './FileUploader';
import UploadProgress from './UploadProgress';
import ResultList from './ResultList.js';
import Devinfo from './devinfo';
import Header from './header';
import axios from 'axios';
import {
  Switch,
  Route,
  useHistory,
  useLocation,
} from "react-router-dom";
import gradient1 from './image/gradient-1.png'
import gradient2 from './image/gradient-2.png'
import gradient3 from './image/gradient-3.png'
import gradient4 from './image/gradient-4.png'

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

  useEffect(() => {
    if (file === undefined || file === null) {
      return;
    }

    setMode(UploadMode);
    setResults(initialResult);

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
      setResults(data.data);
    }).catch(error => {
    });
  // setInitialResultとhistoryを更新しているが，無限ループにはならないので無視
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file]);

  return (
    <>
      <Switch>
        <Route path="/devinfo">
          <div className="AppDevinfo">
            <Header />
            <main className="devinfoMain">
              <Devinfo />
              <div className="devinfoImageContainer">
                <img src={gradient4} alt="" className="mainImageGradient4"/>
                <img src={gradient3} alt="" className="mainImageGradient3"/>
                <img src={gradient2} alt="" className="mainImageGradient2"/>
                <img src={gradient1} alt="" className="mainImageGradient1"/>
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
        </Route>
        <Switch>
            <div className="App">
              <Header />
              <main className="main">
                <div className="mainInner">
                  <Route path="/result">
                    <ResultList results={results} file={file} />
                  </Route>
                  <Route exact path="/">
                    { mode === UploadMode && <UploadProgress uploadProgress={uploadProgress} file={file} /> }
                    { mode === InitialMode && <FileUploader setFile={setFile} /> }
                  </Route>
                </div>
                <div className="mainImageContainer">
                  <img src={gradient4} alt="" className="mainImageGradient4"/>
                  <img src={gradient3} alt="" className="mainImageGradient3"/>
                  <img src={gradient2} alt="" className="mainImageGradient2"/>
                  <img src={gradient1} alt="" className="mainImageGradient1"/>
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
        </Switch>
      </Switch>
    </>
  );
}

export default App;
