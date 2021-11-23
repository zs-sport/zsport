import { Dictionary } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AssociationEntity, ASSOCIATION_FEATURE_KEY } from '@zsport/api';

import { associationAdapter, AssociationPartialState, State } from './association.reducer';

const { selectAll, selectEntities } = associationAdapter.getSelectors();

export const getAssociationState = createFeatureSelector<AssociationPartialState, State>(ASSOCIATION_FEATURE_KEY);

export const getAssociationError = createSelector(getAssociationState, (state: State) => state.error);

export const getAssociationLoading = createSelector(getAssociationState, (state: State) => state.loading);

export const getSelectedId = createSelector(getAssociationState, (state: State) => state.selectedId || '');

export const isNewEntityButtonEnabled = createSelector(
    getAssociationState,
    (state: State) => state.isNewEntityButtonEnabled
);

export const selectAssociationEntities = createSelector(getAssociationState, selectEntities);

export const selectAllAssociation = createSelector(getAssociationState, selectAll);

export const selectSelectedAssociation = createSelector(
    selectAssociationEntities,
    getSelectedId,
    (associationEntities, selectedAssociationID) => associationEntities[selectedAssociationID]
);

export const selectAssociationsByCategoryId = () =>
    createSelector(selectAllAssociation, (associations: AssociationEntity[], props: any) =>
        associations.filter((association) => association.category && association.category.uid === props.categoryId)
    );

export const selectAssociationById = () =>
    createSelector(
        selectAssociationEntities,
        (associationEntities: Dictionary<AssociationEntity>, props: any) => associationEntities[props.uid]
    );
