const ResultList = (props) => {
  return (
    <div>
      <div class="resultList">
        <h2 class="resultListHeadline">形式チェック</h2>
        <b>{ props.file !== undefined && props.file.name }</b>
        <ul class="resultListListcontenter">
          <>
            {props.results.map((result) =>
            <ResultItem result={result} />
            )}
          </>
        </ul>
      </div>

      <div style={{textAlign: "center"}}>
        <button class="fileUploaderbutton">再アップロードする</button>
      </div>
    </div>
  );
}

const ResultItem = (props) => {

  const item = props.result.item;
  const isValid = props.result.is_valid;
  const invalid_content_list = props.result.invalid_contents;
  const invalid_contents = invalid_content_list !== undefined ? invalid_content_list[0] : undefined;
  const message = invalid_contents !== undefined ? invalid_contents.error_message : undefined;
  const cells = invalid_contents !== undefined ? invalid_contents.invalid_cells : undefined;

  if (isValid === true) {
  // ok
    return (
      <li class="resultListListItem">
        <div class="resultListListHeadline">
          <span class="material-icons-outlined resultListListIcon resultListListIconChecked">check_circle</span>
          <p class="resultListListTitle">{item}</p>
        </div>
      </li>
    );
  } else if (isValid === false) { 
  // だめなセルが存在
    if (cells === undefined) {
      return (
        <li class="resultListListItem">
          <div class="resultListListHeadline">
            <span class="material-icons resultListListIcon resultListListIconError">block</span>
              <p class="resultListListTitle">{item}</p>
          </div>
        </li>
      );
    }
    if (message === undefined) {
      return (
        <li class="resultListListItem">
          <div class="resultListListHeadline">
            <span class="material-icons resultListListIcon resultListListIconError">block</span>
            <p class="resultListListTitle">{item}</p>
          </div>
          <div class="resultListListContents">
            {cells.map((cell) =>
            <span class="resultListListContentsError">{cell[0]}行{cell[1]}列 ,</span>
            )}
          </div>
        </li>
      );
    }
    return (
      <li class="resultListListItem">
        <div class="resultListListHeadline">
          <span class="material-icons resultListListIcon resultListListIconError">block</span>
          <p class="resultListListTitle">{item}</p>
        </div>
        <div class="resultListListContents">
          <p class="resultListListContentsErrorTitle">{message}</p>
          {cells.map((cell) =>
            <span class="resultListListContentsError">{cell[0]}行{cell[1]}列 ,</span>
          )}
        </div>
      </li>
    );
  } else if (isValid === null) {
    return (
      <li class="resultListListItem">
        <div class="resultListListHeadline">
          <span class="material-icons-outlined resultListListIcon resultListListIconBlocked">remove_circle_outline</span>
          <p class="resultListListTitle">{item}</p>
        </div>
        <div class="resultListListContents">
          <p class="resultListListContentsBlocked">ファイル形式が間違っているためチェックできません</p>
        </div>
      </li>
    );
  };

  return (
    <li class="resultListListItem">
      <div class="resultListListHeadline">
        <span class="material-icons-outlined resultListListIcon resultListListIconWaiting">circle</span>
        <p class="resultListListTitle">{item}</p>
      </div>
    </li>
  );
}

export default ResultList;
