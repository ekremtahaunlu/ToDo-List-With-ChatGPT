// Get input and add button elements
var input = document.querySelector("input[type='text']");
var addButton = document.querySelector("button[type='submit']");

// Get ul element to add tasks
var taskList = document.querySelector("ul");

// Add event listener to add button
addButton.addEventListener("click", function (event) {
  event.preventDefault();
  if (input.value.trim() === "") {
    alert("Please enter a task");
    return;
  }
  var newTask = document.createElement("li");
  newTask.innerText = input.value;
  var deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.classList.add("delete");
  newTask.appendChild(deleteButton);
  taskList.appendChild(newTask);
  input.value = "";

  // add event listener to delete button
  deleteButton.addEventListener("click", function (event) {
    event.preventDefault();
    var li = this.parentNode;
    li.parentNode.removeChild(li);
  });
});

// Get all delete buttons
var deleteButtons = document.querySelectorAll(".delete");

// Add event listener to each button
deleteButtons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    event.preventDefault();
    var li = this.parentNode;
    li.parentNode.removeChild(li);
  });
});
