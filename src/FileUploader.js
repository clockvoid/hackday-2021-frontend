import DragAndDrop from './DragAndDrop'
import { useFilePicker } from 'use-file-picker';

const FileUploader = (props) => {

  const handleDrop = (newFiles) => {
    props.setFile(newFiles[0]);
  }

  const [openFileSelector, { plainFiles, clear }] = useFilePicker({
    accept: [
      '.csv',
      '.pdf',
      '.xls',
      '.xlsx'
    ],
    multiple: false,
  });

  if (plainFiles.length > 0) {
    props.setFile(plainFiles[0]);
    clear();
  }

  return (
    <div style={{height: 200, width: 300, borderStyle: "solid", borderColor: "#000000", borderWidth: 1}}>
      <DragAndDrop handleDrop={handleDrop}>
        <h2>ファイルをアップロードする</h2>
        <p>CSV，Excel，PDFをドラッグ&ドロップして，形式をチェックします</p>
        <button onClick={openFileSelector}>ファイルを選択</button>
      </DragAndDrop>
    </div>
  );
}

export default FileUploader;
