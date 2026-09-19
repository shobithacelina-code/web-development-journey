const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

const newTask = document.createElement("li");

const taskTextElement = document.createElement("span");
taskTextElement.textContent = taskText;

const deleteButton = document.createElement("button");
deleteButton.textContent = "Delete";

taskTextElement.addEventListener("click", function () {
    taskTextElement.classList.toggle("completed");
});
deleteButton.addEventListener("click", function () {
    newTask.remove();
});

newTask.appendChild(taskTextElement);
newTask.appendChild(deleteButton);
taskList.appendChild(newTask);

    taskInput.value = "";
});