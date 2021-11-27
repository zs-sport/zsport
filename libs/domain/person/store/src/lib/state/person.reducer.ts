import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { PERSON_FEATURE_KEY, PersonEntity } from '@zsport/api';

import * as personActions from './person.actions';

export interface State extends EntityState<PersonEntity> {
    isNewEntityButtonEnabled: boolean;
    selectedId?: string;
    loading: boolean;
    error?: string | null;
}

export interface PersonPartialState {
    readonly [PERSON_FEATURE_KEY]: State;
}

export const personAdapter: EntityAdapter<PersonEntity> = createEntityAdapter<PersonEntity>({
    selectId: (model: PersonEntity) => model.uid || '',
});

export const initialState: State = personAdapter.getInitialState({
    isNewEntityButtonEnabled: true,
    loading: false,
    error: null,
    selectedPersonId: null,
});

export const personReducer = createReducer(
    initialState,
    on(personActions.addPersonSuccess, (state, { person }) => personAdapter.addOne(person, state)),
    on(personActions.changeNewEntityButtonEnabled, (state, { enabled }) => ({
        ...state,
        isNewEntityButtonEnabled: enabled,
    })),
    on(personActions.selectPerson, (state, { personId }) => ({
        ...state,
        loading: false,
        error: null,
        selectedPersonId: personId,
    })),
    on(personActions.updatePersonSuccess, (state, { person }) => personAdapter.updateOne(person, state)),
    on(personActions.deletePersonSuccess, (state, { personId }) => personAdapter.removeOne(personId, state)),
    on(personActions.listPersonsSuccess, (state, { persons }) => personAdapter.upsertMany(persons, state)),
    on(personActions.loadPersonSuccess, (state, { person }) => personAdapter.upsertOne(person, state)),
    on(personActions.clearPersons, (state) => personAdapter.removeAll(state)),
    on(personActions.setSelectedPersonId, (state, { personId }) => ({ ...state, selectedId: personId }))
);

export function reducer(state: State | undefined, action: Action) {
    return personReducer(state, action);
}

export const { selectIds, selectEntities, selectAll, selectTotal } = personAdapter.getSelectors();
