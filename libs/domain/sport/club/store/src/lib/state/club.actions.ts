import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { ClubEntity, PlayerEntity } from '@zsport/api';

export const addClub = createAction('[Club] Add Club', props<{ club: ClubEntity }>());

export const addClubFail = createAction('[Club] Add Club Fail', props<{ error: Error }>());

export const addClubSuccess = createAction('[Club] Add Club Success', props<{ club: ClubEntity }>());

export const changeNewEntityButtonEnabled = createAction(
    '[Club Admin] Change new Entity Button Enabled',
    props<{ enabled: boolean }>()
);

export const clearClubs = createAction('[Club] Clear Clubs');

export const deleteClub = createAction('[Club] Delete Club', props<{ clubId: string }>());

export const deleteClubFail = createAction('[Club] Delete Club Fail', props<{ error: Error }>());

export const deleteClubSuccess = createAction('[Club] Delete Club Success', props<{ clubId: string }>());

export const listClubs = createAction('[Club] List Clubs');

export const listClubsFail = createAction('[Club] List Clubs FAIL', props<{ error: Error }>());

export const listClubsSuccess = createAction('[Club] List Clubs Success', props<{ clubs: ClubEntity[] }>());

export const listClubsByCategoryId = createAction(
    '[Competition] List Clubs By Category Id',
    props<{ categoryId: string }>()
);

export const listClubsByCategoryIdSuccess = createAction(
    '[Competition] List Clubs By Category Id Success',
    props<{ clubs: ClubEntity[] }>()
);

export const listClubsByAssociationIdCategoryIdGenderIdAgeGroupId = createAction(
    '[Club] List Clubs By Association Id Category Id Gender Id AgeGroup Id',
    props<{ associationId: string; categoryId: string; genderId: string; ageGroupId: string }>()
);

export const listClubsByAssociationIdCategoryIdGenderIdAgeGroupIdSuccess = createAction(
    '[Club] List Clubs By Association Id Category Id Gender Id AgeGroup Id Success',
    props<{ clubs: ClubEntity[] }>()
);

export const listPlayersByClubId = createAction('[Club] List Players By Club Id', props<{ clubId: string }>());

export const listPlayersByClubIdSuccess = createAction(
    '[Club] List Players By Club Id Success',
    props<{ players: PlayerEntity[]; clubId: string }>()
);

export const loadClub = createAction('[Club] Load Club', props<{ uid: string }>());

export const loadClubFail = createAction('[Club] Load Club FAIL', props<{ error: Error }>());

export const loadClubSuccess = createAction('[Club] Load Club Success', props<{ club: ClubEntity }>());

export const selectClub = createAction('[Club] Select Club', props<{ clubId: string }>());

export const setSelectedClubId = createAction('[Club Admin] Set Selected Club Id', props<{ clubId: string }>());

export const updateClub = createAction('[Club] Update Club', props<{ club: ClubEntity }>());

export const updateClubFail = createAction('[Club] Update Club Fail', props<{ error: Error }>());

export const updateClubSuccess = createAction('[Club] Update Club Success', props<{ club: Update<ClubEntity> }>());
