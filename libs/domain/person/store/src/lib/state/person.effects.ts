import { map, switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Person, PersonDataService, PersonEntity, PersonUtilService } from '@zsport/api';

import * as personActions from './person.actions';

@Injectable()
export class PersonEffects {
    public addPerson = createEffect(() =>
        this.actions$.pipe(
            ofType(personActions.addPerson),
            switchMap((action) =>
                this.personDataService.add$(this.personUtilService.convertEntityToModel(action.person, false)).pipe(
                    map((personModel) => {
                        return personActions.addPersonSuccess({
                            person: this.personUtilService.convertModelToEntity(personModel) as PersonEntity,
                        });
                    })
                )
            )
        )
    );
    public listPersons = createEffect(() =>
        this.actions$.pipe(
            ofType(personActions.listPersons),
            switchMap(() =>
                this.personDataService.list$().pipe(
                    map((personModels) => {
                        return personActions.listPersonsSuccess({
                            persons: personModels.map(
                                (personModel) =>
                                    this.personUtilService.convertModelToEntity(personModel) as PersonEntity
                            ),
                        });
                    })
                )
            )
        )
    );
    public loadPerson = createEffect(() =>
        this.actions$.pipe(
            ofType(personActions.loadPerson),
            switchMap((action) =>
                this.personDataService.load$(action.uid).pipe(
                    map((personModel) => {
                        return personActions.loadPersonSuccess({
                            person: personModel as Person,
                        });
                    })
                )
            )
        )
    );
    public updatePerson = createEffect(() =>
        this.actions$.pipe(
            ofType(personActions.updatePerson),
            switchMap((action) =>
                this.personDataService.update$(this.personUtilService.convertEntityToModel(action.person, false)).pipe(
                    map((personModel) => {
                        return personActions.updatePersonSuccess({
                            person: {
                                id: personModel.uid || '',
                                changes: this.personUtilService.convertModelToEntity(personModel) as PersonEntity,
                            },
                        });
                    })
                )
            )
        )
    );

    public constructor(
        private actions$: Actions,
        private personDataService: PersonDataService,
        private personUtilService: PersonUtilService
    ) {}
}
