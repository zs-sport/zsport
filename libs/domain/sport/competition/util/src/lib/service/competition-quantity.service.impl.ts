import { Injectable } from '@angular/core';
import { CompetitionQuantityService, EntityQuantityEnum } from '@zsport/api';

@Injectable()
export class CompetitionQuantityServiceImpl extends CompetitionQuantityService {
    public updateGroup(competitionId: string, groups: any): any {
        let competitionGroup = groups[EntityQuantityEnum.COMPETITION]
            ? { ...groups[EntityQuantityEnum.COMPETITION] }
            : {};

        const categoryProperty = competitionGroup[competitionId || ''] || 0;

        competitionGroup[competitionId || ''] = categoryProperty + 1;

        return competitionGroup;
    }
}
