import {ID, Field, InputType}
    from 'type-graphql';

@InputType()
export class Car {
    @Field(() => ID)
    id: string;

    @Field()
    make: string;

    @Field()
    weight: number;
}


