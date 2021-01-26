class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep')
  }
}

class Car extends Vehicle {
  private drive(): void {
    console.log('vrooom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle('black');
console.log(vehicle.color);


// const car = new Car();
// car.startDrivingProcess();
// car.honk();