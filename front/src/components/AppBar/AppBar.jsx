import React from "react";
import "./AppBar.css";
import { useHistory } from "react-router-dom";

export default function AppBar() {
  const history = useHistory();

  const historyHandler = (value) => {
    if (value === "/") {
      history.push("/");
    }

    if (value === "registrtion") {
      history.push("/registrtion");
    }
    if (value === "login") {
      history.push("/login");
    }
    if (value === "profile") {
      history.push("/profile");
    }
  };

  return (
    <div class="topnav">
      <a onClick={() => historyHandler("/")} class="active">
        Cinder
      </a>
      <a a onClick={() => historyHandler("registrtion")} class="">
        Регистрация
      </a>
      <a a onClick={() => historyHandler("login")} class="">
        Login
      </a>
      <a a onClick={() => historyHandler("profile")} class="">
        Профиль
      </a>
    </div>
  );
}
