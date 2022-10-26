const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");
require("dotenv").config();
const stripe = require("stripe")(
  "sk_test_51LGs7JSB9J5x5daOHoR0gMao07Do7bq5aUACm7QlosiAo8vH65oqFKdqGj0CdVE4A8x9EWbcoVh1usFfV9cFL7q700dKAUiqrq"
);

connectToMongo();
let port = process.env.PORT || 80;

const app = express();

app.use(cors());

app.use(express.json()); // it is a middleware used to take req.body in json form

// Available Routes


app.post("/payment/create", async (request, response) => {
  const total = request.query.total;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });

  
  
  // ok now
  response.status(200).send({
      clientSecret: paymentIntent.client_secret,
    });
});


app.use("/orders", require("./routes/order"));


if ( process.env.NODE_ENV == "production") {
  app.use(express.static( "client/build")) ;
}

app.listen(port, () => {
  console.log(`Welcome to the port ${port}`);
});
