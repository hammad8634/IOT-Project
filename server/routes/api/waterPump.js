const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const WaterPump = require("../../models/WaterPump");

// @route    POST api/pump
// @desc     Creating a data entry
// @access   Private
router.post("/", auth, async (req, res) => {
  try {
    const newEntry = new WaterPump({
      ...req.body,
    });

    const entry = await newEntry.save();
    res.json(entry);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// @route    GET api/pump
// @desc     Retrieving data entires
// @access   Private
router.get("", auth, async (req, res) => {
  try {
    const entries = await WaterPump.find().sort({ time: -1 });
    res.json(entries);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
