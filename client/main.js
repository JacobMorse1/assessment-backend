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

//Step 1: Grab the elements

const goalBtn = document.getElementById("goal-submit")
const updateBtn = document.getElementById("update-button")
const deleteBtn = document.getElementById("delete-button")

const goalIpt = document.getElementById("goal-input")
const updateIpt = document.getElementById("update-input")
const deleteIpt = document.getElementById("delete-input")

const form = document.querySelector('form')
const newNameInput = document.getElementById('newNameInput')
const newNameIndex = document.getElementById('NewNameIndex')

//Step 2: Write out the functionality for my element

function setGoal() {
  let newGoal = goalIpt.value
  const body = {
    newGoal // same asnewGoal: "newGoal"
  }

  axios.post("http://localhost:4000/api/goals", body)
      .then((res) => {
        let myGoal = res.data[res.data.length -1]
        alert(`You just submitted ${newGoal} as a new goal!`)

        goalIpt.value = ''
      })
}

function deleteGoal() {
  const delGoal = deleteIpt.value

  axios.delete(`http://localhost:4000/api/delete/${delGoal}`)
      .then(function (res) {

      })
      .catch((err) => {
        console.log(err.response.data)
      })
}

function updateGoal() {
  const goalChange = newNameInput.value
  const indexChange = newIndexIndex.value

  const body = {
    goalChange
  }

  axios.put(`http://localhost:4000/api/edit/${indexChange}`, body)
  .then((res) => {
    alert(`Your users array now contains ${res.data}`)
  })
  .catch((err) => {
    console.log(err)
  })
}



//Step 3: Add an eventlistener to my element

goalBtn.addEventListener("click", setGoal)
updateBtn.addEventListener("click", updateGoal)
deleteBtn.addEventListener("click", deleteGoal)
