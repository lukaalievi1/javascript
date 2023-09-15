class Todo {
    constructor(id, title, completed) {
      this.id = id;
      this.title = title;
      this.completed = completed;
    }
  }
  
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const todos = data.map(todoData => new Todo(todoData.id, todoData.title, todoData.completed));
  
      const completedTasks = todos.filter(todo => todo.completed);
  
      console.log(completedTasks);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });