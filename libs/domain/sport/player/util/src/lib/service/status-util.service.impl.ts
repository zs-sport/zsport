import { Status, StatusUtilService } from '@zsport/api';

export class StatusUtilServiceImpl extends StatusUtilService {
    public getStatuses(categoryName: string): Status[] {
        return this.statuses[categoryName];
    }
}
