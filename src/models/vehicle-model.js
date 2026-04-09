const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema(
  {
    vehicleNumber: {
      type: String,
      required: true,
      unique: true,
    },
    vehicleType: {
      type: String,
      enum: ["bike", "car", "truck"],
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Vehicle", vehicleSchema);
