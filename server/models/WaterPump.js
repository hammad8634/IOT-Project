const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WaterPumpSchema = new Schema({
  temperature: {
    type: Number,
    required: true,
  },
  moisture: {
    type: Number,
    required: true,
  },
  humidity: {
    type: Number,
    required: true,
  },
  time: {
    type: Date,
    deafult: Date.now,
  },
  status: {
    type: Boolean,
    required: true,
  },
});

module.exports = WaterPump = mongoose.model("waterpump", WaterPumpSchema);
