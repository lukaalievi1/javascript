fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json();
  })
  .then(data => {
    const usernames = data.map(user => user.username);
    
    console.log(usernames);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  }); 