const express = require("express");
const cors = require("cors");
const goals = require('./db.json')
let globalID = 2

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["A friend is a present you give yourself.",
					 "A smile is your personal welcome mat.",
					 "Adventure can be real happiness.", 
           "All will go well with your new project.",
           "Any day above ground is a good day.",
  ];

  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
});

app.post("/api/goals", (req,res) => {
  let goal = req.body
  let newGoal = {
    id: globalID,
    goal
  }
  goals.push(newGoal)
  res.status(200).send(newGoal)
  globalID++

})
app.put("/api/goals/:id", () => {

})

app.delete("/api/goals/:id", () => {

})




app.listen(4000, () => console.log("Server running on 4000"));
