// Selecting DOM elements
const input = document.querySelector('#input');
const submitButton = document.querySelector('#submit');
const toDoContainer = document.querySelector('#todo-display');
const countDisplay = document.querySelector('#count-display');
const clearButton = document.querySelector('#clear-btn');

// Initializing the to-do list
let toDoList = [];

// Retrieving the to-do list from local storage
if (localStorage.getItem('toDoList')) {
  toDoList = JSON.parse(localStorage.getItem('toDoList'));
}

// Displaying the to-do list on the screen
displayToDoList();

// Adding an event listener to the submit button
submitButton.addEventListener('click', addNewToDo);

// Adding an event listener to the input field to handle submitting with the enter key
input.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    addNewToDo();
  }
});

// Adding an event listener to the clear button
clearButton.addEventListener('click', clearToDoList);

// Function to add a new to-do
function addNewToDo() {
  const toDoText = input.value.trim();
  if (toDoText) {
    const newToDo = {
      id: Date.now(),
      text: toDoText
    };
    toDoList.push(newToDo);
    input.value = '';
    displayToDoList();
    saveToDoList();
  }
}

// Function to display the to-do list on the screen
function displayToDoList() {
  toDoContainer.innerHTML = '';
  toDoList.forEach(function(toDo) {
    const toDoElement = document.createElement('div');
    toDoElement.classList.add('todo');
    toDoElement.innerHTML = `
      <p>${toDo.text}</p>
      <button class="delete-btn" data-id="${toDo.id}">X</button>
    `;
    toDoContainer.appendChild(toDoElement);
  });
  countDisplay.textContent = `You have ${toDoList.length} things to do.`;
}

// Function to delete a to-do
function deleteToDoById(id) {
  toDoList = toDoList.filter(function(toDo) {
    return toDo.id !== id;
  });
  displayToDoList();
  saveToDoList();
}

// Adding an event listener to the delete buttons
toDoContainer.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-btn')) {
    const id = parseInt(event.target.dataset.id);
    deleteToDoById(id);
  }
});

// Function to clear the to-do list
function clearToDoList() {
  toDoList = [];
  displayToDoList();
  saveToDoList();
}

// Function to save the to-do list to local storage
function saveToDoList() {
  localStorage.setItem('toDoList', JSON.stringify(toDoList));
}