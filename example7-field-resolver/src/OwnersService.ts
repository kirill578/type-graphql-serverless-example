import { injectable } from 'inversify';

@injectable()
export class OwnersServiceService {
    constructor() {}

    public async getOwnerCount(id: string, since: number = 1900) {
        let count = 0;
        if (since < 2000)
            count = 2;
        if (since < 2010)
            count = 1;
        if (since < 2015)
            count = 1;
        return count;
    }
}
