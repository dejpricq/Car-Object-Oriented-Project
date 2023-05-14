// let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
// myFirstVehicle.honk(); // "Beep."

// let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
// myFirstVehicle.toString(); // "The vehicle is a Honda Monster Truck from 1999."

class Vehicle {
    constructor(make,model,year){
        this.make = make;
        this.model = model; 
        this.year = year;
    }
    honk() {
        return "Beep.";
    }
    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
}

// Part Two
// let myFirstCar = new Car("Toyota", "Corolla", 2005);
// myFirstCar.toString(); // "The vehicle is a Toyota Corolla from 2005."
// myFirstCar.honk();     // "Beep."
// myFirstCar.numWheels;  // 4

class Car extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 4;
    }
}

// let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

// myFirstMotorcycle.toString();
// // "The vehicle is a Honda Nighthawk from 2000."

// myFirstMotorcycle.honk();     // "Beep."
// myFirstMotorcycle.revEngine(); // "VROOM!!!"
// myFirstMotorcycle.numWheels;  // 2

class Motorcycle extends Vehicle {
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 2;
    }
    revEnging(){
        return "VROOM!!!";
    }
}

class Garage {
    constructor(capacity){
        this.vehicles=[];
        this.capacity= capacity;
    }
    add(newVehicle) {
        if(!(newVehicle instanceof Vehicle)){
            return "Only vehicles are allowed in here!";
        }
        if (this.vehicles.length >= this.capacity){
            return "Sorry, we're full.";
        }
        this.vehicles.push(newVehicle){
            return "Vehicle added!";
        }
        }
    }