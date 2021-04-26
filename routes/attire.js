  const express = require("express");
  const router = express.Router();
  const Book = require("../models/Attire");
  const fileUpload = require("../configs/cloudinary");
  const Attire = require("../models/Attire");
    
  router.get("", async(req,res) => {
    res.render("");
  });


  //View all attires
  router.get("/attire/:type", async (req, res) => {
  try { 
 /// const attiresFromDB = await Attire.find();
    const attireType= req.params.type;
    const attiresFromDB = await Attire.find({ type: attireType});
   
    const attireLength= attiresFromDB.length;
    console.log(attiresFromDB);
    res.render("attire-list", { attiresFromDB, attireLength})
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