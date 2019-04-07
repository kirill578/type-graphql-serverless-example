import "reflect-metadata";
import {Args, Field, FieldResolver, InputType, Int, Query, Resolver} from "type-graphql";
import {injectable} from "inversify";
import {Car} from "./Car";
import {plainToClass} from "class-transformer";

@Resolver(() => Car)
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

    @FieldResolver(() => Int)
    async ownerCount() {
        // expensive operation
        return 5;
    }
}

