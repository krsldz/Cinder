const express = require('express');
const session = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo');
const path = require('path');
const User = require('./models/user');
const { connect } = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const fileUpload = require('express-fileupload');
const multer = require('multer');
const storage = require('./controlers/uploaders')
require('./passport-setup');

const PORT = 8080;
const DB_CONNECT = 'mongodb://localhost:27017/cinder';


const testRouter = require('./routers/test');
const authRouter = require('./routers/auth');
const fotosRouter = require('./routers/foto');


const app = express();

app.use(
  session({
    secret: 'kukuruza_v_banke',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 60000 * 60,
    },
    store: MongoStore.create({ mongoUrl: DB_CONNECT }),
  })
)


app.use(morgan('dev'));
app.use(cors({
  origin: true,
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload())
app.use('/uploads', express.static('uploads'))

app.use('/api/v1/auth', authRouter);
app.use('/api/v1', testRouter);
app.use('/api/v1', fotosRouter);

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: 'http://localhost:3000/login', successRedirect: 'http://localhost:3000/login/success' }),
  function (req, res) {
    res.redirect('http://localhost:3000/');
  });

  isUserAuthenticated = (req, res, next) => {
    if (req.user) {
      next();
    } else {
      res.status(401).send("You must login first!");
    }
  };

app.get('auth/user', isUserAuthenticated, (req, res) => {
  res.json (req.user)
})

app.use(passport.initialize());
app.use(passport.session());


app.listen(PORT, () => {
  console.log('server started!');
  connect(
    DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('BASE is OK!!!')
  );
});
