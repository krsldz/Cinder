import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
import axios from 'axios'


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

export default function Comments({id}) {
  const classes = useStyles();
  const [addComments, setAddComments] = useState({
    comment:'',
    user:'',
    date: '',
    film: id,
  });

  const changeHandler = (e) => {
    setAddComments((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(id);

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8080/api/v1/comments', addComments)
      .then(console.log);
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
              name="comment"
              onChange={changeHandler}
              value={addComments.comment}
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
