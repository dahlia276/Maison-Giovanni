const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");
const User = require("../models/User");
const Attire = require("../models/Attire");


router.post("/cart/:attireId/add", async (req, res) => {

  if (!req.session.currentUser) {

    res.render("auth/login", 
    {errorMessage: "Login first to see your cart"});
    return;
  };
  const userId = req.session.currentUser._id;
  const attireId = req.params.attireId;
  const user = await User.findById(userId);
  const attire = await Attire.findById(attireId);
  const currentCart = await Cart.findOne({ user });


  if (currentCart) {
    //Update the cart
    await Cart.findByIdAndUpdate(currentCart._id, {
      $push: { items: attire }
    })
  } else {
    await Cart.create({
      user,
      items: [attire]
    })
  }

  res.redirect(`/attire/${attireId}`);
});


//View shopping cart
router.get("/shopping-cart", async (req, res) => {
  const currentUser = await User.findById(req.session.currentUser._id);
  const cart = await Cart.findOne({ user: currentUser }).populate('items');
  let items = [];
  if (cart) {
    items = cart.items;
  }
  console.log(items.length)
  if (!cart) {
    res.render("empty-cart");
    return
  }
  let stringifyItems = JSON.stringify(cart)
  res.render("shopping-cart", { items, stringifyItems });
});


//Delete item from the cart
router.post("/cart/:attireId/remove", async (req, res) => {

  const userId = req.session.currentUser._id;
  const attireId = req.params.attireId;
  const user = await User.findById(userId);
  const currentCart = await Cart.findOne({ user });
  await Cart.findByIdAndUpdate(currentCart._id, {
    $pull: {
      items: attireId
    }
  });
  res.redirect("/shopping-cart")
});

router.get('/checkout', async (req, res) => {

  const currentUser = await User.findById(req.session.currentUser._id);
  const cart = await Cart.findOne({ user: currentUser }).populate('items');
  let items = cart.items
  let stringifyItems = JSON.stringify(cart)
  res.render('checkout', { items, stringifyItems });
})
router.post('/checkout', async (req, res) => {

});

router.get('/confirmation', async (req, res) => {
  res.render('confirmation-checkout')
});
module.exports = router;