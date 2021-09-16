 const router = require("express").Router();
 const isLoggedIn = require("../middleware/isLoggedIn");
const User = require("../models/User.model");
  
  // /* GET home page */
  router.get("/", (req, res, next) => {
    let user
    if(req.session.user){
      user = true
    }else{
      user = false
    }
   res.render("index", {user});

 });


 router.get("/profile", isLoggedIn, (req, res, next) =>{

  User.findById(req.user._id)
  .populate('favorites')
  .then((user) => {
    res.render("profile", {user: user});
  })
 

})
  
   module.exports = router;