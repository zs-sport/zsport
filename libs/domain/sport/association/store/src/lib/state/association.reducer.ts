import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { ASSOCIATION_FEATURE_KEY, AssociationEntity } from '@zsport/api';

import * as associationActions from './association.actions';

export interface State extends EntityState<AssociationEntity> {
    isNewEntityButtonEnabled: boolean;
    selectedId?: string;
    loading: boolean;
    error?: string | null;
}

export interface AssociationPartialState {
    readonly [ASSOCIATION_FEATURE_KEY]: State;
}

export const associationAdapter: EntityAdapter<AssociationEntity> = createEntityAdapter<AssociationEntity>({
    selectId: (entity: AssociationEntity): string => entity.uid || '',
});

export const initialState: State = associationAdapter.getInitialState({
    isNewEntityButtonEnabled: true,
    loading: false,
    error: null,
    selectedAssociationId: null,
});

export const associationReducer = createReducer(
    initialState,
    on(associationActions.addAssociationSuccess, (state, { association }) =>
        associationAdapter.addOne(association as AssociationEntity, state)
    ),
    on(associationActions.changeNewEntityButtonEnabled, (state, { enabled }) => ({
        ...state,
        isNewEntityButtonEnabled: enabled,
    })),
    on(associationActions.selectAssociation, (state, { associationId }) => ({
        ...state,
        loading: false,
        error: null,
        selectedAssociationId: associationId,
    })),
    on(associationActions.updateAssociationSuccess, (state, { association }) =>
        associationAdapter.updateOne(association, state)
    ),
    on(associationActions.deleteAssociationSuccess, (state, { associationId }) =>
        associationAdapter.removeOne(associationId, state)
    ),
    on(associationActions.listAssociationsSuccess, (state, { associations }) =>
        associationAdapter.upsertMany(associations as AssociationEntity[], state)
    ),
    on(associationActions.listAssociationsByCategoryIdSuccess, (state, { associations }) =>
        associationAdapter.upsertMany(associations, state)
    ),
    on(associationActions.loadAssociationSuccess, (state, { association }) =>
        associationAdapter.upsertOne(association as AssociationEntity, state)
    ),
    on(associationActions.clearAssociations, (state) => associationAdapter.removeAll(state)),
    on(associationActions.setSelectedAssociationId, (state, { associationId }) => ({
        ...state,
        selectedId: associationId,
    }))
);

export function reducer(state: State | undefined, action: Action) {
    return associationReducer(state, action);
}

export const { selectIds, selectEntities, selectAll, selectTotal } = associationAdapter.getSelectors();
