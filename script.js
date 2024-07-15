const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

let tasks = [];

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        tasks.push({ text: taskText, completed: false });
        taskInput.value = '';
        renderTasks();
    }
});

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';
        
        const span = document.createElement('span');
        span.textContent = task.text;
        span.addEventListener('click', () => {
            task.completed = !task.completed;
            renderTasks();
        });
        
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.className = 'edit';
        editButton.addEventListener('click', () => {
            const newTaskText = prompt('Edit task:', task.text);
            if (newTaskText) {
                tasks[index].text = newTaskText;
                renderTasks();
            }
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete';
        deleteButton.addEventListener('click', () => {
            tasks.splice(index, 1);
            renderTasks();
        });
        
        li.appendChild(span);
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}
