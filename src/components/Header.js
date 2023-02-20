import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="header">
      <div className="inner">
        <nav className="nav">
          <span className="header-logo">Sieun Profile</span>
          <ul className="gnb">
            <li>
              <span>Home</span>
            </li>
            <li>
              <span>Profile</span>
            </li>
            <li>
              <span>Skills</span>
            </li>
            <li>
              <span>Portfolio</span>
            </li>
            <li>
              <span>Life</span>
            </li>
            <li>
              <span>Vision</span>
            </li>
          </ul>
          <span className="mobile-bt">
            <FontAwesomeIcon icon={faBars} />
          </span>
        </nav>
      </div>
    </header>
  );
};

export default Header;
