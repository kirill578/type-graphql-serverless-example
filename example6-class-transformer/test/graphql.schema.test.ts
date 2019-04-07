import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { createSandbox, SinonSandbox } from 'sinon';
import { createTestClient } from 'apollo-server-testing';
import { getIntrospectionQuery } from 'graphql';
const chaiJestSnapshot = require('chai-jest-snapshot');
import {server, TheContainer} from "../src/main";

chai.use(chaiAsPromised);
chai.use(chaiJestSnapshot);

describe('graph ql schema', function() {
    let query: any;
    let sandbox: SinonSandbox;

    before(function() {
        chaiJestSnapshot.resetSnapshotRegistry();
    });

    beforeEach(function() {
        chaiJestSnapshot.configureUsingMochaContext(this);
        TheContainer.snapshot();
        sandbox = createSandbox();
        query = createTestClient(server as any).query;
    });

    afterEach(function() {
        sandbox.restore();
        TheContainer.restore();
    });

    it('graph ql schema match', async () => {
        const res = await query({ query: getIntrospectionQuery() });
        // @ts-ignore
        return chai.expect(res.data).to.matchSnapshot();
    });
});
