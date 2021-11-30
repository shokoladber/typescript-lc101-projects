import Cargo from "./Cargo";
import Astronauts from "./Astronauts";
import Payload from "./Payload";

export default class Rocket{
    name: string;
    totatlCapacityKg: number;
    cargoItems: Cargo[]=[];
    astronauts: Astronauts[]=[];
    constructor(name: string, totalCapacityKg: number){
        this.name = name;
        this.totatlCapacityKg = totalCapacityKg;
    }
    sumMass(items: Payload[]): number{
        let total: number = 0;
        for (let i=0; i<items.length; i++){
            total+= items[i].massKg;
        }
        return total;
    }
}




// sumMass( items: Payload[] ): number
// Returns the sum of all items using each item's massKg property
// currentMassKg(): number
// Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
// canAdd(item: Payload): boolean
// Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
// addCargo(cargo: Cargo): boolean
// Uses this.canAdd() to see if another item can be added.
// If true, adds cargo to this.cargoItems and returns true.
// If false, returns false.
// addAstronaut(astronaut: Astronaut): boolean
// Uses this.canAdd() to see if another astronaut can be added.
// If true, adds astronaut to this.astronauts and returns true.
// If false, returns false.
