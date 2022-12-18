import { Link } from "react-router-dom";
import Logo from "../assets/iconWhite.png";
import "../styles/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="header">
      <img src={Logo} className="logo" alt="" />

      <nav className="nav">
        <FontAwesomeIcon icon={faEnvelope} beatFade className="ico" />
        <Link className="post k-font" to="/">
          Tous les posts
        </Link>
        <div>
          <FontAwesomeIcon icon={faUserGroup} className="ico" />
        </div>
        <Link className="compte k-font" to="/Compte">
          Mon compte
        </Link>
      </nav>
    </div>
  );
}

export default Header;
