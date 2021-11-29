import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import { Competition, ControlBase } from '@zsport/api';
import { CompetitionFormControlFactory } from '@zsport/domain/sport/competition/form';

@Injectable()
export class CompetitionFormControlFactoryImpl extends CompetitionFormControlFactory {
    public createFormControls$(dataModel: any): Observable<ControlBase<any>[]> {
        return of([
            this.createHiddenControl({
                key: 'uid',
                order: 1,
                type: 'hidden',
                validators: [],
                value: dataModel ? (dataModel as Competition).uid : null,
            }),
        ]);
    }
}
