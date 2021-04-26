const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");


router.get("/login", (req,res)=> {
  res.render("auth/login");
});

router.post('/login', async (req, res) => {
  const {username, password} = req.body;
  if (username === "" || password === "") {
    res.render("auth/login", 
    {errorMessage: "Indicate username and password"});
    return;
  }

  const user = await User.findOne({username})
  if (user === null) {
    res.render("auth/login", 
    {errorMessage: "Invalid login"}); //if user does not exist
    return;
  }
// check if the user and password match
  if (bcrypt.compareSync(password, user.password)){
    //succesful login
    req.session.currentUser = user;
    res.redirect("/");
    //res.render("index", {user});

  } else { //password doesn't match
    res.render("auth/login", 
    {errorMessage: "Invalid login"}); 
    return;
  }
});


router.get("/signup", (req,res) => {
  res.render("auth/signup");
});

router.post("/signup", async (req,res) => {
  const {username, email, password} = req.body;
  //check for username and passwords beong filled out
  if (username === "" || password === "") {
  res.render("auth/signup", {errorMessage: "Indicate username and password"});
  return;
  }
 //check for password strengh - regular expression
  const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/
  if (passwordRegex.test(password) === false) {
  res.render('auth/signup', 
  { errorMessage: 'Password is too weak' })
  return;
  }

 //check if user already exists
  let user = await User.findOne({username});
  if (user !== null) {
    res.render('auth/signup', 
  { errorMessage: 'Username already exists' })
  return;
  }

  //check if email already exists
  user = await User.findOne({email});
  if (user !== null) {
    res.render('auth/signup', 
  { errorMessage: 'email already exists' })
  return;
  }

 //create user in database
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedPassword = bcrypt.hashSync(password, salt);
  try{
    await User.create({
      username,
      email,
      password: hashedPassword
    });
    res.redirect("/");  //redirecting to main page
  } catch(e){
    res.render('auth/signup', 
    { errorMessage: 'Username already exists' })
    
  }
});

router.post("/logout", (req,res)=> {
  req.session.destroy();
  res.redirect("/");
});


module.exports = router;