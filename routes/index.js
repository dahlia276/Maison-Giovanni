const express = require('express');
const router  = express.Router();
function requireLogin(req,res, next){
  if(req.session.currentUser){
    next();
  } else{
    res.redirect('/login');
  }
}

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/about-us", (req,res)=> {
  res.render("About-us");
});

/*router.get("/custom", (req,res)=> {
  res.render("custom-form");
});*/

module.exports = router;
