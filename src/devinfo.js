import Header from './header';
import gradient1 from './image/gradient-1.png'
import gradient2 from './image/gradient-2.png'
import gradient3 from './image/gradient-3.png'
import gradient4 from './image/gradient-4.png'

const Devinfo = () => {
  return(
    <div className="AppDevinfo">
      <Header />
      <main className="devinfoMain">
        <div className="devinfo">
          <div className="devinfoContents">
            <h2 className="devinfoH2">Open Data Linter 開発者向け情報</h2>
            <h3 className="devinfoH3" id="api">API 情報</h3>
            <p className="devinfoP24">
              <code className="devinfoCode">curl -X POST -F file=@./sample.csv -H 'Content-Type:multipart/form-data' https://opendatalinter.volare.site</code>
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
            <pre className="devinfoPre">
              List[Check]
            </pre>
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
                Linter の<a href="https://github.com/volare-all/open-data-linter" target="_blank" rel="noopener noreferrer" className="footerLink">ソースコード</a>を公開しています
                <ul>
                  <li>
                    issue の起票や commit お待ちしてます
                  </li>
                </ul>
              </li>
              <li>
                各項目のチェック方法も<a href="https://volare-all.github.io/open-data-linter-docs/" target="_blank" rel="noopener noreferrer" className="footerLink">ドキュメント</a>として公開してます
              </li>
            </ul>
            <h3 className="devinfoH3" id="excel">Excel Add-in</h3>
            <ul>
              <li>
                <a href="https://drive.google.com/file/d/1d-ZxsRDnStGkzOBG4q1-vfL5vgknj1RK/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="footerLink">
                  Excel Onlineでのアドインのインストール方法
                </a>
                <ul className="devinfoUl">
                  <li>
                    デスクトップ版のExcelを持っていない方でも，無料で使えるExcel Onlineを使用してExcel Add-inをお試しいただけます．
                  </li>
                  <li>
                    評価版のため，インストールには少しお手間がかかります．こちらのリンクに手順書を用意しておりますので，ぜひご確認いただき，お試しください．
                  </li>
                </ul>
              </li>
              <li>
                <a href="https://drive.google.com/file/d/1d-ZxsRDnStGkzOBG4q1-vfL5vgknj1RK/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="footerLink">
                  デスクトップ版Excelでのアドインのインストール方法
                </a>
                <ul className="devinfoUl">
                  <li>
                    Excel WindowsやExcel macOSでアドインを動かすことも可能です．下のmanifest.xmlが必要です．予め保存しておいてください．
                  </li>
                  <li>
                    <a href="https://docs.microsoft.com/en-us/office/dev/add-ins/testing/create-a-network-shared-folder-catalog-for-task-pane-and-content-add-ins#share-a-folder" target="_blank" rel="noopener noreferrer" className="footerLink">
                      Excel on Windowsでのアドインのインストール方法
                    </a>
                  </li>
                  <li>
                    <a href="https://docs.microsoft.com/en-us/office/dev/add-ins/testing/sideload-an-office-add-in-on-ipad-and-mac#sideload-an-add-in-on-excel-or-word-on-ipad-using-macos-catalina" className="footerLink">
                      Excel on macOSでのアドインのインストール方法
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="https://github.com/clockvoid/opendatalinter-office-add-in/blob/main/manifest-opendataliter.xml" target="_blank" rel="noopener noreferrer" className="footerLink">
                  manifest.xmlへのリンク
                </a>
              </li>
            </ul>
          </div>
          <div className="devinfoSidebar">
            <a href="#api" className="devinfoSidebarLink">API情報</a>
            <a href="#oss" className="devinfoSidebarLink">Open Data linter OSS</a>
            <a href="#excel" className="devinfoSidebarLink">Excel Add-in</a>
          </div>
        </div>
        <div className="devinfoImageContainer">
          <img src={gradient4} alt="" className="mainImageGradient4"/>
          <img src={gradient3} alt="" className="mainImageGradient3"/>
          <img src={gradient2} alt="" className="mainImageGradient2"/>
          <img src={gradient1} alt="" className="mainImageGradient1"/>
        </div>
      </main>
      <footer className="footer">
        <p className="footerText">
          総務省から提供されている
          <a href="https://www.soumu.go.jp/main_content/000723626.pdf" target="_blank" rel="noopener noreferrer" className="footerLink">機械判読可能な統計表の統一ルール</a>
          を基に形式をチェックしています
        </p>
      </footer>
    </div>
  )
}

export default Devinfo;
