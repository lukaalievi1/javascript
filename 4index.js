const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 30 },
    { name: 'David', age: 16 },
    { name: 'Eve', age: 22 },
  ];
  
  const adults = people.filter(person => person.age >= 18);
  
  console.log(adults);