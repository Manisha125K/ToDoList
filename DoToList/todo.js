// // Get references to the DOM elements
// const input = document.getElementById('input');
// const addTaskButton = document.getElementById('add_task');
// const todoList = document.getElementById('todo-list');

// // Function to add a new task
// function addTask() {
//     const taskText = input.value.trim(); // Get the input value and trim whitespace

//     // Check if the input is empty
//     if (taskText === '') {
//         alert('Please enter a task!');
//         return;
//     }

//     // Create a new list item
//      const listItem = document.createElement('li');
//      listItem.textContent = taskText;

//     //  Create a delete button for the task
//      const deleteButton = document.createElement('button');
//      deleteButton.textContent = 'Delete';
//      deleteButton.className = 'delete'; // Add class for styling
//      deleteButton.onclick = function() {
//          todoList.removeChild(listItem); // Remove the task from the list
//      };

//     // Append the delete button to the list item
//     listItem.appendChild(deleteButton);
//     // Append the list item to the todo list (unordered list)
//      todoList.appendChild(listItem);
    
//     // Clear the input field
//      input.value = '';
     
     
// }


// // Add event listener to the "Add Task" button
// addTaskButton.addEventListener('click', addTask);

// // Optional: Allow pressing Enter to add a task
// input.addEventListener('keypress', function(event) {
//     if (event.key === 'Enter') {
//         addTask();
//     }
// });
// script.js

// Select the input field, button, and task list elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to add a new task to the list
addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    
    // Ensure the input is not empty
    if (taskText !== "") {
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;
        
        // Add a delete button to each task
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        
        // Append the delete button to the task
        taskItem.appendChild(deleteBtn);
        
        // Append the task to the task list
        taskList.appendChild(taskItem);
        
        // Clear the input field
        taskInput.value = '';

        // Toggle completion on click
        taskItem.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });
        
        // Remove task when delete button is clicked
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent the task from being marked as completed
            taskItem.remove();
        });
    }
});


