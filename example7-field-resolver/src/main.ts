import "reflect-metadata";
import {ApolloServer} from "apollo-server-lambda";
import {buildSchemaSync, useContainer} from 'type-graphql';
import {HelloResolver} from "./helloResolver";
import lambdaPlayground from "graphql-playground-middleware-lambda";
import {Container} from "inversify";
import {CarResolver} from "./CarResolver";

export const TheContainer = new Container({
    autoBindInjectable: true,
    defaultScope: "Singleton",
    skipBaseClassChecks: true,
});

useContainer(TheContainer);

export const server = new ApolloServer({
    schema: buildSchemaSync({
        resolvers: [HelloResolver, CarResolver],
    }),
    introspection: true
});


export const graphql = server.createHandler();

export const playground = lambdaPlayground({
    endpoint: '/graphql'
});