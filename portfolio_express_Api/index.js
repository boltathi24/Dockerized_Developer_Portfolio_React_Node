const mongoose = require("mongoose");
const express = require("express")
const bodyParser = require('body-parser');
const DB_Username = process.env.DB_Username; //getting credentials from Environment variables
const DB_Password =process.env.DB_Password;;
const DB_Name = process.env.DB_Name;
const DB_ClusterUri = process.env.DB_ClusterUri;
const DATABASEURI = `mongodb+srv://${DB_Username}:${DB_Password}@${DB_ClusterUri}/${DB_Name}?retryWrites=true&w=majority`;
const port = process.env.PORT;
const router = express.Router()
const app = express()
app.use(bodyParser.json());
mongoose.connect(DATABASEURI, {    //Establishing connection with MongoDB
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("connected to mongo database"))
  .catch((e) => console.error(e));

const form = mongoose.model("records", {   //Creating Form Model
  name: { type: String },
  email: { type: String },
  message: { type: String },
});


app.post('/api/form/insert', async (req, res) => { //Post request to store form data
  response = new Object();
  try {
    var myForm = new form({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,  
    });
    var insertionResponse = await myForm.save()
    if (insertionResponse.name) {
      response.body = { message: 'Hi ' + insertionResponse.name + '! Thanks for Submitting', success: true };
    }
    else {
      response.body = {
        message: "Error while inserting record",
        success: false,
      };
    }
    res.status = 200;
  }
  catch (err) {
    res.status = 400;
    response.body = {
      message: "Exception has occured while processing",
      success: false,
    };
  }
  res.send(response)
})

app.listen(port, host);

module.exports = router


