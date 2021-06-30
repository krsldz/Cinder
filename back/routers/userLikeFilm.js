const { Router } = require('express');
const router = Router();
const Like = require('../models/like');
const SuperLike = require('../models/superlike');


router.get('/superlikedFilm', async (req, res)=>{
  const result = await SuperLike.find();
  
   res.json(result.movie);

  
})

router.post('/superlikedFilm', async(req,res)=>{
  let newArr = [];
  const result = req.body;
  console.log(req.session.user.id);
  console.log(req.body);
  newArr.push(result);
  
  let newSuperLikesFilms = await SuperLike.findOne( {id:req.session.user.id});
  if (newSuperLikesFilms){
    console.log('ti loh');

  let movies =  newSuperLikesFilms.movie.push(result);
  await newSuperLikesFilms.updateOne({movie:movies})
 

  }
  else {
    newSuperLikesFilms = await SuperLike.create({
      id: req.session.user.id,
      movie: newArr,

    })
    
  }
  res.json(result);




  
  
  


  
})


router.get('/likedFilm', async (req, res)=>{
  const result = await Like.find();
  
   res.json(result.movie);

  
})

router.post('/likedFilm', async(req,res)=>{
  let newArr = [];
  const result = req.body;
  console.log(req.session.user.id);
  console.log(req.body);
  newArr.push(result);
  
  let newLikesFilms = await Like.findOne( {id:req.session.user.id});
  if (newLikesFilms){
    console.log('ti loh');

    let movies =  newLikesFilms.movie.push(result);
    await newLikesFilms.updateOne({movie:movies});
    

  }
  else {
    newLikesFilms = await SuperLike.create({
      id: req.session.user.id,
      movie: newArr,

    })
    
  }
  
  
  res.json(result);
  

  
  
  


  
})

module.exports = router;
