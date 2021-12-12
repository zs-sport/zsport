import { Injectable } from '@angular/core';
import { Model, Period, ResultEntity, ResultModel, ResultUtilService, StateUtilService } from '@zsport/api';

@Injectable()
export class ResultUtilServiceImpl extends ResultUtilService {
    public convertEntityToModel(result: ResultEntity, isVersion: boolean): ResultModel {
        if (!result.uid) {
            result = this.stateUtilService.addDefaultState(result) as ResultEntity;
            result = this.stateUtilService.addDefaultDates(result) as ResultEntity;
            result = this.stateUtilService.addCreatorId(result) as ResultEntity;
        } else {
            result = this.stateUtilService.updateDates(result) as ResultEntity;
        }

        return {
            ...(result as ResultModel),
        };
    }

    public convertModelToEntity(model: Model): ResultEntity {
        return { ...(model as ResultModel) };
    }

    public resultAsString(periods: Period[]): string {
        let participant1 = 0;
        let participant2 = 0;

        periods.forEach((period) => {
            participant1 = +period.participant1;

            participant2 = +period.participant2;
        });

        return `${participant1} - ${participant2}`;
    }

    public constructor(private stateUtilService: StateUtilService) {
        super();
    }
}
