import DragAndDrop from './DragAndDrop'

const FileUploader = (props) => {
  return (
    <div style={{height: 200, width: 300, borderStyle: "solid", borderColor: "#000000", borderWidth: 1}}>
      <DragAndDrop handleDrop={props.handleDrop}>
        <h2>ファイルをアップロードする</h2>
        <p>CSV，Excel，PDFをドラッグ&ドロップして，形式をチェックします</p>
        <button>ファイルを選択</button>
      </DragAndDrop>
    </div>
  );
}

export default FileUploader;
