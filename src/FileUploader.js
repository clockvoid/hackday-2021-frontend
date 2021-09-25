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
    <div class="fileUploader">
      <DragAndDrop handleDrop={handleDrop}>
        <span class="material-icons-outlined fileUploaderIcon">cloud_upload</span>
        <h2 class="fileUploaderHeadline">ファイルをアップロードする</h2>
        <p class="fileUploadertext">CSV，Excel，PDFをドラッグ&ドロップして，形式をチェックします</p>
        <button class="fileUploaderbutton" onClick={openFileSelector}>ファイルを選択</button>
      </DragAndDrop>
    </div>
  );
}

export default FileUploader;
