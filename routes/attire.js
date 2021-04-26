   const express = require("express");
  const router = express.Router();
  const Attire = require("../models/Attire");
  const fileUpload = require("../configs/cloudinary")

  router.get("", async(req,res) => {
    res.render("");
  });


  //View all attires
  router.get("/attire", async (req, res) => {
  try { 
    const attiresFromDB = await Attire.find();
    console.log(attiresFromDB);
    res.render("attire-list", {attiresFromDB});
  }  catch(e) {
    res.render("error"); 
    console.log(`An error occured ${e}`);
  }
  });

  //Create new attire

  router.get("/attire/create", async(req,res) => {
    res.render("create-attire");
  });

  router.post("/attire/create", fileUpload.single("image"), async(req,res) => {
    const fileOneCloudinary = req.file.path; //file path(url) is on cloudinary
    const {name, description, fabric, size, price,color,pictureUrl} = req.body;
    await Attire.create({
      name,
      description,
      fabric,
      size,
      price,
      color,
      pictureUrl: fileOneCloudinary});
    res.redirect("/attire");
  });


  //Attire details page
  router.get("/attire/:attireId", async (req, res) => {
    const attire = await Attire.findById(req.params.attireId);
    res.render("attire-details", {attire});
  });


  //Edit attire info
  router.get("/attire/:attireId/edit", async (req,res) => {
    const attire = await Attire.findById(req.params.attireId);
    res.render("attire-edit", {attire})
  });

  router.post("/attire/:attireId/edit", async (req,res) => {
  const attireId = req.params.bookId
    const {name, description, fabric, size, price,color,pictureUrl} = req.body;
    await Attire.findByIdAndUpdate(attireId, {
      name,
      description,
      fabric,
      size,
      price,
      color,
      pictureUrl
    });
    res.redirect(`/attire/${attireId}`);
  });


  //Delete attire 
  router.post("/attire/:attireId/delete", async (req,res) => {
    const attireId = req.params.attireId;
    await Attire.findByIdAndDelete(attireId);
    
    res.redirect("/attire")
  });

  module.exports = router; 