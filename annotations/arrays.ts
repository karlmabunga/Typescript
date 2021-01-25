const carMakers: string[] = ['ford', 'toyota', 'chevy'];

// creating an inital array for strings but no data

const strings: string[] = [];

const dates: Date[] = [new Date(), new Date()];

const carsByMake: string[][] = [
  ['f150'],
  ['corolla'],
  ['camaro']
];

// Help with inference when extracting values

const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values

carMakers.push(200);

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types

const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2020-01-01');
importantDates.push(new Date());
