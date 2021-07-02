const { Router } = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const Films = require('../models/film')

const router = Router();

router.get('/compilation', (req, res, next) => {

})


router.post('/compilation', async (req, res, next) => {

  let withWhom;

  if (req.body.withWhom == 'С ним/ней') {
    withWhom = 'С ним ней';
  }
  else if (req.body.withWhom == 'Один/одна') {
    withWhom = 'Один одна'
  }
  else {
    withWhom = req.body.withWhom;

  }

  const films = await Films.find();
  console.log(req.body);

  //let {jenre, withWhom, mood} = req.body;
  let firstFilter = films.filter((el) => el.withWom.includes(req.body.withWhom))

  let secondFilter = firstFilter.filter((el) => el.mood.includes(req.body.mood))
  console.log(secondFilter);

  let thirdFilter = secondFilter.filter((el) => el.genre.includes(req.body.jenre))
  console.log(thirdFilter);
  // console.log(secondFilter);
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
