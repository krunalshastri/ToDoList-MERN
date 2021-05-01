const express = require("express");
const mongoose = require("mongoose");
const dotEnv = require("dotenv").config();
const itemRouter = require("./Routes/Item_Route");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());


//Connect the mongoose
mongoose.connect(process.env.ATLAS_URL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useFindAndModify', false);

if(process.env.NODE_ENV === "production"){
  app.use(express.static("Frontend/build"));
}

app.use("/todoItems", itemRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, function () {
  console.log(`Server is running on ${PORT}`);
});




