const todoForm = document.getElementById("todoForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const clearButton = document.getElementById("clearButton");
const emptyMessage = document.getElementById("emptyMessage");

let tasks = JSON.parse(localStorage.getItem("todoTasks")) || [];


function saveTasks() {
    localStorage.setItem("todoTasks", JSON.stringify(tasks));
}


function renderTasks() {

    taskList.innerHTML = "";

    tasks.forEach(task => {

        const li = document.createElement("li");

        li.className = "task";

        if (task.completed) {
            li.classList.add("completed");
        }


        const checkbox = document.createElement("input");

        checkbox.type = "checkbox";
        checkbox.className = "task-checkbox";
        checkbox.checked = task.completed;


        checkbox.addEventListener("change", () => {

            task.completed = checkbox.checked;

            saveTasks();
            renderTasks();

        });


        const text = document.createElement("span");

        text.className = "task-text";
        text.textContent = task.text;


        const deleteButton = document.createElement("button");

        deleteButton.className = "delete-button";
        deleteButton.textContent = "✕";


        deleteButton.addEventListener("click", () => {

            tasks = tasks.filter(item => item.id !== task.id);

            saveTasks();
            renderTasks();

        });


        li.appendChild(checkbox);
        li.appendChild(text);
        li.appendChild(deleteButton);

        taskList.appendChild(li);

    });


    updateTaskCount();

    emptyMessage.style.display =
        tasks.length === 0 ? "block" : "none";
}


function updateTaskCount() {

    const total = tasks.length;

    const completed = tasks.filter(
        task => task.completed
    ).length;

    taskCount.textContent =
        `${total} tasks • ${completed} completed`;
}


todoForm.addEventListener("submit", event => {

    event.preventDefault();

    const text = taskInput.value.trim();

    if (text === "") {
        return;
    }


    const newTask = {

        id: Date.now(),

        text: text,

        completed: false

    };


    tasks.push(newTask);

    saveTasks();

    renderTasks();

    taskInput.value = "";

    taskInput.focus();

});


clearButton.addEventListener("click", () => {

    if (tasks.length === 0) {
        return;
    }

    tasks = [];

    saveTasks();

    renderTasks();

});


renderTasks();