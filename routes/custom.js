const express = require('express');
const router  = express.Router();
const Custom = require('../models/Custom');
router.get("/custom", (req,res) => {
  res.render("custom-form");
});

router.post("/custom", async(req,res) => {
  const {name, email, phone} = req.body;
  await Custom.create({
    name,
    email,
    phone});
  res.redirect("/attires/all");
});

module.exports = router;
