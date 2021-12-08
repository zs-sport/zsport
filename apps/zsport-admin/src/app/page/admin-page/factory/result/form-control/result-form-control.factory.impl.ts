import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import { ResultFormControlFactory } from '@zsport/domain/sport/result/form';
import { ControlBase, I18nService, Result } from '@zsport/api';

@Injectable()
export class ResultFormControlFactoryImpl extends ResultFormControlFactory {
    public constructor(private i18nService: I18nService) {
        super();
    }

    public createFormControls$(dataModel: any): Observable<ControlBase<any>[]> {
        return of([
            this.createHiddenControl({
                key: 'uid',
                order: 1,
                type: 'hidden',
                validators: [],
                value: dataModel ? (dataModel as Result).uid : null,
            }),
            this.createHiddenControl({
                key: 'matchId',
                order: 2,
                type: 'hidden',
                validators: [],
                value: dataModel ? (dataModel as Result).eventId : null,
            }),
        ]);
    }
}
