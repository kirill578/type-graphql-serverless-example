import "reflect-metadata";
import {ApolloServer} from "apollo-server-lambda";
import {buildSchemaSync} from 'type-graphql';
import {HelloResolver} from "./helloResolver";
import lambdaPlayground from "graphql-playground-middleware-lambda";


export const server = new ApolloServer({
    schema: buildSchemaSync({
        resolvers: [HelloResolver],
    }),
    introspection: true
});


export const graphql = server.createHandler();

export const playground = lambdaPlayground({
    endpoint: '/graphql'
});