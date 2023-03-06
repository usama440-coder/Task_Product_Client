import "./Navbar.component.css";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../../slice/language.slice";
import { FaSignOutAlt } from "react-icons/fa";
import { logout } from "../../slice/auth.slice";

const Navbar = () => {
  let dir;
  const language = useSelector((state) => state.language);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  if (language === "ar") {
    dir = "rtl";
  } else {
    dir = "ltr";
  }

  const handleClick = () => {
    language === "en"
      ? dispatch(setLanguage("ar"))
      : dispatch(setLanguage("en"));
  };

  const handleSignout = () => {
    if (user) {
      dispatch(logout());
    }
  };

  return (
    <div className="navbarContainer" dir={dir}>
      <div className="navbarWrapper">
        <h2 className="logo">STORE</h2>
        <div className="links">
          <NavLink to="/" className="navlink">
            {language === "ar" ? (
              <span>لوحة القيادة</span>
            ) : (
              <span>Dashboard</span>
            )}
          </NavLink>
          <NavLink to="/products" className="navlink">
            {language === "ar" ? <span>منتجات</span> : <span>Products</span>}
          </NavLink>
          <button className="navBtn" onClick={handleClick}>
            {language}
          </button>
          <FaSignOutAlt className="signOutIcon" onClick={handleSignout} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
