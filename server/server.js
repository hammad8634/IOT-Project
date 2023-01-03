const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();

connectDB(); //Connecting to database

//Init middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API is running"));

// Defining Routes
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/fan", require("./routes/api/fan"));
app.use("/api/sprinkle", require("./routes/api/waterSprinkle"));
app.use("/api/pump", require("./routes/api/waterPump"));
app.use("/api/user", require("./routes/api/user"));

const PORT = 5001;

app.listen(PORT, () => console.log("Server started"));
