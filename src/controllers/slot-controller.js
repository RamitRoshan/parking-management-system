const Slot = require("../models/slot-model");

//create slots
const createSlot = async (req, res) => {
  try {
    const { slotNumber, slotType } = req.body;

    if (!slotNumber || !slotType) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const slot = await Slot.create({ slotNumber, slotType });

    res.status(201).json({
      message: "Slot created successfully",
      slot,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//getting all slots
const getSlots = async (req, res) => {
  try {
    const slots = await Slot.find().sort({ slotNumber: 1 });

    res.status(200).json(slots);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createSlot, getSlots };
