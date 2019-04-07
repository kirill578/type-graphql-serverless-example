import { Query, Resolver } from 'type-graphql';
import { injectable } from 'inversify';
import {MathService} from "./mathService";

@Resolver()
@injectable()
export class HelloResolver {
    constructor(
        private mathService: MathService
    ) {}

    @Query(() => String)
    async hello() {
        const result = await this.mathService.add(1, 1);
        return '1 + 1 = ' + result;
    }
}
