import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { createTestClient } from 'apollo-server-testing';
import {server, TheContainer} from "../src/main";
import {MathService} from "../src/mathService";
import { createSandbox, SinonSandbox, SinonStubbedInstance } from 'sinon';

chai.use(chaiAsPromised);

describe('Car Resolver', () => {
    let sandbox: SinonSandbox;
    let query: any;

    beforeEach(() => {
        query = createTestClient(server as any).query;

        TheContainer.snapshot();
        sandbox = createSandbox();
    });

    describe('Car', () => {
        it('get my car', async () => {

            // language=GraphQL
            const response = await query({ query: `{ 
                    getMyCar {
                        id,
                        make,
                        weight
                    } 
            }` });

            return chai.expect(response.data.getMyCar).to.deep.equal({
                id: '123456',
                make: 'Ford',
                weight: 6000
            });
        });
    });
});
