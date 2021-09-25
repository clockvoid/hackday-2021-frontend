import 'react-dom';

const UploadProgress = (uploadProgress) => {
  return (
    <div style={{height: 200, width: 300, borderStyle: "solid", borderColor: "#000000", borderWidth: 1}}>
      <h3>アップロード中...</h3>
      <label for="progress">ファイル名</label>
      <progress id="progress" value={uploadProgress} max="100"></progress>
    </div>
  );
}

export default UploadProgress;
