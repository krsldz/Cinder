const { Router } = require('express');
const Test = require('../models/test');
const router = Router();
const User = require('../models/user');

router.get('/test', async (req, res) => {
  const test = await Test.findOne();
  res.json(test);
});

module.exports = router;
