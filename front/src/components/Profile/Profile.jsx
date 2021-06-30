import React from 'react';
import axios from "axios";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
// import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import ShareButton from "../ShareButton/ShareButton";
import TabPanel from "../LikedFilmsList/LikedFilmsList";
import "./Profile.css";
import SvgIconsColor from "../FooterIcons/FooterIcons";
import { editUserThunk } from "../../redux/actions/user";

axios.defaults.withCredentials = true;

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },

  formControl: {
    margin: theme.spacing(3),
  },

  but: {
    color: "purple",
    border: "2px solid purple",
  },
}));

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);


 function Profile() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [editUserFlag, setEditUserFlag] = useState(false);

  const [userUpdate, setUserUpdate] = useState({
    username: user.username || '',
    userLastName: user.userLastName || '',
    date: user.birthday || '',
    email: user.email || '',
    // password: "",
    nickname: user.nickname || '',
    sex: user.sex || '',
    id: user?._id,
  }); 

  const [drag, setDrag] = useState(false);

  const classes = useStyles();

  function dragStartHandler(e) {
    e.preventDefault();
    setDrag(true);
  }
  function dragLeaveHandler(e) {
    e.preventDefault();
    setDrag(false);
  }
  function onDropHandler(e) {
    e.preventDefault();
    let files = [...e.dataTransfer.files];
    const formData = new FormData();
    formData.append("file", files[0]);

    axios.post("http://localhost:8080/api/v1/fotos", formData);

    setDrag(false);
  }

  const changeHandler = (e) => {
    e.persist();
    setUserUpdate((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandl = (e) => {
    e.preventDefault();
    dispatch(editUserThunk(userUpdate))
  };

  console.log(userUpdate);

  return (
    <div>
      <div className="twoComp">
        <div className="divProfile">
          <h4>Изменить личные данные</h4>
          <div>
            {drag ? (
              <div
                onDragLeave={(e) => dragStartHandler(e)}
                onDragStart={(e) => dragLeaveHandler(e)}
                onDragOver={(e) => dragStartHandler(e)}
                onDrop={(e) => onDropHandler(e)}
              >
                Отпустите фото, чтобы его загрузить
              </div>
            ) : (
              <div
                onDragLeave={(e) => dragStartHandler(e)}
                onDragStart={(e) => dragLeaveHandler(e)}
                onDragOver={(e) => dragStartHandler(e)}
              >
                Перетащите сюда фото, чтобы его загрузить
              </div>
            )}
          </div>

          <Button type="submit" variant="outlined" color="primary" onClick={() => setEditUserFlag(!editUserFlag)}>
          {editUserFlag ? 'Скрыть редактирование' : 'Редактировать профиль'}
              </Button>

          {editUserFlag && <form
            onSubmit={submitHandl}
            className={classes.root}
            noValidate
            autoComplete="off"
          >
            <FormControl component="fieldset" className={classes.formControl}>
              <div>
                <TextField
                  onChange={changeHandler}
                  name="username"
                  id="outlined-textarea"
                  label="Ваше имя"
                  multiline
                  variant="outlined"
                  value={userUpdate.username}
                />
              </div>

              <TextField
                onChange={changeHandler}
                name="userLastName"
                id="outlined-textarea"
                label="Ваша фамилия"
                multiline
                variant="outlined"
                value={userUpdate.userLastName}
              />

              <div>
                <TextField
                  onChange={changeHandler}
                  id="outlined-textarea"
                  name="email"
                  // value={userSignUp.email}
                  label="Электронная почта"
                  multiline
                  variant="outlined"
                  className={classes.text}
                  value={userUpdate.email}
                />
              </div>
              <div>
                <TextField
                  onChange={changeHandler}
                  id="date"
                  name="date"
                  label="день рождение"
                  type="date"
                  // defaultValue="1995-05-24"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={userUpdate.date}
                />
              </div>
              <div>
                <TextField
                  onChange={changeHandler}
                  id="outlined-textarea"
                  name="nickname"
                  label="Ник нейм"
                  multiline
                  variant="outlined"
                  value={userUpdate.nickname}
                />
              </div>

              <RadioGroup aria-label="quiz" name="sex" onChange={changeHandler}>
                <FormControlLabel
                  value="мужской"
                  control={<Radio />}
                  label="Мужской"
                  checked={userUpdate.sex === 'мужской' && 'checked'}
                />
                <FormControlLabel
                  value="женский"
                  control={<Radio />}
                  label="Женский"
                  checked={userUpdate.sex === 'женский' && 'checked'}
                />
                <FormControlLabel
                  value="не указано"
                  control={<Radio />}
                  label="Не указано"
                  checked={userUpdate.sex === 'не указано' && 'checked'}
                />
              </RadioGroup>

              <Button type="submit" variant="outlined" className={classes.but}>
                Продолжить
              </Button>
            </FormControl>
          </form>}

          <ShareButton />
        </div>
        <TabPanel />
      </div>
      <hr />
      <footer>
        <SvgIconsColor />
      </footer>
    </div>
  );
}

export default React.memo(Profile);
