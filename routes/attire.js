const express = require("express");
const router = express.Router();
const Attire = require("../models/Attire");
const fileUpload = require("../configs/cloudinary")
const checkRoles = require('../middleware');

router.get("", async (req, res) => {
  res.render("");
});


//View all attires
router.get("/attires/:type", async (req, res) => {
  try {
    
    const attireType = req.params.type;
    let attiresFromDB;
    if (attireType ==='all') {
      attiresFromDB = await Attire.find();
    } else {
      attiresFromDB = await Attire.find({ type: attireType });
    }
    const attireLength = attiresFromDB.length;
    console.log(attiresFromDB);
    res.render("attire-list", { attiresFromDB, attireLength, attireType })
  } catch (e) {
    res.render("error");
    console.log(`An error occured ${e}`);
  }
});

router.get("/attires/:type/attire/:subtype", async (req, res) => {

})

//view ties

//Create new attire

router.get("/attire/create", checkRoles('admin','editor'),async (req, res) => {
  res.render("create-attire");
});

router.post("/attire/create", fileUpload.single("image"), checkRoles('admin','editor'),async (req, res) => {
  const fileOneCloudinary = req.file.path; //file path(url) is on cloudinary
  const { name, description, fabric, size, price, color, pictureUrl } = req.body;
  await Attire.create({
    name,
    description,
    fabric,
    size,
    price,
    color,
    pictureUrl: fileOneCloudinary
  });
  res.redirect("/attire");
});


//Attire details page
router.get("/attire/:attireId", async (req, res) => {
  const attire = await Attire.findById(req.params.attireId);

  res.render("attire-details", { attire });
});


//Edit attire info
router.get("/attire/:attireId/edit", checkRoles('admin, editor'),async (req, res) => {
  const attire = await Attire.findById(req.params.attireId);
  res.render("attire-edit", { attire })
});

router.post("/attire/:attireId/edit",checkRoles('admin, editor'), async (req, res) => {
  try {
    const attireId = req.params.attireId
    const { name, description, fabric, size, price, color, pictureUrl } = req.body;
    const attire = await Attire.findByIdAndUpdate(attireId, {
      name,
      description,
      fabric,
      size,
      price,
      color,
      pictureUrl
    });
    res.redirect(`/attire/${attireId}`);
  } catch (e) {
    console.log(e);
  }
});



//Delete attire 
router.post("/attire/:attireId/delete",checkRoles('admin','editor'), async (req, res) => {
  const attireId = req.params.attireId;
  await Attire.findByIdAndDelete(attireId);

  res.redirect("/attire")
});

module.exports = router;