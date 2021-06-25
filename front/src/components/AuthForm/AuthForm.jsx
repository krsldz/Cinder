import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import RegisterForm from '../RegisterForm/RegisterForm';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function AuthForm() {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="container">
    <form className={classes.root} noValidate autoComplete="off">
      <h4>Войдите, чтобы выбрать фильм на вечер и не только</h4>
      <div>
        <TextField
          id="outlined-textarea"
          label="Электронная почта"
          multiline
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          id="outlined-textarea"
          label="Пароль"
          multiline
          variant="outlined"
        />
      </div>
      <Button variant="outlined" color="primary">Продолжить</Button>
    </form>
    <p>Еще нет учетной записи?</p><p/> <Link href="#"> Зарегистрируйтесь </Link>
    </div>
  );
}
