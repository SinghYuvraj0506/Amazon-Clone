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
    });

    const data = {
      user: {
        id: user.id,
        user: user.user_id,
      },
    };

    res.send(data);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

// second endpoint is used to get orders in the list at /getorder endpoint
router.post("/getorder", (req, res) => {
  try {
    User.find({ user_id: req.body.user_id }, function (err, docs) {
      if (err) {
        return res.status(400).send("User not found");
      } else {
        let myuser = JSON.stringify(docs);

        res.send(myuser);
      }
    });
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

module.exports = router;
