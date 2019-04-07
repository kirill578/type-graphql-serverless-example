import "reflect-metadata";
import {ApolloServer} from "apollo-server-lambda";
import {buildSchemaSync} from 'type-graphql';
import {HelloResolver} from "./helloResolver";


export const server = new ApolloServer({
    schema: buildSchemaSync({
        resolvers: [HelloResolver],
    })
});


export const graphql = server.createHandler();