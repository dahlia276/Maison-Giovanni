const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/about-us", (req,res)=> {
  res.render("about-us");
});

router.get("/custom", (req,res)=> {
  res.render("custom-form");
});

module.exports = router;
