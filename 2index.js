class Car {
    constructor(model, company, year) {
      this.model = model;
      this.company = company;
      this.year = year;
    }
  
    getCarDetails() {
      return `Car Details: ${this.year} ${this.company} ${this.model}`;
    }
  }
  
  const myCar = new Car('civic', 'honda', 1994);
  const carDetails = myCar.getCarDetails();
  console.log(carDetails);