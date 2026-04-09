const mongoose = require("mongoose");

const slotSchema = new mongoose.Schema(
  {
    slotNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    slotType: {
      type: String,
      enum: ["bike", "car", "truck"],
      required: true,
    },
    isOccupied: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Slot", slotSchema);