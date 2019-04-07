import { Query, Resolver } from 'type-graphql';

@Resolver()
export class HelloResolver {
    constructor(
    ) {}

    @Query(() => String)
    async hello() {
        return 'hello world';
    }
}
