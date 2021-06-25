import React from "react";
import "./AppBar.css";
import { useHistory } from "react-router-dom";
import SignOut from '../Signout/Signout';

export default function AppBar() {
  const history = useHistory();

  const historyHandler = (value) => {
    if (value === "/") {
      history.push("/");
    }

    if (value === "register") {
      history.push("/register");
    }
    if (value === "login") {
      history.push("/login");
    }
    if (value === "profile") {
      history.push("/profile");
    }
    if (value === "logout") {
      history.push("/logout");
    }
  };
  

  return (
    <div class="topnav">
      <a onClick={() => historyHandler("/")} class="active">
        Cinder
      </a>
      <a a onClick={() => historyHandler("register")} class="">
        Регистрация
      </a>
      <a a onClick={() => historyHandler("login")} class="">
        Login
      </a>
      {/* <a a onClick={() => historyHandler("logout")} class="">
      Logout <SignOut />
      </a> */}
      <a a onClick={() => historyHandler("profile")} class="">
        Профиль
      </a>
    </div>
  );
}
