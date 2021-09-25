import { useState } from "react";

const ResultList = (props) => {
  return (
    <div class="resultList">
      <h2 class="resultListHeadline">形式チェック</h2>
      <ul class="resultListListcontenter">
        <>
          {props.results.map((result) =>
          <ResultItem result={result} />
          )}
        </>
      </ul>
    </div>
  );
}

const ResultItem = (props) => {

  const item = props.result.item;
  const isValid = props.result.is_valid;
  const invalid_contents = props.result.invalid_contents[0];
  const message = invalid_contents !== undefined ? invalid_contents.error_message : undefined;
  const cells = invalid_contents !== undefined ? invalid_contents.invalid_cells : undefined;
  const [accordion, setAccordion] = useState(true)

  if (isValid === true) {
  // ok
    return (
      <li class="resultListListItem">
        <div class="resultListListHeadline">
          <span class="material-icons resultListListIcon resultListListIconChecked">check_circle</span>
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
          <label class="resultListListLabel" onClick={() => {
            setAccordion(!accordion)
          }}>
            <span class="material-icons resultListListIcon resultListListIconError">block</span>
            <p class="resultListListTitle">{item}</p>
            <span class="material-icons">{accordion ? 'expand_more' : 'expand_less'}</span>
          </label>
          <div class="resultListListContents" style={accordion ? ({ display: "block" }) : ({ display: "none" })}>
            <div class="resultListListContentsErrors">
              {cells.map((cell) =>
                <span class="resultListListContentsError">{cell[0]}行{cell[1]}列,</span>
              )}
            </div>
          </div>
        </li>
      );
    }
    return (
      <li class="resultListListItem">
        <label class="resultListListLabel" onClick={() => {
            setAccordion(!accordion)
          }} >
          <span class="material-icons resultListListIcon resultListListIconError">block</span>
          <p class="resultListListTitle">{item}</p>
          <span class="material-icons">{accordion ? 'expand_more' : 'expand_less'}</span>
        </label>
        <div class="resultListListContents" style={accordion ? ({ display: "block" }) : ({ display: "none" })}>
          <p class="resultListListContentsErrorTitle">{message}</p>
          <div class="resultListListContentsErrors">
            {cells.map((cell) =>
              <span class="resultListListContentsError">{cell[0]}行 {cell[1]}列,</span>
            )}
          </div>
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
