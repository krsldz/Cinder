import React, { useContext } from "react";
import "./AppBar.css";
// import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";
import logo from "../../images/f3c53784587e4e0cb9154ad3a52b8342 copy.png";
import { useThemeContext } from "../../context/context";

export default function AppBar() {
  const user = useSelector((state) => state.user);

  const { theme, setTheme, anotherThemeSet } = useThemeContext();

  // const [theme, setTheme] = React.useState({
  //   checkedA: true,
  //   checkedB: true,
  // });

  // const handleChange = (event) => {
  //   setTheme({ ...theme, [event.target.name]: event.target.checked });
  // };
  //console.log(theme);
  return (
    <nav>
      <div className={theme ? "topnav" : "topnav2"}>
        <Link to="/">
          CINDER
        </Link>
        <div className="" id="navbarNav">
          <div className="">
            {user ? (
              <>
                <span className="right">
                  <NavLink exact to="/profile" className="">
                    Личный кабинет
                  </NavLink>
                </span>
                <span className="right">
                  <NavLink exact to="/logout" className="">
                    Выйти
                  </NavLink>
                </span>
              </>
            ) : (
              <>
                <span className="">
                  <NavLink exact to="/login" className="">
                    Войти
                  </NavLink>
                </span>
              </>
            )}
            <Switch
              checked={theme.checkedA}
              onChange={anotherThemeSet}
              name="checkedA"
              inputProps={{ "aria-label": "secondary checkbox" }}
              className="right switch  "
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
