const express = require("express");
const app = express();
const db = require("./db");
require("dotenv").config();

const bodyParser = require("body-parser");
app.use(bodyParser.json()); //data store in => req.body

const MenuItem = require("./models/MenuItem");

app.get("/", function (req, res) {
  res.send(
    "Welcome to my hotel.... How i can help you ? , we have list of menus"
  );
});

const Personrouter = require("./routes/PersonRoutes");
app.use("/person", Personrouter);

const MenuItemrouter = require("./routes/MenuItemsRoutes");
app.use("/menu", MenuItemrouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("listening on port 3000");
});

// app.get('/chicken', (req, res)=>{
//     res.send('sure sir, i would love to serve chicken')
// })
// app.get('/idli', (req, res)=>{
//     var customized_idli = {
//         name: 'rava idli',
//         size: '10 cm diameter',
//         is_sambhar: true,
//         is_chutney: false
//     }
//     res.send(customized_idli)
// })

// app.post('/person',(req,res)=>{
//     // res.send('person is created')
//     // console.log('post server is created');
// });

// POST route to add a person

// app.post('/person',(req,res) =>{
//     // Assuming the request body contains the person data
//     const data = req.body;

//     // create a new Person document using the Moongose model
//     const newPerson = new Person(data);

//     // save the new Person to the database

//     //Mongoose no longer acepts this callback method to save data in the database rather it uses await async to do it

//     newPerson.save((error,savePerson) =>{
//         if(error){
//             console.log('Error saving person:',error);
//             res.status(500).json({error: 'Internal server error'})
//         }
//         else{
//             console.log('data saved successfully');
//             res.status(200).json(savePerson);
//         }
//     })

// })

// app.post("/person", async (req, res) => {
//   try {
//     // Assuming the request body contains the person data
//     const data = req.body;

//     // create a new Person document using the Mongoose model
//     const newPerson = new Person(data);

//     // save the new Person to the database
//     const response = await newPerson.save();
//     console.log("data saved");
//     res.status(200).json(response);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// // GET method to get the person
// app.get("/person", async (req, res) => {
//   try {
//     const data = await Person.find();
//     console.log("data fetched");
//     res.status(200).json(data);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Internal server Error" });
//   }
// });
// // parametrized API Call
// app.get("/person/:workType", async (req, res) => {
//   try {
//     const workType = req.params.workType;
//     if (workType == "chef" || workType == "waiter" || workType == "manager") {
//       const response = await Person.find({ work: workType });
//       console.log("Data is fetched");
//       res.status(200).json(response);
//     } else {
//       res.status(404).json({ error: "Invalid workType Entered" });
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Internal server Error" });
//   }
// });

// // POST Method to add a Menu Item
// app.post("/menu", async (req, res) => {
//   try {
//     const data = req.body;
//     const newMenu = new MenuItem(data);
//     const response = await newMenu.save();
//     console.log("data saved");
//     res.status(200).json(response);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Internal server Error" });
//   }
// });

// // GET method to get the Menu Items
// app.get("/menu", async (req, res) => {
//   try {
//     const data = await MenuItem.find();
//     console.log("data fetched");
//     res.status(200).json(data);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });
