import 'react-dom';

const UploadProgress = (props) => {
  const uploadRate = props.uploadProgress / 100 * 100
  return (
    <div class="uploadProgress">
      <h2 class="uploadProgressHeadline">アップロード中...</h2>
      <div class="uploadProgressItem">
        <span class="material-icons-outlined uploadProgressIcon">cloud_upload</span>
        <p class="uploadProgressText">
          {props.file !== undefined ? props.file.name : "ファイル名"}
        </p>
        <span class="uploadProgressRate">{uploadRate > 100 ? '100%' : `${uploadRate}%`}</span>
      </div>
      <div class="uploadProgressBarWapper" value={props.uploadProgress} max="100">
        <div class="uploadProgressBar" style={({ width: `${uploadRate}%`})} />
      </div>
    </div>
  );
}

export default UploadProgress;
