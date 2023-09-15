class Post {
    constructor(id, title, text) {
      this.id = id;
      this.title = title;
      this.text = text;
    }
  }
  
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const posts = data.map(postData => new Post(postData.id, postData.title, postData.body));
  
      console.log(posts);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
 