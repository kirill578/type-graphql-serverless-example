import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import { createSandbox, SinonSandbox, SinonStubbedInstance } from 'sinon';
import {MathService} from "../src/MathService";
import {TheContainer} from "../src/main";

chai.use(chaiAsPromised);

describe('Math Service tests', () => {
    let sandbox: SinonSandbox;
    let mathService: MathService;

    beforeEach(() => {
        TheContainer.snapshot();
        sandbox = createSandbox();

        // no dependencies no need for mocks

        mathService = TheContainer.get(MathService);
    });

    afterEach(function() {
        sandbox.restore();
        TheContainer.restore();
    });

    it('1 + 2 = 3', async () => {
        return chai.expect(await mathService.add(1 , 2)).to.equal(3);
    });

    it('2 + 2 = 4', async () => {
        return chai.expect(await mathService.add(2 , 2)).to.equal(4);
    });

    it('10 + 0 = 10', async () => {
        return chai.expect(await mathService.add(10 , 0)).to.equal(10);
    });
});