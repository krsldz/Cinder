const { Router } = require('express');
const User = require('../models/user');
const Film = require('../models/film');
const router = Router();

router.post('/comments', async (req, res) => {
  const {user, comment, date} = req.body;
  const filmComment = {
    user: req.session.user.id,
    date: new Date().toLocaleString(),
    comment: comment,
  }
  const userComment = {
    date: new Date().toLocaleString(),
    comment: comment,
  }
  res.json(req.body);
});

module.exports = router;
