import React, { useContext } from "react";
import "./Navbar.css";
import { navItems, NAV_TITLE } from "../../constants/index";
import { Link } from "react-router-dom"; 
import { ThemeContext } from "../../constants/ThemeContext"; 

function NavOptions(props) {
  return (
    <Link to={props.itemName.toLowerCase()} smooth={true} duration={500}>
      <p>{props.itemName}</p>
    </Link>
  );
}

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext); 

  return (
    <div className={`navbar_container ${theme}`}>
      <div className="navbar_left">
        {NAV_TITLE}
      </div>

      <div className="navbar_right">
        {navItems.map((data, index) => (
          <NavOptions key={data} itemName={data} />
        ))}

        <Link to="/resume" className="no-underline">
          <p>Resume</p>
        </Link>

        <button onClick={toggleTheme} className="theme_toggle_button">
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
