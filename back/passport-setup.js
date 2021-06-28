const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('./models/user');
var findOrCreate = require('mongoose-findorcreate')

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
  await User.findById(id, function (err, user) {
    done(err, user);
  });
});

passport.use(new GoogleStrategy({
  clientID: '790091612101-38llcepj7n85ku345pn560jgv191gupo.apps.googleusercontent.com',
  clientSecret: 'qYSiDgvNN0_H-5azmEazk_hG',
  callbackURL: 'http://localhost:8080/auth/google/callback',
  passReqToCallback: true
},
  async function (req, accessToken, refreshToken, profile, cb) {
    // console.log(profile)
    const defaultUser = {
      username: profile.name.givenName,
      email: profile.emails[0].value,
      profileFotos: profile.photos[0].value,
      googleId: profile.id
    }
    const user = await User.findOne({ googleId: profile.id })
    if (user) {
      req.session.user = {
        id: user._id,
        name: user.name,
      }
      // return res.json({ _id: user._id, name: user.username })
      return cb(null, user && user[0])
    } else {
      const user = await User.create({
        username: profile.name.givenName,
        email: profile.emails[0].value,
        profileFotos: profile.photos[0].value,
        googleId: profile.id,
      })
      req.session.user = {
        id: user._id,
        name: user.name,
      }
      // return res.json({ _id: user._id, name: user.username })
      return cb(null, user && user[0])
    }
  }

));
