import React, { useEffect } from "react";
import "./AppBar.css";
// import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";
import logo from "../../images/Cinder.jpg";
import { getUserFromServer } from "../../redux/actions/user";

export default function AppBar() {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch()

  useEffect(() => {
    if (user === null) {
      dispatch(getUserFromServer());
    }
    
  }, [user, dispatch])

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
        <Link to="/">
          <img src={logo} alt="" srcset="" />
          Cinder
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
              onChange={handleChange}
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
