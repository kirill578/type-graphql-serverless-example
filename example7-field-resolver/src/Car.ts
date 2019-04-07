import {ID, Field, ObjectType}
    from 'type-graphql';

@ObjectType()
export class Car {
    @Field(() => ID)
    id: string;

    @Field()
    make: string;

    @Field()
    weight: number;
}