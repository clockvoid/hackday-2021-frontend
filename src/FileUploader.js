import DragAndDrop from './DragAndDrop'
import { useFilePicker } from 'use-file-picker';
import { useEffect } from 'react';

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

  useEffect(() => {
    if (plainFiles.length > 0) {
      props.setFile(plainFiles[0]);
      clear();
    }
  // clearとpropsを参照しているが，無限ループにはならないので無視
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [plainFiles]);

  return (
    <div className="fileUploader">
      <DragAndDrop handleDrop={handleDrop}>
        <span className="material-icons-outlined fileUploaderIcon dropHidden">cloud_upload</span>
        <h2 className="fileUploaderHeadline dropHidden">ファイルをアップロードする</h2>
        <p className="fileUploadertext dropHidden">CSV，Excel，PDFをドラッグ&ドロップして，形式をチェックします</p>
        <button className="fileUploaderbutton dropHidden" onClick={openFileSelector}>ファイルを選択</button>
      </DragAndDrop>
    </div>
  );
}

export default FileUploader;
