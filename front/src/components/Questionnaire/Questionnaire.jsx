import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useSpring, animated } from "react-spring"; // web.cjs is required for IE 11 supportъ
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import FormGroup from "@material-ui/core/FormGroup";
import Typography from "@material-ui/core/Typography";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Link, useHistory } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import { useState, useEffect } from "react";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Checkbox from "@material-ui/core/Checkbox";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { initFilmsAC } from "../../redux/actions/filmsCreator";
axios.defaults.withCredentials = true;

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
 
  },
  root: {
    backgroundColor: "#564f6f",
    color: "white",
    border: "1px solid #802bb1",

  },
  paper: {
    backgroundColor: "#4c494c",
    minWidth: 125,
    maxWidth: 800,
    minHeight: 450,
    border: "3px solid #802bb1",
    borderRadius: "10px",
    boxShadow: theme.shadows[1],
    padding: theme.spacing(2, 3, 3),

  },
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    minHeight: "300px",

  },
  title: {
    fontSize: 20,
    color: "white",
    textAlign: "center",


  },
  text:{

  },
  pos: {
    marginBottom: 2,

  },
  button: {
    margin: "0 auto",
    backgroundColor: "#564f6f",

  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

export default function SpringModal() {
  const classes = useStyles();
  const history = useHistory();
  const user = useSelector(state => state.user);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState({
    jenre: "",
    withWhom: "",
    mood: "",
  });
  const [show, setShow] = useState(false);
  const [second, setSecond] = useState(true);
  const [base, setBase] = useState({});

  const dispatch = useDispatch();
  // console.log(base);
  // console.log(value);
  // console.log(base.genre);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/test")
      .then((res) => setBase(res.data));
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setShow(false);
    setSecond(true);
    console.log(value);
    dispatch(initFilmsAC(value));
    // axios.post('http://localhost:8080/api/v1/compilation', value).then(res=>setAllUserFilms(res.data))
    setValue({
      jenre: "",
      withWhom: "",
      mood: "",
    });
  };

  const handleChange = (e) => {
    setValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRedirect = () => {
    history.push('/login')
  }

  const handleShow = () => {
    setShow(true);
  };
  const secondShow = () => {
    setSecond(false);
  };
  // console.log(base);

  return (
    <div>
      <button type="button" className="animated-button" onClick={user ? handleOpen : handleRedirect}>
        Выбрать фильм
      </button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        
        }}
        
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="spring-modal-title">
              {" "}
              Выберете для себя важные параметры фильма{" "}
            </h2>
            <div>
              {second ? (
                <div>
                  {show ? (
                    <Card className={classes.root}>
                      <CardContent>
                        <Typography
                          className={classes.title}
                          color="textSecondary"
                          gutterBottom
                        >
                          Ваше настроение?
                        </Typography>
                        <Typography variant="body2" component="p">
                          <br />
                          <RadioGroup
                            name="mood"
                            aria-label="Variant"
                            onChange={handleChange}
                            className={classes.content}
                          >
                            {base?.mood?.map((item) => (
                              <FormGroup row >
                                <FormControlLabel
                          
                                  value={item}
                                  control={
                                    <Radio
                                      icon={<FavoriteBorder />}
                                      checkedIcon={<Favorite />}
                                      className={classes.text}
                                    />
                                  }
                                  label={item}
                                />
                              </FormGroup>
                            ))}
                          </RadioGroup>
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          variant="contained"
                          onClick={secondShow}
                          className={classes.button}
                        >
                          Далее
                        </Button>
                      </CardActions>
                    </Card>
                  ) : (
                    <Card className={classes.root}>
                      <CardContent>
                        <Typography
                          className={classes.title}
                          color="textSecondary"
                          gutterBottom
                        >
                          Укажите интересующие жанры
                        </Typography>
                        <Typography variant="body2" component="p">
                          <br />
                          <RadioGroup
                            aria-label="Variant"
                            name="jenre"
                            onChange={handleChange}
                            className={classes.content}
                          >
                            {base?.genre?.map((item) => (
                              <FormGroup row>
                                <FormControlLabel
                                  value={item}
                                  control={
                                    <Radio
                                      icon={<FavoriteBorder />}
                                      checkedIcon={<Favorite />}
                                    />
                                  }
                                  label={item}
                                />
                              </FormGroup>
                            ))}
                          </RadioGroup>
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          variant="contained"
                          onClick={handleShow}
                          className={classes.button}
                        >
                          Далее
                        </Button>
                      </CardActions>
                    </Card>
                  )}
                </div>
              ) : (
                <div>
                  {" "}
                  <Card className={classes.root}>
                    <CardContent>
                      <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                      >
                        С кем будете смотреть?
                      </Typography>
                      <Typography variant="body2" component="p">
                        <br />
                        <RadioGroup
                          name="withWhom"
                          aria-label="Variant"
                          onChange={handleChange}
                          className={classes.content}
                        >
                          {base?.withWhom?.map((item) => (
                            <FormGroup row>
                              <FormControlLabel
                                value={item}
                                control={
                                  <Radio
                                    icon={<FavoriteBorder />}
                                    checkedIcon={<Favorite />}
                                  />
                                }
                                label={item}
                              />
                            </FormGroup>
                          ))}
                        </RadioGroup>
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Link to="/game" className="link">
                        <Button
                          size="small"
                          variant="contained"
                          // color="primary"
                          onClick={handleClose}
                          className={classes.button}
                        >
                          Подобрать фильмы
                        </Button>
                      </Link>
                    </CardActions>
                  </Card>
                </div>
              )}
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
