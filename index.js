//Object can be created using Literal Notation, Constructor Notation and Factory Method

// Syntax for Literal Notation
// const objectName = {
//     key1: value1, // key-value pair
//     key2: value2,
//     ...
// }

const aboutMe = {
    firstName: 'Dolapo',
    middleName: 'Josephine',
    maidenName: 'Ojulawo',
    lastName: 'Dada',
    age: 26,
    sex: 'Female',
    maritalStatus: 'Married'
    
} 

console.log(aboutMe);


const laptop1 = {
  brand: "Hp",
  color: "black",
  numberOfFkeys: 12,
  isTouchScreen: false,
  currentBatteryHealth: 80,
  NumberOfFkeys: function () {
    return this.numberOfFkeys;
  },
  moveForward1: function () {
    return this.currentBatteryHealth;
  },
};
console.log(laptop1);


const laptop = {
    brand: "Samsung",
    color: "black",
    numberOfFkeys: 12,
    isTouchScreen: false,
    currentBatteryHealth: 80,
    NumberOfFkeys: function () {
      return this.numberOfFkeys;
    },
    moveForward: function () {
      this.currentBatteryHealth++;
      return this.currentBatteryHealth;
    },
  };
  console.log(laptop);


const Car1 = {
    brand: "Porsche",
    color: "black",
    numberOfTyres: 4,
    numberOfDoors: 4,
    isAutomatic: true,
    currentDistance: 0,
    displayNumberOfTyres: function () {
      return this.numberOfTyres;
    },
    distance: function () {
      this.currentDistance++;
      return this.currentDistance;
    },
  };
  console.log(Car1);


  const Phone = {
    deviceName: 'A7S',
    phoneNumber: +2349058438858,
    brand: 'UMIDIGI',
    modelAndHardware: 'A7S',
    runMemory: '2GB',
    phoneStorage: '32GB',
    androidVersion: 10,
  }
  console.log(Phone);



  //Constructor Notation
  // Syntax
  //const objectName = new (what you want to create an instance of)
  //new- used when you are creating an instance of a function

  const torchlight = new Object ();
  torchlight.brand = 'LONTOR';
  torchlight.color = 'white';
  torchlight.numberOfFaces = 2;
  console.log(torchlight);

  const tv = new Object ();
  tv.brand = 'Hisense';
  tv.color = 'black';
  tv.inch = '50 inch';
  tv.isTouchScreen = true;
  tv.speakers = 2;
  tv.HDMports = 3;
  tv.screenMirroring = true;
  tv.displayNumberOfSpeakers = function () {
    return this.speakers;
  }
  console.log(tv);



  const Car2 = new Object();
Car2.brand = "Mercedes Benz";
Car2.color = "white";
Car2.numberOfTyres = 4;
Car2.numberOfDoors = 4;
Car2.isAutomatic = false;
Car2.displayNumberOfTyres = function () {
  return this.numberOfTyres;
};

console.log(Car2);


// How do we access object properties and methods?
//Dot Notation and Bracket Notation

//Dot Notation
//Syntax - objectName.key
console.log('The Hisense smart tv has ' + tv.speakers + ' speakers');
console.log('My laptop has ' + laptop.numberOfFkeys + ' F-keys i.e F1 - F12');
console.log("Brand of Car One is " + Car1.brand);
console.log("Brand of Car Two is " + Car2.brand);

//Using Bracket notation
//Syntax - objectName['propertyName'] 
console.log('The Brand of the Android Phone is' + Phone['brand']);
console.log("Color of Car One is " + Car1["color"]);
console.log("Color of Car Two is " + Car2["color"]);


// Accessing Object Methods
// Syntax = objectName.method();

console.log('The Battery Health of the Hp laptop is  ' + laptop1.moveForward1());
console.log('The Current Distance of the Black Porsche Car is ' + Car1.distance());
console.log('The Battery Health of the laptop is ' + laptop.moveForward());
console.log("The number of tyres in Car 1 are " + Car1.displayNumberOfTyres());


// Why do we use the constructor method:

/**
 * Constructor notation can be used as a template or blueprint
 * for creating new objects.
 */

// Using TOYOTA as an Example
// Avensis, Corolla, Rav4, Camry, Highlander

// Common properties & methods a Toyota Car has
/**
 * properties - numberOfTyres, brand, model, numberOfDoors, numberOfSpareTyres, isAutomatic
 * methods - reverse, move forward, accelerate, stop, start
 */

// The function which serves as a blue print for all Toyota cars
function Toyota(model, year, numberOfTyres, isAutomatic, currentDistance) {
  this.numberOfTyres = numberOfTyres;
  this.brand = "Toyota";
  this.model = model;
  this.year = year;
  this.isAutomatic = isAutomatic;
  this.currentDistance = currentDistance;
  (this.accelerate = function () {
    this.currentDistance += 5;
  }),
    (this.displayCurrentDistance = function () {
      return this.currentDistance;
    });
}

/**
 * You create instances of the object using the constructor function.
 * The 'new' keyword followed by a call to the function creates a new object.
 * The properties of each object are given as arguments to the function.
 * You can create multiple objects from a constructor function.
 */

//  an object created from the blue print
let camry = new Toyota("Camry", "2020", 5, true, 0);
console.log(camry);

// an object created from the blue print
let camry2007 = new Toyota("Camry", "2007", 5, false, 1000);
console.log(camry2007);

// an object created from the blue print
let rav42022 = new Toyota("Rav4", "2022", 4, true, 20);
console.log(rav42022);

// accessing object properties using the dot notation
console.log(camry.currentDistance);
console.log(camry2007.currentDistance);
console.log(rav42022.currentDistance);

// accessing object methods using the dot notation
camry.accelerate();
camry2007.accelerate();
rav42022.accelerate();

console.log("After acceleration");
console.log(camry.displayCurrentDistance());
console.log(camry2007.displayCurrentDistance());
console.log(rav42022.displayCurrentDistance());


// NESTED OBJECT using Constructor Notation
function Student(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}
    const chimatara = new Student('Chimatara', 'Kalu', 18);
    const gerald = new Student('Dolapo', 'Dada', 26);
function JambScores(phy, chm, bio, govt, econs, eng, mth, lit, comm) {
    this.PHY = phy;
    this.CHM = chm;
    this.BIO = bio;
    this.GOVT = govt;
    this.ECONS = econs;
    this.ENG = eng;
    this.MTH = mth;
    this.LIT = lit;
    this.COMM = comm;
}
console.log(chimatara);
chimatara.JambScores = new JambScores(80, 70, 90, 0, 0,95,98, 0, 0)
console.log(chimatara);
console.log(chimatara.JambScores);

