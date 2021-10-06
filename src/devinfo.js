import pdf from "./pdf/excel-online-addin.pdf"

const Devinfo = () => {
  return(
    <div className="devinfo">
      <div className="devinfoContents">
        <h2 className="devinfoH2">Open Data Linter 開発者向け情報</h2>
        <h3 className="devinfoH3" id="api">API 情報</h3>
        <p className="devinfoP24">
          <code className="devinfoCode">curl -X POST -F file=@./samples/nb01h0013.csv -H 'Content-Type:multipart/form-data' https://opendatalinter.volare.site</code>
        </p>
        <h4 className="devinfoH4">Reqeust Header</h4>
        <table className="devinfoTable" cellSpacing={0}>
          <thead>
            <tr>
              <th className="devinfoTh">Key</th>
              <th className="devinfoTh">Content</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="devinfoTd">Content-Type</td>
              <td className="devinfoTd">multipart/form-data</td>
            </tr>
          </tbody>
        </table>
        <h4 className="devinfoH4">Request Body</h4>
        <table className="devinfoTable" cellSpacing={0}>
          <thead>
            <tr>
              <th className="devinfoTh">Key</th>
              <th className="devinfoTh">Content</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="devinfoTd">file</td>
              <td className="devinfoTd">form-data</td>
            </tr>
          </tbody>
        </table>
        <h4 className="devinfoH4">Response</h4>
        <p className="devinfoP16">List[Check]</p>
        <h4 className="devinfoH4">Models</h4>
        <p className="devinfoP16 devinfoBold">Check</p>
        <table className="devinfoTable mt8 isBlock" cellSpacing={0}>
          <thead>
            <tr>
              <th className="devinfoTh">Key</th>
              <th className="devinfoTh">Type</th>
              <th className="devinfoTh">Content</th>
              <th className="devinfoTh">備考</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="devinfoTd">no</td>
              <td className="devinfoTd">String</td>
              <td className="devinfoTd">ナンバー</td>
              <td className="devinfoTd">e.g. 1-2</td>
            </tr>
            <tr>
              <td className="devinfoTd">item</td>
              <td className="devinfoTd">String</td>
              <td className="devinfoTd">項目</td>
              <td className="devinfoTd">e.g. １セル１データとなっているか</td>
            </tr>
            <tr>
              <td className="devinfoTd">is_valid</td>
              <td className="devinfoTd">Option[bool]</td>
              <td className="devinfoTd">項目を満たしているかどうか</td>
              <td className="devinfoTd">チェックできなかった場合は null</td>
            </tr>
            <tr>
              <td className="devinfoTd">invalid_contents</td>
              <td className="devinfoTd">List[InvalidContent]</td>
              <td className="devinfoTd">InvalidContent</td>
              <td className="devinfoTd"></td>
            </tr>
          </tbody>
        </table>
        <p className="devinfoP16 devinfoBold">InvalidContent</p>
        <table className="devinfoTable mt8 isMobileBlock" cellSpacing={0}>
          <thead>
            <tr>
              <th className="devinfoTh">Key</th>
              <th className="devinfoTh">Type</th>
              <th className="devinfoTh">Content</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="devinfoTd">error_message</td>
              <td className="devinfoTd">String</td>
              <td className="devinfoTd">エラーメッセージ</td>
            </tr>
            <tr>
              <td className="devinfoTd">invalid_cells</td>
              <td className="devinfoTd">	List[Tuple[Option[int], Option[int]]</td>
              <td className="devinfoTd">不備のあるセルの位置(行, 列)</td>
            </tr>
          </tbody>
        </table>
        <h4 className="devinfoH4">Sample Response</h4>
        <pre className="devinfoPre">
          <code className="devinfoPrecodeWrapper">
            <span className="devinfoPrecode">{'['}</span>
            <span className="devinfoPrecode indent2">{'{'}</span>
            <span className="devinfoPrecode indent3">{'"no": "1-1",'}</span>
            <span className="devinfoPrecode indent3">{'"item": "ファイル形式は CSV となっているか",'}</span>
            <span className="devinfoPrecode indent3">{'"is_valid": true,'}</span>
            <span className="devinfoPrecode indent3">{'"invalid_contents": []'}</span>
            <span className="devinfoPrecode indent2">{'},'}</span>
            <span className="devinfoPrecode indent2">{'{'}</span>
            <span className="devinfoPrecode indent3">{'"no": "1-2",'}</span>
            <span className="devinfoPrecode indent3">{'"item": "１セル１データとなっているか",'}</span>
            <span className="devinfoPrecode indent3">{'"is_valid": true,'}</span>
            <span className="devinfoPrecode indent3">{'"invalid_contents": []'}</span>
            <span className="devinfoPrecode indent2">{'},'}</span>
            <span className="devinfoPrecode indent2">{'{'}</span>
            <span className="devinfoPrecode indent3">{'"no": "1-3",'}</span>
            <span className="devinfoPrecode indent3">{'"item": "数値データは数値属性とし、⽂字列を含まないこと",'}</span>
            <span className="devinfoPrecode indent3">{'"is_valid": false,'}</span>
            <span className="devinfoPrecode indent3">{'"invalid_contents": ['}</span>
            <span className="devinfoPrecode indent4">{'{'}</span>
            <span className="devinfoPrecode indent5">{'"error_message": "数値データに文字が含まれています",'}</span>
            <span className="devinfoPrecode indent5">{'"invalid_cells": [[5, 1], [6, 1]]'}</span>
            <span className="devinfoPrecode indent4">{'},'}</span>
            <span className="devinfoPrecode indent4">{'...'}</span>
            <span className="devinfoPrecode indent3">{']'}</span>
            <span className="devinfoPrecode indent2">{'},'}</span>
            <span className="devinfoPrecode indent2">{'...'}</span>
            <span className="devinfoPrecode">{']'}</span>
          </code>
        </pre>
        <h3 className="devinfoH3" id="oss">Open Data linter OSS</h3>
        <ul className="devinfoUl">
          <li>
            Linter のソースコードを公開している
            <ul>
              <li>
                <a href="https://github.com/volare-all/open-data-linter" target="_blank" rel="noopener noreferrer" className="footerLink">https://github.com/volare-all/open-data-linter</a>
              </li>
            </ul>
          </li>
          <li>issue, pull request お待ちしてます</li>
          <li>
            各項目のチェック方法もドキュメントとして公開してます
            <ul>
              <li>
                <a href="https://github.com/volare-all/open-data-linter/wiki" target="_blank" rel="noopener noreferrer" className="footerLink">wikiへのリンク</a>
              </li>
            </ul>
          </li>
        </ul>
        <h3 className="devinfoH3" id="excel">Excel Add in</h3>
        <ul className="devinfoUl">
          <li>
            <a href="https://github.com/clockvoid/opendatalinter-office-add-in/blob/main/manifest-opendataliter.xml" target="_blank" rel="noopener noreferrer" className="footerLink">
              manifest.xmlへのリンク
            </a>
          </li>
          <li>
            <a href={pdf} download="Excel Onlineへのアドインの導入手順書" className="footerLink">
              Excel Onlineでのアドインのインストール方法
            </a>
          </li>
        </ul>
      </div>
      <div className="devinfoSidebar">
        <a href="#api" className="devinfoSidebarLink">API情報</a>
        <a href="#oss" className="devinfoSidebarLink">Open Data linter OSS</a>
        <a href="#excel" className="devinfoSidebarLink">Excel Add in</a>
      </div>
    </div>
  )
}

export default Devinfo;
