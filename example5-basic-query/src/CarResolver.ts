import {Query, Resolver} from "type-graphql";
import {injectable} from "inversify";
import {Car} from "./Car";

@Resolver()
@injectable()
export class CarResolver {
    constructor() {}

    @Query(() => Car)
    async getMyCar() {
        const car = new Car();
        car.id = "123456";
        car.make = "Ford";
        car.weight = 6000;
        return car;
    }
}

