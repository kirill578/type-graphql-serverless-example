import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { createTestClient } from 'apollo-server-testing';
import {server, TheContainer} from "../src/main";
import {MathService} from "../src/mathService";
import { createSandbox, SinonSandbox, SinonStubbedInstance } from 'sinon';

chai.use(chaiAsPromised);

describe('hello Resolver', () => {
    let sandbox: SinonSandbox;
    let query: any;
    let mathService: SinonStubbedInstance<MathService>;

    beforeEach(() => {
        query = createTestClient(server as any).query;

        TheContainer.snapshot();
        sandbox = createSandbox();

        // create mock and register with container
        mathService = sandbox.createStubInstance(MathService);
        TheContainer.bind(MathService).toConstantValue(mathService as any);

    });

    describe('hello', () => {
        it('should return 1 + 1 and whatever the math server returns', async () => {
            mathService.add.resolves(10);

            // language=GraphQL
            const response = await query({ query: `{ hello }` });

            return chai.expect(response.data.hello).to.equal('1 + 1 = 10');
        });
    });
});
