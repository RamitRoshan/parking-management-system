const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema(
  {
    ticketNumber: {
      type: String,
      unique: true,
    },
    vehicleNumber: {
      type: String,
      required: true,
    },
    slotNumber: {
      type: Number,
      required: true,
    },
    entryTime: {
      type: Date,
      default: Date.now,
    },
    exitTime: {
      type: Date,
    },
    amount: {
      type: Number,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

// Pre hook to generate ticket number
ticketSchema.pre("save", async function () {
  if (!this.ticketNumber) {
    const lastTicket = await mongoose
      .model("Ticket")
      .findOne()
      .sort({ createdAt: -1 });

    let nextNumber = 1;
    if (lastTicket) {
      nextNumber = parseInt(lastTicket.ticketNumber) + 1;
    }

    this.ticketNumber = String(nextNumber).padStart(4, "0");
  }
});
 
module.exports = mongoose.model("Ticket", ticketSchema);
