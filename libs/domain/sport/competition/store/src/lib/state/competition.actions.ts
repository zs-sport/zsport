import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { CompetitionModel, Event } from '@zsport/api';

export const addCompetition = createAction('[Competition] Add Competition', props<{ competition: CompetitionModel }>());

export const addCompetitionFail = createAction('[Competition] Add Competition Fail', props<{ error: Error }>());

export const addCompetitionSuccess = createAction(
    '[Competition] Add Competition Success',
    props<{ competition: CompetitionModel }>()
);

export const addEventByCompetitionId = createAction(
    '[Competition] Add Event By Competition Id',
    props<{ event: Event }>()
);

export const addEventByCompetitionIdSuccess = createAction(
    '[Competition] Add Event By Competition Id Success',
    props<{ event: Event }>()
);

export const changeNewEntityButtonEnabled = createAction(
    '[Competition Admin] Change new Entity Button Enabled',
    props<{ enabled: boolean }>()
);

export const clearCompetitions = createAction('[Competition] Clear Competitions');

export const deleteCompetition = createAction('[Competition] Delete Competition', props<{ competitionId: string }>());

export const deleteCompetitionFail = createAction('[Competition] Delete Competition Fail', props<{ error: Error }>());

export const deleteCompetitionSuccess = createAction(
    '[Competition] Delete Competition Success',
    props<{ competitionId: string }>()
);

export const changeSelectedFinalTabId = createAction(
    '[Competition] Change Selected final Tab Id',
    props<{ selectedFinalTabId: number }>()
);

export const listCompetitions = createAction('[Competition] List Competitions');

export const listCompetitionsFail = createAction('[Competition] List Competitions FAIL', props<{ error: Error }>());

export const listCompetitionsSuccess = createAction(
    '[Competition] List Competitions Success',
    props<{ competitions: CompetitionModel[] }>()
);

export const listCompetitionsByCategoryId = createAction(
    '[Competitions] List Competitions By Category Id',
    props<{ categoryId: string }>()
);

export const listCompetitionsByCategoryIdSuccess = createAction(
    '[Competitions] List Competitions By Category Id Success',
    props<{ competitions: CompetitionModel[] }>()
);

export const listEventsByCompetitionId = createAction(
    '[Competition] List Events By Competition Id',
    props<{ competitionId: string }>()
);

export const loadCompetition = createAction('[Competition] Load Competition', props<{ uid: string }>());

export const loadCompetitionFail = createAction('[Competition] Load Competition FAIL', props<{ error: Error }>());

export const loadCompetitionSuccess = createAction(
    '[Competition] Load Competition Success',
    props<{ competition: CompetitionModel }>()
);

export const selectCompetition = createAction('[Competition] Select Competition', props<{ competitionId: string }>());

export const setSelectedCompetitionId = createAction(
    '[Competition Admin] Set Selected Competition Id',
    props<{ competitionId: string }>()
);

export const updateCompetition = createAction(
    '[Competition] Update Competition',
    props<{ competition: CompetitionModel }>()
);

export const updateCompetitionFail = createAction('[Competition] Update Competition Fail', props<{ error: Error }>());

export const updateCompetitionSuccess = createAction(
    '[Competition] Update Competition Success',
    props<{ competition: Update<CompetitionModel> }>()
);

export const updateEventByCompetitionId = createAction('[Competition] Update CEvent', props<{ event: Event }>());

export const updateEventByCompetitionIdSuccess = createAction(
    '[Competition] Update Event Success',
    props<{ event: Event }>()
);
