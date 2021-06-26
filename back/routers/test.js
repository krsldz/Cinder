const { Router } = require('express');
const Test = require('../models/test');
const router = Router();


router.get('/test', async (req, res)=>{
  console.log('sasasasasasasa');
  const test = await Test.findOne();
  console.log(test);
   res.json(test);

  
})


module.exports = router;
