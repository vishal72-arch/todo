function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('taskList');

        const li = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.onclick = () => {
            li.classList.toggle('completed');
        };

        const taskTextNode = document.createTextNode(taskText);

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'Delete';
        deleteButton.onclick = () => {
            taskList.removeChild(li);
        };

        li.appendChild(checkbox);
        li.appendChild(taskTextNode);
        li.appendChild(deleteButton);
        taskList.appendChild(li);

        taskInput.value = ''; // Clear the input field
    }
}
