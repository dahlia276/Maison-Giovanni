const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");
const User = require("../models/User");
const Attire = require("../models/Attire");

router.post("/cart/:attireId/add", async (req,res)=> {
  const userId = req.session.currentUser._id;
  const attireId = req.params.attireId;
  const user = await User.findById(userId);
  const attire = await Attire.findById(attireId);
  const currentCart = await Cart.findOne({ user });

  if (currentCart) {
    //update the cart
    await Cart.findByIdAndUpdate(currentCart._id, {
      $push: { items: attire  }
    })
  } else {
      await Cart.create({
        user,
        items: [attire]
      })
  }
   
  res.redirect(`/attire/${attireId}`);
});


//view shopping cart
router.get("/shopping-cart", async (req, res) => {
  res.render("shopping-cart");
});



module.exports = router;