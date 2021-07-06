const { Router } = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const Films = require('../models/film')

const router = Router();

router.get('/compilation', (req, res, next) => {

})


router.post('/compilation', async (req, res, next) => {

  let wither;
  let genrus = req.body.genre;
  let feeling = req.body.mood;

  if (req.body.withWhom == 'С ним/ней') {
    wither = 'С ним ней';
  }
  else if (req.body.withWhom == 'Один/одна') {
    wither = 'Один одна'
  }
  else {
    wither = req.body.withWhom;

  }

  const films = await Films.find();
  

  //let {jenre, withWhom, mood} = req.body;
  let firstFilter = films.filter((el) => el.genre.includes(req.body.genre))




  let secondFilter = firstFilter.filter((el) => el.mood.includes(req.body.mood))
  console.log(secondFilter);

  let thirdFilter = secondFilter.filter((el) => el.withWom.includes(wither))
  // const thirdFilter = (req, filtrus) => {
  //   for (let i = 0; i < req.length; i++) {
  //     let third = filtrus.filter((el) => el.genre.includes(req[i]));
  //     return third;
  //   }
  // }
  // let result = thirdFilter(req.body.jenre, secondFilter);

  res.json(thirdFilter)

})



module.exports = router;
