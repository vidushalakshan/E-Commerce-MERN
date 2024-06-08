const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const router  = require('./routes')
const cookieParser = require('cookie-parser')

const app = express();
app.use(cors());
app.use(express.json())
app.use("/api", router)

const PORT = 8080 || process.env.PORT;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log('connect to DB');
    console.log("server is running");
  });
});
