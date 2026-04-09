const express = require("express");
const morgan = require("morgan");
const configureDB = require("./src/config/db");


require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();

configureDB();

//Middleware
app.use(express.json());
app.use(morgan("dev"));



// Routes
const slotRoutes = require("./src/routes/slot.routes");
const ticketRoutes = require("./src/routes/ticket.routes");


// Routes
app.use("/api/slots", slotRoutes);
app.use("/api/tickets", ticketRoutes);

// Testing route
app.get("/", (req, res) => {
  res.send("Parking Management System API");
});


//start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})