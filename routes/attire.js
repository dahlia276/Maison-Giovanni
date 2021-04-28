const express = require("express");
const router = express.Router();
const Attire = require("../models/Attire");
const fileUpload = require("../configs/cloudinary")
const checkRoles = require('../middleware');
const User = require("../models/User");
const { findOneAndReplace } = require("../models/Attire");
//const Inventory= require('../models/Inventory');

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
    let user
    if(req.session.currentUser) {
     user = await User.findById(req.session.currentUser._id)
    } else {
      user = undefined
    }

    const attireLength = attiresFromDB.length;
    console.log(attiresFromDB);
    res.render("attire-list", { attiresFromDB, attireLength, attireType, user })
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


//Manage Inventory

// router.get("/attire/:attireId/inventory",checkRoles('admin','editor'), async (req,res)=>{
// res.render('inventory', await Attire.findById(req.params.attireId));
// });

// router.post('/attire/:attireId/inventory', checkRoles('admin','editor'), async (req,res)=>{
//   try{
//     const attire= await Attire.findById(req.params.attireId);
//     await Inventory.create({
//       size,
//       color,
//       quantity
//     });
//     res.redirect('/attire/')

//   }catch(e){
//     res.render('error');
//   }
// });


//Edit attire info
router.get("/attire/:attireId/edit", checkRoles('admin, editor'),async (req, res) => {
  const attire = await Attire.findById(req.params.attireId);
  res.render("attire-edit", { attire })
});

router.post("/attire/:attireId/edit", fileUpload.single("image"), checkRoles('admin, editor'), async (req, res) => {
  try {
    
    const attireId = req.params.attireId
    const { name, description, fabric, size, price, color, pictureUrl } = req.body;
    const sizeArr = size.split(',');
    let colorArr = color.split(',');
    if(req.file){
     await Attire.findByIdAndUpdate(attireId, {
        name,
        description,
        fabric,
        sizeArr,
        price,
        colorArr,
        pictureUrl: req.file.path
      });
    } else{
     await Attire.findByIdAndUpdate(attireId, {
        name,
        description,
        fabric,
        sizeArr,
        price,
        colorArr
      });
    }
  
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