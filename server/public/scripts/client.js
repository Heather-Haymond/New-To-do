console.log('JS is sourced!');
// When the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded');
  
  // Get DOM elements
  const todoInput = document.querySelector('.center-input');
  const addButton = document.querySelector('.center-button');
  
  // Add event listeners
  addButton.addEventListener('click', handleSubmit);
  todoInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
          handleSubmit(e);
      }
  });

   // Load existing todos
   toDo();
  });
  
  // Handle form submission
  function handleSubmit(event) {
      event.preventDefault();
      
      const todoInput = document.querySelector('.center-input');
      const text = todoInput.value.trim();
      
      if (text) {
          addTodo(text);
          todoInput.value = ''; // Clear input
      }
  }
//GET -> Read
function toDo() {
    // axios call to server
    axios({
      method: "GET",
      url: "/todos",
    })
      .then((response) => {
        console.log("GET /todo response.data", response.data);
        renderTodo(response.data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  } 

  // POST new todo
function addTodo(text) {
  axios.post('/todos', { text: text })
      .then((response) => {
          console.log('Added todo:', response.data);
          toDo(); // Refresh the list
      })
      .catch((error) => {
          console.log('Error adding todo:', error);
      });
}
// DELETE todo
function deleteTodo(id) {
  console.log('Deleting todo with id:', id);
  axios.delete(`/todos/${id}`)
      .then((response) => {
          console.log('Deleted todo');
          toDo(); // Refresh the list
      })
      .catch((error) => {
          console.log('Error deleting todo:', error);
      });
}

// PUT (complete todo)
function completeTodo(id) {
  axios.put(`/todos/${id}`)
      .then((response) => {
          console.log('Completed todo:', response.data);
          toDo(); // Refresh the list
      })
      .catch((error) => {
          console.log('Error completing todo:', error);
      });
}

// Render todos to the page
function renderTodo(todos) {
  const todoList = document.querySelector('#todo-list');
  todoList.innerHTML = ''; // Clear current list
  
  todos.forEach(todo => {
    console.log(todo);
      const li = document.createElement('li');
      
      // Add completed class if todo is complete
      if (todo.isComplete) {
          li.classList.add('completed');
      }
      
      li.innerHTML = `
          <span onclick="completeTodo(${todo.id})">${todo.text}</span>
          <button class="delete" onclick="deleteTodo(${todo.id})">Delete</button>
      `;
      
      todoList.appendChild(li);
  });
}