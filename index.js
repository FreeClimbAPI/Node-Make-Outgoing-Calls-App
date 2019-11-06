const dotenv = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");
const freeclimbSDK = require("@freeclimb/sdk");

dotenv.config();
const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 80;
const accountId = process.env.ACCOUNT_ID;
const authToken = process.env.AUTH_TOKEN;
const freeclimb = freeclimbSDK(accountId, authToken);
const freeclimb_phone_number = process.env.FREECLIMB_PHONE_NUMBER;
const appId = process.env.APPLICATION_ID;

console.log(`Running outgoing call app on port ${port}`);

// Make an outgoing call when incoming requests on the /sendCall endpoint
app.post("/sendCall", (req, res) => {
  let destination_phone_number = req.body.destination_phone_number;
  var options = {};

  console.log(accountId, authToken, appId);
  // create call using FreeClimb's api
  freeclimb.api.calls.create(
    destination_phone_number,
    freeclimb_phone_number,
    appId,
    options
  );

  res.status(200).json();
});

// Message to be played when an outgoing call is made
// Endpoint /callConnect associated with FreeClimb app's "Call Connect URL"
app.post("/callConnect", (req, res) => {
  // Create Say script to greet caller
  var hello = freeclimb.percl.say("Hello, welcome to FreeClimb!");

  // Add Say script greeting to PerCL script and append to response
  res.status(200).json(freeclimb.percl.build(hello));
});

app.listen(port);
