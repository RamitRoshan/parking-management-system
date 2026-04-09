const express = require("express");
const configureDB = require("./src/config/db");

require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();

configureDB();


//start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})