import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Anime from "../assets/Anime";
import { useState } from "react";

const Header = ({ setPage, setOpen, open }) => {
  const path = process.env.PUBLIC_URL;
  const goTop = () => {
    new Anime(window, {
      prop: "scroll",
      value: -80,
      duration: 500,
    });
    setPage(0);
  };

  // 현재 active인 메뉴의 인덱스
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <header className="header">
      <div className="inner">
        <nav className="nav">
          <div className="header-left" onClick={() => goTop()}>
            <img
              className="header-logo"
              src={`${path}/images/logo.png`}
              alt="logo"
            />
            <span className="header-txt">&nbsp;Park Sieun</span>
          </div>
          <ul className="gnb">
            <li
              onClick={() => {
                setPage(0);
                setActiveIndex(0);
              }}
              className={activeIndex === 0 ? "active" : ""}
            >
              <span>Home</span>
            </li>
            <li
              onClick={() => {
                setPage(1);
                setActiveIndex(1);
              }}
              className={activeIndex === 1 ? "active" : ""}
            >
              <span>Profile</span>
            </li>
            <li
              onClick={() => {
                setPage(2);
                setActiveIndex(2);
              }}
              className={activeIndex === 2 ? "active" : ""}
            >
              <span>Skills</span>
            </li>
            <li
              onClick={() => {
                setPage(3);
                setActiveIndex(3);
              }}
              className={activeIndex === 3 ? "active" : ""}
            >
              <span>Portfolio</span>
            </li>
            <li
              onClick={() => {
                setPage(4);
                setActiveIndex(4);
              }}
              className={activeIndex === 4 ? "active" : ""}
            >
              <span>Life</span>
            </li>
            <li
              onClick={() => {
                setPage(5);
                setActiveIndex(5);
              }}
              className={activeIndex === 5 ? "active" : ""}
            >
              <span>Vision</span>
            </li>
            <li
              onClick={() => {
                setPage(6);
                setActiveIndex(6);
              }}
              className={activeIndex === 6 ? "active" : ""}
            >
              <span>Contact</span>
            </li>
          </ul>
          <span
            className="mobile-bt"
            onClick={() => {
              open ? setOpen(false) : setOpen(true);
            }}
          >
            {open ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </span>
        </nav>
      </div>
    </header>
  );
};

export default Header;
