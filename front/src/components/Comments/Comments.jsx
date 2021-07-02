import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
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
  const [allComments, setAllComments] = useState([])

  const changeHandler = (e) => {
    e.persist();

    setAddComments((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(id);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/comments/${id}`)
      .then((res) => setAllComments(res.data));
  }, []);

  console.log(allComments);

  const submitHandler = (e) => {
    e.preventDefault();
  // setAllComments(prev => [...prev, addComments])
    axios
      .post('http://localhost:8080/api/v1/comments', addComments)
      .then(res => setAllComments(prev => [...prev, res.data]));
    setAddComments({
      comment:'',
      user:'',
      date: '',
      film: id,
    })
};

console.log(addComments);


  return (
    <div >
      <div>
        {allComments.map((el) => <p><h4>Автор: {el.user}</h4>Дата: {el.date} {el.comment}</p>)}
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
