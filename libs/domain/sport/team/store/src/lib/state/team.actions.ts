import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { EventTeam, TeamEntity } from '@zsport/api';

export const addTeam = createAction('[Team] Add Team', props<{ team: TeamEntity }>());

export const addTeamFail = createAction('[Team] Add Team Fail', props<{ error: Error }>());

export const addTeamSuccess = createAction('[Team] Add Team Success', props<{ team: TeamEntity }>());

export const changeNewEntityButtonEnabled = createAction(
    '[Team Admin] Change new Entity Button Enabled',
    props<{ enabled: boolean }>()
);

export const clearTeams = createAction('[Team] Clear Teams');

export const deleteTeam = createAction('[Team] Delete Team', props<{ teamId: string }>());

export const deleteTeamFail = createAction('[Team] Delete Team Fail', props<{ error: Error }>());

export const deleteTeamSuccess = createAction('[Team] Delete Team Success', props<{ teamId: string }>());

export const listTeams = createAction('[Team] List Teams');

export const listTeamsFail = createAction('[Team] List Teams FAIL', props<{ error: Error }>());

export const listTeamsSuccess = createAction('[Team] List Teams Success', props<{ teams: TeamEntity[] }>());

export const listTeamsByAGGCId = createAction(
    '[Team] List Teams By AgeGroup Gender Category Id',
    props<{ aggcId: string }>()
);

export const listTeamsByAGGCIdSuccess = createAction(
    '[Team] List Teams By AgeGroup Gender Category Id Success',
    props<{ teams: TeamEntity[] }>()
);

export const listTeamsByAGGCIdFail = createAction(
    '[Team] List Teams By AgeGroup Gender Category Id Fail',
    props<{ error: Error }>()
);

export const listTeamsByAGGCIdAndClubIds = createAction(
    '[Competition] List Teams By AgeGroup Gender Category Id and Club Ids',
    props<{ aggcId: string; sportClubIds: string[] }>()
);

export const listTeamsByAGGCIdAndClubIdsSuccess = createAction(
    '[Competition] List Teams By AgeGroup Gender Category Id And Club Ids Success',
    props<{ teams: TeamEntity[] }>()
);

export const listTeamsByCategoryId = createAction('[Teams] List Teams By Category Id', props<{ categoryId: string }>());

export const listTeamsByCategoryIdSuccess = createAction(
    '[Teams] List Teams By Category Id Success',
    props<{ teams: TeamEntity[] }>()
);

export const listEventTeamsByEventId = createAction(
    '[EventTeam] List Event Teams By Event Id',
    props<{ eventId: string }>()
);

export const listEventTeamsByEventIdSuccess = createAction(
    '[EventTeam] List Event Teams By Event Id Success',
    props<{ eventTeams: EventTeam[] }>()
);

export const updateEventTeamByEventId = createAction(
    '[EventTeam] Update Event Team By Event Id',
    props<{ eventTeam: EventTeam; eventId: string }>()
);

export const updateEventTeamByEventIdSuccess = createAction(
    '[EventTeam] Update Event Team By Event Id Success',
    props<{ eventTeam: Update<TeamEntity> }>()
);

export const loadTeam = createAction('[Team] Load Team', props<{ uid: string }>());

export const loadTeamFail = createAction('[Team] Load Team FAIL', props<{ error: Error }>());

export const loadTeamSuccess = createAction('[Team] Load Team Success', props<{ team: TeamEntity }>());

export const selectTeam = createAction('[Team] Select Team', props<{ teamId: string }>());

export const setSelectedTeamId = createAction('[Team Admin] Set Selected Team Id', props<{ teamId: string }>());

export const updateTeam = createAction('[Team] Update Team', props<{ team: TeamEntity }>());

export const updateTeamFail = createAction('[Team] Update Team Fail', props<{ error: Error }>());

export const updateTeamSuccess = createAction('[Team] Update Team Success', props<{ team: Update<TeamEntity> }>());

export const addTeamByClubId = createAction(
    '[Team Admin] Add Team By Club Id',
    props<{ team: TeamEntity; clubId: string }>()
);

export const addTeamByClubIdSuccess = createAction(
    '[Team Admin] Add Team By Club Id Success',
    props<{ team: TeamEntity; clubId: string }>()
);

export const addTeamByClubIdFail = createAction('[Team Admin] Add Team By Club Id Fail', props<{ error: Error }>());

export const listTeamsByClubId = createAction('[Team Admin] List Teams By Club Id', props<{ clubId: string }>());

export const listTeamsByClubIdSuccess = createAction(
    '[Team Admin] List Teams By Club Id Success',
    props<{ teams: TeamEntity[] }>()
);

export const listTeamsByClubIdFail = createAction('[Team Admin] List Teams by Club Id FAIL', props<{ error: Error }>());

export const updateTeamByClubId = createAction(
    '[Team Admin] Update Team By Club Id',
    props<{ team: TeamEntity; clubId: string }>()
);

export const updateTeamByClubIdSuccess = createAction(
    '[Team Admin] Update Team By Club Id Success',
    props<{ team: Update<TeamEntity> }>()
);

export const updateTeamByClubIdFail = createAction(
    '[Team Admin] Update Team By Club Id Fail',
    props<{ error: Error }>()
);
