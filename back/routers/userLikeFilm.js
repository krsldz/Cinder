const { Router } = require('express');
const router = Router();
const Like = require('../models/like');
const SuperLike = require('../models/superlike');


router.get('/superlikedFilm', async (req, res)=>{
  const result = await SuperLike.find({id:req.session.user.id});
  
   res.json(result);

  
})

router.post('/superlikedFilm', async(req,res)=>{
  let newArr = [];
  const result = req.body;
  console.log(req.session.user.id);
  console.log(req.body);
  newArr.push(result);
  
 
  let newSuperLikesFilms = await SuperLike.create({
  id: req.session.user.id,
  movie: newArr,

})
 

  
  
  
  res.json(result);



  
  
  


  
})


router.get('/likedFilm', async (req, res)=>{
  const result = await Like.find({id:req.session.user.id});
  
   res.json(result);

  
})

router.post('/likedFilm', async(req,res)=>{
  let newArr = [];
  const result = req.body;
  console.log(req.session.user.id);
  console.log(req.body);
  newArr.push(result);
  
  
 
   let newLikesFilms = await Like.create({
      id: req.session.user.id,
      movie: newArr,

    })
    

  
  
  res.json(result);
  

  
  
  


  
})

module.exports = router;
