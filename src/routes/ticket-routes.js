const express = require("express");
const ticketRouter = express.Router();

const {createTicket, exitVehicle} = require("../controllers/ticket-controller");
const authMiddleware = require("../middleware/auth");


ticketRouter.post("/entry", authMiddleware, createTicket);
ticketRouter.post("/exit", authMiddleware, exitVehicle);


module.exports = ticketRouter;

 