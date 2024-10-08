const express = require("express");
const router = express.Router();

const Person = require("./../models/person");

router.post("/", async (req, res) => {
  try {
    // Assuming the request body contains the person data
    const data = req.body;

    // create a new Person document using the Mongoose model
    const newPerson = new Person(data);

    // save the new Person to the database
    const response = await newPerson.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// GET method to get the person
router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server Error" });
  }
});
// parametrized API Call
router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    if (workType == "chef" || workType == "waiter" || workType == "manager") {
      const response = await Person.find({ work: workType });
      console.log("Data is fetched");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid workType Entered" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server Error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id; //Extract the id from the URL parameter
    const updatedData = req.body; //Updated data for the person

    const response = await Person.findByIdAndUpdate(personId, updatedData, {
      new: true, //Return the updated document
      runValidators: true, //Run Mongoose validation
    });

    if (!response) {
      return res.status(404).json({ error: "Person not found" });
    }
    console.log("data updated successfully");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const personid = req.params.id;
    const response = await Person.findByIdAndDelete(personid);
    if (!response) {
      return res.status(404).json({ error: "Person not found" });
    }
    console.log("data deleted Successfully");
    res.status(200).json({ message: "Person Deleted Succesfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
