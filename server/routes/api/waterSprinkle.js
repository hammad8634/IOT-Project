const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

const WaterSprinkle = require("../../models/WaterSprinkle");

// @route    POST api/sprinkle
// @desc     Creating a data entry
// @access   Private
router.post("/", auth, async (req, res) => {
  try {
    const newEntry = new WaterSprinkle({
      ...req.body,
    });

    const entry = await newEntry.save();
    res.json(entry);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

// @route    GET api/sprinkle
// @desc     Retrieving data entires
// @access   Private
router.get("", auth, async (req, res) => {
  try {
    const entries = await WaterSprinkle.find().sort({ time: -1 });
    res.json(entries);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
