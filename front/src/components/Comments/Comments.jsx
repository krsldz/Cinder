import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";


const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  but: {
    color: "purple",
    border: "2px solid purple",
  },
}));

export default function Comments() {
  const classes = useStyles();
  const [userSignIn, setUserSignIn] = useState({
  });

  const changeHandler = (e) => {
    e.persist();
    setUserSignIn((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
   
    let payload = Object.entries(userSignIn).filter((el) =>
      el[1] ? el[1].trim() : el[1]
    );
    if (payload.length) {
      payload = Object.fromEntries(payload);
      // dispatch(signIn(payload, history, from));
    }
  };

  return (
    <div className="divReg">
      <div>
        <form
          onSubmit={submitHandler}
          className={classes.root}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              id="outlined-textarea"
              label="Комментарий"
              name="text"
              onChange={changeHandler}
              value={userSignIn.email}
              multiline
              variant="outlined"
            />
          </div>
          <Button type="submit" variant="outlined" className={classes.but}>
            Отправить
          </Button>
        </form>
      </div>
    </div>
  );
}
