const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const path = require('path');
const User = require('./models/user');
const { connect } = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');

const PORT = 8080;
const DB_CONNECT = 'mongodb://localhost:27017/cinder';


const testRouter = require('./routers/test');
const authRouter = require('./routers/auth');




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
);

app.use(morgan('dev'));
app.use(cors({
  origin: true,
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/auth', authRouter);
app.use('/api/v1', testRouter);

app.listen(PORT, () => {
  console.log('server started!');
  connect(
    DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('BASE is OK!!!')
  );
});
