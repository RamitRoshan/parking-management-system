const express = require("express");
const slotRouter = express.Router();

const { createSlot, getSlots } = require("../controllers/slot-controller");
const authMiddleware = require("../middleware/auth");

slotRouter.post("/", authMiddleware, createSlot);
slotRouter.get("/", authMiddleware, getSlots);

module.exports = slotRouter;
