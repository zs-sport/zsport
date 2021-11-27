import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { PersonEntity } from '@zsport/api';

export const addPerson = createAction('[Person] Add Person', props<{ person: PersonEntity }>());

export const addPersonFail = createAction('[Person] Add Person Fail', props<{ error: Error }>());

export const addPersonSuccess = createAction('[Person] Add Person Success', props<{ person: PersonEntity }>());

export const changeNewEntityButtonEnabled = createAction(
    '[Person Admin] Change new Entity Button Enabled',
    props<{ enabled: boolean }>()
);

export const clearPersons = createAction('[Person] Clear Persons');

export const deletePerson = createAction('[Person] Delete Person', props<{ personId: string }>());

export const deletePersonFail = createAction('[Person] Delete Person Fail', props<{ error: Error }>());

export const deletePersonSuccess = createAction('[Person] Delete Person Success', props<{ personId: string }>());

export const listPersons = createAction('[Person] List Persons');

export const listPersonsFail = createAction('[Person] List Persons FAIL', props<{ error: Error }>());

export const listPersonsSuccess = createAction('[Person] List Persons Success', props<{ persons: PersonEntity[] }>());

export const listPersonsByCategoryId = createAction(
    '[Persons] List Persons By Category Id',
    props<{ categoryId: string }>()
);

export const listPersonsByCategoryIdSuccess = createAction(
    '[Persons] List Persons By Category Id Success',
    props<{ persons: PersonEntity[] }>()
);

export const loadPerson = createAction('[Person] Load Person', props<{ uid: string }>());

export const loadPersonFail = createAction('[Person] Load Person FAIL', props<{ error: Error }>());

export const loadPersonSuccess = createAction('[Person] Load Person Success', props<{ person: PersonEntity }>());

export const selectPerson = createAction('[Person] Select Person', props<{ personId: string }>());

export const setSelectedPersonId = createAction('[Person Admin] Set Selected Person Id', props<{ personId: string }>());

export const updatePerson = createAction('[Person] Update Person', props<{ person: PersonEntity }>());

export const updatePersonFail = createAction('[Person] Update Person Fail', props<{ error: Error }>());

export const updatePersonSuccess = createAction(
    '[Person] Update Person Success',
    props<{ person: Update<PersonEntity> }>()
);
