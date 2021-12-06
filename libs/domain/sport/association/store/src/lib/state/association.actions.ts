import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { AssociationEntity } from '@zsport/api';

export const addAssociation = createAction(
    '[Association] Add Association',
    props<{ association: AssociationEntity }>()
);

export const addAssociationFail = createAction('[Association] Add Association Fail', props<{ error: Error }>());

export const addAssociationSuccess = createAction(
    '[Association] Add Association Success',
    props<{ association: AssociationEntity }>()
);

export const noAction = createAction('[Association] No Action');

export const changeNewEntityButtonEnabled = createAction(
    '[Association Admin] Change new Entity Button Enabled',
    props<{ enabled: boolean }>()
);

export const clearAssociations = createAction('[Association] Clear Associations');

export const deleteAssociation = createAction('[Association] Delete Association', props<{ associationId: string }>());

export const deleteAssociationFail = createAction('[Association] Delete Association Fail', props<{ error: Error }>());

export const deleteAssociationSuccess = createAction(
    '[Association] Delete Association Success',
    props<{ associationId: string }>()
);

export const listAssociations = createAction('[Association] List Associations');

export const listAssociationsFail = createAction('[Association] List Associations FAIL', props<{ error: Error }>());

export const listAssociationsSuccess = createAction(
    '[Association] List Associations Success',
    props<{ associations: AssociationEntity[] }>()
);

export const listAssociationsByCategoryId = createAction(
    '[Competition] List Associations By Category Id',
    props<{ categoryId: string }>()
);

export const listAssociationsByCategoryIdSuccess = createAction(
    '[Competition] List Associations By Category Id Success',
    props<{ associations: AssociationEntity[] }>()
);

export const loadAssociation = createAction('[Association] Load Association', props<{ uid: string }>());

export const loadAssociationFail = createAction('[Association] Load Association FAIL', props<{ error: Error }>());

export const loadAssociationSuccess = createAction(
    '[Association] Load Association Success',
    props<{ association: AssociationEntity }>()
);

export const selectAssociation = createAction('[Association] Select Association', props<{ associationId: string }>());

export const setSelectedAssociationId = createAction(
    '[Association Admin] Set Selected Association Id',
    props<{ associationId: string }>()
);

export const updateAssociation = createAction(
    '[Association] Update Association',
    props<{ association: AssociationEntity }>()
);

export const updateAssociationFail = createAction('[Association] Update Association Fail', props<{ error: Error }>());

export const updateAssociationSuccess = createAction(
    '[Association] Update Association Success',
    props<{ association: Update<AssociationEntity> }>()
);
