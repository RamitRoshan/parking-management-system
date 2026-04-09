const Vehicle = require("../models/vehicle-model");
const Slot = require("../models/slot-model");
const Ticket = require("../models/ticket-model");
const calculatePrice = require("../utils/priceCalculator");

const createTicket = async (req, res) => {
  try {
    const { vehicleNumber, vehicleType } = req.body;

    if (!vehicleNumber || !vehicleType) {
      return res.status(400).json({ message: "All fields are required" });
    }

    let vehicle = await Vehicle.findOne({ vehicleNumber });

    if (!vehicle) {
      vehicle = await Vehicle.create({ vehicleNumber, vehicleType });
    }

    const activeTicket = await Ticket.findOne({
      vehicleNumber,
      isActive: true,
    });
    if (activeTicket) {
      return res.status(400).json({
        message: "Vehicle already has an active ticket",
      });
    }

     
    const slot = await Slot.findOne({
      slotType: vehicleType,
      isOccupied: false,
    }).sort({ slotNumber: 1 });

    if (!slot) {
      return res.status(400).json({
        message: "No slot available",
      });
    }
 
    const ticket = await Ticket.create({
      vehicleNumber,
      slotNumber: slot.slotNumber,
    });
 
    slot.isOccupied = true;
    await slot.save();

    res.status(201).json({
      message: "Ticket created successfully",
      ticket,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



const exitVehicle = async (req, res) => {
  try {
    const { vehicleNumber } = req.body;

    if (!vehicleNumber) {
      return res.status(400).json({ message: "Vehicle number required" });
    }

    const ticket = await Ticket.findOne({
      vehicleNumber,
      isActive: true,
    });
    if (!ticket) {
      return res.status(400).json({
        message: "No active ticket found",
      });
    }

 
    const vehicle = await Vehicle.findOne({ vehicleNumber });
    const exitTime = new Date();

  
    const amount = calculatePrice(
      vehicle.vehicleType,
      ticket.entryTime,
      exitTime,
    );

    ticket.exitTime = exitTime;
    ticket.amount = amount;
    ticket.isActive = false;
    await ticket.save();

    //free slot
    const slot = await Slot.findOne({
      slotNumber: ticket.slotNumber,
    });

    slot.isOccupied = false;
    await slot.save();

    res.status(200).json({
      message: "Vehicle exited successfully",
      ticket,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createTicket, exitVehicle };
