const { Router } = require('express');
const Test = require('../models/test');
const router = Router();
const User = require('../models/user');


router.get('/test', async (req, res)=>{
  const test = await Test.findOne();
   res.json(test);

  
})

router.post('/userupdate', async (req, res)=> {
const {id, username, userLastName, date, email,  nickname, sex} = req.body;
await User.findByIdAndUpdate(id, {username, userLastName, birthday:date, email, nickname, sex});

const updatedUser = {
  _id: id,
  username,
  email,
  userLastName,
  birthday: date,
  nickname,
  sex
}

console.log(updatedUser);

res.json(updatedUser);

 })


module.exports = router;
