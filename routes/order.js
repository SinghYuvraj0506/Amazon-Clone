const express = require("express");
const User = require("../models/user");

const router = express.Router();

// first endpoint is used to add orders in the list at /addorder endpoint
router.post("/addorder", async (req, res) => {
  try {
    const user = await User.create({
      user_id: req.body.user_id,
      basket: req.body.basket,
      amount: req.body.amount,
      created: req.body.created,
      payment_id:req.body.payment_id
    });

    const data = {
      user: {
        id: user.id,
        user: user.user_id,
      },
    };

    res.json({success:true});
  } catch (error) {
    res.status(404).json({ success:false, error: error.message });
  }
});

// second endpoint is used to get orders in the list at /getorder endpoint
router.post("/getorder", async (req, res) => {
  try {
    const order = await User.find({ user_id: req.body.user_id })
    if(!order){
      return res.json({success:true,orders:0})
    }

    return res.json({success:true,orders:order.reverse()})

  } catch (error) {
    res.status(404).send({ success:false,error: error.message });
  }
});

module.exports = router;
