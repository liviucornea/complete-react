// you can run this file in terminal using: tsc decorator.ts &&  node decorator.js
// this is a proof of DECORATOR design pattern and NOT decorator feature in Typescript
// @ts-ignore
abstract class Car {
    public description: string | undefined ;
    public getDescription(): string  {
        // @ts-ignore
        return this.description;
    }
    public abstract cost(): number;
}
class ModelS extends Car {
    public description = 'ModelS';
    public cost(): number {
        return 70000;
    }
}
class ModelX extends Car {
    public description = 'ModelX';
    public cost(): number {
        return 80000;
    }
}
// decorator is here
abstract class CarOptions extends Car {
    decoratedCar: Car | undefined;
    public abstract getDescription(): string;
    public abstract cost(): number
}
class EnhancedAutoPilot extends CarOptions  {
    decoratedCar: Car;
    constructor(car: Car) {
        super();
        this.decoratedCar = car;
    }
    public  getDescription(): string {
        return this.decoratedCar.getDescription() + ' , Enhanced Autopilot';
    }
    public cost(){
        return this.decoratedCar.cost() + 5000;
    }
}

class RearFacingSeats extends CarOptions  {
    decoratedCar: Car;
    constructor(car: Car) {
        super();
        this.decoratedCar = car;
    }
    public  getDescription(): string {
        return this.decoratedCar.getDescription() + ' , Rear Facing Seatst';
    }
    public cost(){
        return this.decoratedCar.cost() + 7000;
    }
}

let myTesla: any;
myTesla = new ModelS();
console.log('My Tesla before enhancement is ' + myTesla.getDescription());
console.log('Cost of my car is  ' + myTesla.cost());
myTesla = new EnhancedAutoPilot(myTesla);
console.log('My Tesla after first enhancement is' + myTesla.getDescription());
console.log('Cost of my car is  ' + myTesla.cost());
myTesla = new RearFacingSeats(myTesla);
console.log('My Tesla after second enhancement is' + myTesla.getDescription());
console.log('Cost of my car is  ' + myTesla.cost());