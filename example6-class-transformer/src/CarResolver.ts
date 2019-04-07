import {Query, Resolver} from "type-graphql";
import {injectable} from "inversify";
import {Car} from "./Car";
import {plainToClass} from "class-transformer";

@Resolver()
@injectable()
export class CarResolver {
    constructor() {}

    @Query(() => Car)
    async getMyCar() {
        return plainToClass(Car, {
            id: "123456",
            make: "Ford",
            weight: 6000
        });
    }
}

