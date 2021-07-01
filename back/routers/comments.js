const { Router } = require('express');
const User = require('../models/user');
const Film = require('../models/film');
const router = Router();

router.post('/comments', async (req, res) => {
  const {user, comment, date, film} = req.body;
  const filmComment = {
    user: req.session.user.id,
    date: new Date().toLocaleString(),
    comment: comment,
  }
  const userComment = {
    date: new Date().toLocaleString(),
    comment: comment,
    film: film,
  }
  const currUser = await User.findById(req.session.user.id)
  currUser.comments.push(userComment);
  currUser.save();
  const currFilm = await Film.findOne({idKP: film})
  currFilm.comments.push(filmComment);
  currFilm.save();
  res.sendStatus(200);
});

module.exports = router;
