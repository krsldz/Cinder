import React from "react";
import "./AppBar.css";
// import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';

export default function AppBar() {
  const user = useSelector((state) => state.user);

  const [theme, setTheme] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setTheme({ ...theme, [event.target.name]: event.target.checked });
  };

  return (
    <nav>
      <div className={theme.checkedA ? "topnav" : "topnav2"}>
        <Link to="/">Cinder</Link>
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
                  <Switch checked={theme.checkedA} onChange={handleChange} name="checkedA"
                   inputProps={{ 'aria-label': 'secondary checkbox' }}/>
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
