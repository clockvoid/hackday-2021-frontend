import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const scrollTop = () => {
  return Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
};

const Header = () => {
  const [open, isSetOpen] = useState(false)
  const [top, isSetTop] = useState(true)

  const onScroll = () => {
    const position = scrollTop()
    if (position >= 60) {
      isSetTop(false)
    } else {
      isSetTop(true)
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", onScroll)
    return () => document.removeEventListener("scroll",onScroll)
  })

  const scrollStyle = top ? null : { backgroundColor: "#F3F2ED", borderBottom: "1px solid rgba(0, 0, 0, 0.12)"}

  return(
    <header className="header" style={scrollStyle}>
      <div className="headerInner">
        <h1 className="headerLogoWrapper">
          <Link to="/" className="headerLogo">
            Open Data Linter
          </Link>
        </h1>
        <div className="headerLinkWapper">
          <Link to="/" className="headerLink">形式チェック</Link>
          <Link to="/devinfo" className="headerLink">開発者向け情報</Link>
        </div>
        <div className="headerLinkWapperMobile">
          <button className="headerLinkbuttonMobile" onClick={() => {isSetOpen(!open)}}>
            <span className="material-icons-outlined">menu</span>
          </button>
          {open ? <div className="headerDropDownWapper">
            <Link to="/" className="headerLinkDropDown" onClick={() => {isSetOpen(!open)}}>形式チェック</Link>
            <Link to="/devinfo" className="headerLinkDropDown" onClick={() => {isSetOpen(!open)}}>開発者向け情報</Link>
          </div> : null}
        </div>
      </div>
    </header>
  )
}

export default Header;
