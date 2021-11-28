import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';

import { CompetitionEntity, EventEntity } from '@zsport/api';

export const addCompetition = createAction(
    '[Competition] Add Competition',
    props<{ competition: CompetitionEntity }>()
);

export const addCompetitionFail = createAction('[Competition] Add Competition Fail', props<{ error: Error }>());

export const addCompetitionSuccess = createAction(
    '[Competition] Add Competition Success',
    props<{ competition: CompetitionEntity }>()
);

export const addEventByCompetitionId = createAction(
    '[Competition] Add Event By Competition Id',
    props<{ event: EventEntity }>()
);

export const addEventByCompetitionIdSuccess = createAction(
    '[Competition] Add Event By Competition Id Success',
    props<{ event: EventEntity }>()
);

export const clearCompetition = createAction('[Competition] Clear Competitions');

export const deleteCompetition = createAction('[Competition] Delete Competition', props<{ competitionId: string }>());

export const deleteCompetitionFail = createAction('[Competition] Delete Competition Fail', props<{ error: Error }>());

export const deleteCompetitionSuccess = createAction(
    '[Competition] Delete Competition Success',
    props<{ competitionId: string }>()
);

export const listEventesByCompetitionId = createAction(
    '[Competition] List Eventes By Competition Id',
    props<{ competitionId: string }>()
);

export const loadCompetitions = createAction('[Competition] Load Competitions');

export const loadCompetitionsFail = createAction('[Competition] Load Competitions FAIL', props<{ error: Error }>());

export const loadCompetitionsSuccess = createAction(
    '[Competition] Load Competitions Success',
    props<{ competitions: CompetitionEntity[] }>()
);

export const selectCompetition = createAction('[Competition] Select Competition', props<{ competitionId: string }>());

export const updateCompetition = createAction(
    '[Competition] Update Competition',
    props<{ competition: CompetitionEntity }>()
);

export const updateCompetitionFail = createAction('[Competition] Update Competition Fail', props<{ error: Error }>());

export const updateCompetitionSuccess = createAction(
    '[Competition] Update Competition Success',
    props<{ competition: Update<CompetitionEntity> }>()
);

export const updateEvent = createAction('[Competition] Update Event', props<{ event: EventEntity }>());

export const updateEventSuccess = createAction('[Competition] Update Event Success', props<{ event: EventEntity }>());
