const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  console.log("MONGO URI", process.env.MONGO_URI);
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });

    console.log("Connected...");
  } catch (err) {
    console.error(err.message);
    //Exiting the process
    process.exit(1);
  }
};

module.exports = connectDB;
