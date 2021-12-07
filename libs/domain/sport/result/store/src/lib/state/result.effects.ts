import { map, switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Result, ResultDataService, ResultModel } from '@zsport/api';

import * as resultActions from './result.actions';

@Injectable()
export class ResultEffects {
    public addResult = createEffect(() =>
        this.actions$.pipe(
            ofType(resultActions.addResult),
            switchMap((action) =>
                this.resultDataService.add$(action.result).pipe(
                    map((resultModel) => {
                        return resultActions.addResultSuccess({
                            result: { ...(resultModel as Result) },
                        });
                    })
                )
            )
        )
    );
    public listResults = createEffect(() =>
        this.actions$.pipe(
            ofType(resultActions.listResults),
            switchMap((action) =>
                this.resultDataService.list$().pipe(
                    map((resultModels) => {
                        return resultActions.listResultsSuccess({
                            results: resultModels.map((resultModel) => ({ ...(resultModel as ResultModel) })),
                        });
                    })
                )
            )
        )
    );
    public loadResult = createEffect(() =>
        this.actions$.pipe(
            ofType(resultActions.loadResult),
            switchMap((action) =>
                this.resultDataService.load$(action.uid).pipe(
                    map((resultModel) => {
                        return resultActions.loadResultSuccess({
                            result: { ...(resultModel as ResultModel) },
                        });
                    })
                )
            )
        )
    );
    public updateResult = createEffect(() =>
        this.actions$.pipe(
            ofType(resultActions.updateResult),
            switchMap((action) =>
                this.resultDataService.update$(action.result).pipe(
                    map((resultModel) => {
                        return resultActions.updateResultSuccess({
                            result: { id: resultModel.uid || '', changes: { ...(resultModel as ResultModel) } },
                        });
                    })
                )
            )
        )
    );

    public constructor(private actions$: Actions, private resultDataService: ResultDataService) {}
}
