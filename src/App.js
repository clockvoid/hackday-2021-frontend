import './App.css';
import { useState } from 'react';
import FileUploader from './FileUploader';

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
    <div>
      <header>
        Open Data Linter
      </header>
      <center>
        <FileUploader handleDrop={handleDrop} />
      </center>
    </div>
  );
}

export default App;
