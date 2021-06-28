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
import Typography from "@material-ui/core/Typography";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Link } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import { useState, useEffect } from "react";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Checkbox from "@material-ui/core/Checkbox";
import axios from "axios";
axios.defaults.withCredentials = true;

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 125,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    minWidth: 125,
    border: "5px solid #802bb1",
    borderRadius: "5px",
    boxShadow: theme.shadows[1],
    padding: theme.spacing(2, 4, 3),
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 10,
  },
  pos: {
    marginBottom: 2,
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
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = useState();
  const [showsecond, setShowsecond] = useState(false);
  const [show, setShow] = useState(false);
  const [second, setSecond] = useState(true);
  const [base, setBase] = useState({});
  // console.log(base);
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
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  // console.log(value);

  const handlesetShow = () => {
    setShowsecond(true);
  };
  const handleShow = () => {
    setShow(true);
  };
  const secondShow = () => {
    setSecond(false);
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Тест
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
            <h2 id="spring-modal-title">Пройти тест</h2>
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
                          Вопрос
                        </Typography>
                        <Typography variant="body2" component="p">
                          <p>Жанр</p>
                          <br />
                          <RadioGroup
                            aria-label="Variant"
                            name="Variant"
                            value={value}
                            onChange={handleChange}
                          >
                            {base?.genre?.map((item) => (
                              <FormControlLabel
                                value={item}
                                control={
                                  <Checkbox
                                    icon={<FavoriteBorder />}
                                    checkedIcon={<Favorite />}
                                    name="checkedH"
                                  />
                                }
                                label={item}
                              />
                            ))}
                          </RadioGroup>
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          variant="contained"
                          color="primary"
                          onClick={secondShow}
                        >
                          Отправить ответ
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
                          Вопрос
                        </Typography>
                        <Typography variant="body2" component="p">
                          <p>Настроение</p>
                          <br />
                          <RadioGroup
                            aria-label="Variant"
                            name="Variant"
                            value={value}
                            onChange={handleChange}
                          >
                            {base?.mood?.map((item) => (
                              <FormControlLabel
                                value={item}
                                control={<Radio />}
                                label={item}
                              />
                            ))}
                          </RadioGroup>
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          variant="contained"
                          color="primary"
                          onClick={handleShow}
                        >
                          Отправить ответ
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
                        Вопрос
                      </Typography>
                      <Typography variant="body2" component="p">
                        <p> С кем?</p>
                        <br />
                        <RadioGroup
                          aria-label="Variant"
                          name="Variant"
                          value={value}
                          onChange={handleChange}
                        >
                          {base?.withWhom?.map((item) => (
                            <FormControlLabel
                              value={item}
                              control={<Radio />}
                              label={item}
                            />
                          ))}
                        </RadioGroup>
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        onClick={handleClose}
                      >
                        Отправить ответ
                      </Button>
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
