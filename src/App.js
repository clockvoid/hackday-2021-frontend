import './App.css';
import { useState } from 'react';
import FileUploader from './FileUploader';
import UploadProgress from './UploadProgress';
import { useFilePicker } from 'use-file-picker';

function App() {

  const [files, setFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [openFileSelector, { filesContent, loading }] = useFilePicker({
    accept: [
      '.csv',
      '.pdf',
      '.xls',
      '.xlxs'
    ],
    multiple: false,
  });

  const handleDrop = (newFiles) => {
    // filesはuseStateから来るので，deep copyしておかないと参照が変わらず変更がフックされない
    // この方法はnested listでは有効ではないらしい
    let fileList = [...files];
    for (var i = 0; i < newFiles.length; i++) {
      fileList.push(newFiles[i]);
    }
    setFiles(fileList);
  }

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

  return (
    <div>
      <header>
        Open Data Linter
      </header>
      <center>
        <div>
          <FileUploader handleDrop={handleDrop} pickFile={openFileSelector} />
          <UploadProgress uploadProgress={uploadProgress} />
        </div>
      </center>
    </div>
  );
}

export default App;
