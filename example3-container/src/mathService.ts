import { injectable } from 'inversify';

@injectable()
export class MathService {
    constructor() {}

    public async add(a: number, b: number) {
        return a + b;
    }
}
