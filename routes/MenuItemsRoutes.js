const express = require("express");
const router = express.Router();

const MenuItem = require("./../models/MenuItem");

// POST Method to add a Menu Item
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newMenu = new MenuItem(data);
    const response = await newMenu.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server Error" });
  }
});

// GET method to get the Menu Items
router.get("/", async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/:taste", async (req, res) => {
  try {
    const datataste = req.params.taste;
    if (datataste == "sour" || datataste == "sweet" || datataste == "spicy") {
      const response = await MenuItem.find({ taste: datataste });
      console.log("data is fetched");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: `taste is not found` });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});
// comment added for testing purpose
module.exports = router;
