import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { createTestClient } from 'apollo-server-testing';
import {server} from "../src/main";

chai.use(chaiAsPromised);

describe('health Resolver', () => {
    let query: any;

    beforeEach(() => {
        query = createTestClient(server as any).query;
    });

    describe('hello', () => {
        it('should return OK', async () => {
            // language=GraphQL
            const response = await query({ query: `{ hello }` });

            return chai.expect(response.data.hello).to.equal('OK');
        });
    });
});
