import "../../components/Header/header.scss";
import logo from "../../assets/Logo/Logo-brainflix.svg";
import searchIcon from "../../assets/Logo/Icon-search.svg";
import uploadIcon from "../../assets/Logo/Icon-upload.svg";
import userImg from "../../assets/Images/Mohan-muruge.jpg";
import "./../Header/header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="header__section">
      <div className="play__logo">
        <Link to="/">
          <img className="paybutton" src={logo} alt="play" />
        </Link>
      </div>

      <div className="search__bar">
        <div>
          <img
            className="search__logo"
            src={searchIcon}
            alt="magnifyingGlass"
          />
          <input
            className="search__box"
            type="name"
            placeholder="Search"
          ></input>
        </div>
      </div>
      <div className="uploadbtn--user">
        <div className="uploadbtn">
          <div>
            <Link className="uploadbtn__link" to="/upload">
              <img className="upload__logo" src={uploadIcon} alt="plus sign" />{" "}
              UPLOAD
            </Link>
          </div>
        </div>

        <div>
          <img className="user__img--mohan" src={userImg} alt="user" />
        </div>
      </div>
    </section>
  );
};

export default Header;
