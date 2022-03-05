const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

const users = []

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
  console.log(req.body)
  console.log(req.params)
  console.log(req.query)

  const {newGoal} = req.body

  users.push(newGoal)
  
  res.status(200).send(users)

})

app.delete(`/api/delete/:id`, (req, res) => {
  console.log(req.params)  

  if(+req.params.id) {
    users.splice(req.params.id, 1)
    res.status(200).send(users)
  }else{
    res.status(400).send(`Number doesn't exist`)
  }
})

app.put("/api/edi/:id", (req, res) => {
  console.log(req.params)
  console.log(req.body)

  const {goalChange} = req.body
  const editIndex = +req.params.id

  users[editIndex] = editName

  res.status(200).send(users)
})



app.listen(4000, () => console.log("Server running on 4000"));
