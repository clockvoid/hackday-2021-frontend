import { useState } from 'react';

const ResultList = (props) => {
  return (
    <div class="resultList">
      <h2 class="resultListHeadline">形式チェック</h2>
      <ul class="resultListListcontenter">
        {props.results.map((result) =>
          <ResultItem result={result} />
        )}
      </ul>
    </div>
  );
}

const ResultItem = (props) => {
  const [display, setDisplay] = useState("isOpen");
  const [itemState, setItemState] = useState("isWaite")

  const toggleDisplay = () => {
    setDisplay(display === "isOpen" ? "isClose" : "isOpen");
  }

  const invalid_contents = props.result.invalid_contents[0];
  const cells = invalid_contents !== undefined ? invalid_contents.invalid_cells : undefined;

  if (cells === undefined) {
    return (
      <div>
          <b>{props.result.item}</b>
      </div>
    );
  }

  return (
    <>
      <li class="resultListListItem">
        <div class="resultListListHeadline">
          <span class="material-icons-outlined resultListListIcon resultListListIconWaiting">circle</span>
          <p class="resultListListTitle">{props.name}</p>
        </div>
      </li>
      <li class="resultListListItem">
        <div class="resultListListHeadline">
          <span class="material-icons-outlined resultListListIcon resultListListIconChecked">check_circle</span>
          <p class="resultListListTitle">{props.name}</p>
        </div>
      </li>
      <li class="resultListListItem">
        <div class="resultListListHeadline">
          <span class="material-icons-outlined resultListListIcon resultListListIconBlocked">remove_circle_outline</span>
          <p class="resultListListTitle">{props.name}</p>
        </div>
        <div class="resultListListContents">
          <p class="resultListListContentsBlocked">ファイル形式が間違っているためチェックできません</p>
        </div>
      </li>
      <li class="resultListListItem">
        <div class="resultListListHeadline">
          <span class="material-icons resultListListIcon resultListListIconError">block</span>
          <p class="resultListListTitle">{props.name}</p>
        </div>
        <div class="resultListListContents">
          <p class="resultListListContentsErrorTitle">固定文</p>
          {props.cells.map((cell) =>
            <span class="resultListListContentsError">{cell} ,</span>
          )}
        </div>
      </li>
    </>
  );
}

export default ResultList;
