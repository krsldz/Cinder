import React from "react";
import "./AppBar.css";
// import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Link,
  NavLink
} from "react-router-dom";


export default function AppBar() {

  const user = useSelector(state => state.user)
  

  return (
       <nav>
      <div className="topnav">
          <Link to="/">Cinder</Link>
          <div className="" id="navbarNav">
            <ul className="">
              {
                user ?
                <>
                  <li className="">
                    <NavLink exact to="/logout" className="">
                      Выйти
                    </NavLink>
                  </li>
                  
                  <li className="nav-item">
                    <NavLink exact to="/profile" className="">
                      Личный кабинет
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink exact to="/test" className="">
                      Тест
                    </NavLink>
                  </li>
                </>
                :
                <>
                  <li className="">
                    <NavLink exact to="/login" className="">
                      Войти
                    </NavLink>
                  </li>
                </>
              }
            </ul>
          </div>
        </div>
    </nav>
  );
}
