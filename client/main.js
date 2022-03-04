document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };

document.getElementById("fortuneButton").onclick = function () {
    axios.get("http://localhost:4000/api/fortune/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };



const goalBtn =  document.getElementById("goal-submit")
const updateBtn = document.getElementById("update-button")
const deleteBtn = document.getElementById("delete-button")

const goalIpt = document.getElementById("goal-input")
const updateIpt = document.getElementById("update-input")
const deleteIpt = document.getElementById("delete-input")

goalBtn.addEventListener("submit", () => {
    axios.post("http://localhost:4000/api/goals")
        .then(function (res) {
           
        })
})

updateBtn.addEventListener("submit", () => {
    axios.put("http://localhost:4000/api/goals/:id")
        .then(function(res) {
            
        })
})
deleteBtn.addEventListener("submit", () => {
    axios.put("http://localhost:4000/api/goals/:id")
        .then(function(res) {
            
        })
})
