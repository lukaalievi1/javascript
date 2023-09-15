// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }

//     return response.json();
//   })
//   .then(data => {
//     const usernames = data.map(user => user.username);
    
//     console.log(usernames);
//   })
//   .catch(error => {
//     console.error('There was a problem with the fetch operation:', error);
//   });





// class Car {
//     constructor(model, company, year) {
//       this.model = model;
//       this.company = company;
//       this.year = year;
//     }
  
//     getCarDetails() {
//       return `Car Details: ${this.year} ${this.company} ${this.model}`;
//     }
//   }
  
//   const myCar = new Car('civic', 'honda', 1994);
//   const carDetails = myCar.getCarDetails();
//   console.log(carDetails);
  





// class Post {
//     constructor(id, title, text) {
//       this.id = id;
//       this.title = title;
//       this.text = text;
//     }
//   }
  
//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then(data => {
//       const posts = data.map(postData => new Post(postData.id, postData.title, postData.body));
  
//       console.log(posts);
//     })
//     .catch(error => {
//       console.error('There was a problem with the fetch operation:', error);
//     });
 





// const people = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 17 },
//     { name: 'Charlie', age: 30 },
//     { name: 'David', age: 16 },
//     { name: 'Eve', age: 22 },
//   ];
  
//   const adults = people.filter(person => person.age >= 18);
  
//   console.log(adults);
  






// class Todo {
//     constructor(id, title, completed) {
//       this.id = id;
//       this.title = title;
//       this.completed = completed;
//     }
//   }
  
//   fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then(data => {
//       const todos = data.map(todoData => new Todo(todoData.id, todoData.title, todoData.completed));
  
//       const completedTasks = todos.filter(todo => todo.completed);
  
//       console.log(completedTasks);
//     })
//     .catch(error => {
//       console.error('There was a problem with the fetch operation:', error);
//     });
  