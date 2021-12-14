import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { EventEntity, Result, ResultEntity } from '@zsport/api';

export const addEvent = createAction('[Event] Add Event', props<{ event: EventEntity }>());

export const addEventFail = createAction('[Event] Add Event Fail', props<{ error: Error }>());

export const addEventSuccess = createAction('[Event] Add Event Success', props<{ event: EventEntity }>());

export const addResultByEventId = createAction(
    '[Result Admin] Add Result By Event Id',
    props<{ result: ResultEntity; eventId: string }>()
);

export const addResultByEventIdSuccess = createAction(
    '[Result Admin] Add Result By Event Id Success',
    props<{ result: ResultEntity; eventId: string }>()
);

export const addResultByEventIdFail = createAction(
    '[Result Admin] Add Result By Event Id Fail',
    props<{ error: Error }>()
);

export const changeNewEntityButtonEnabled = createAction(
    '[Event Admin] Change new Entity Button Enabled',
    props<{ enabled: boolean }>()
);

export const clearEvents = createAction('[Event] Clear Events');

export const deleteEvent = createAction('[Event] Delete Event', props<{ eventId: string }>());

export const deleteEventFail = createAction('[Event] Delete Event Fail', props<{ error: Error }>());

export const deleteEventSuccess = createAction('[Event] Delete Event Success', props<{ eventId: string }>());

export const listEvents = createAction('[Event] List Events');

export const listEventsFail = createAction('[Event] List Events FAIL', props<{ error: Error }>());

export const listEventsSuccess = createAction('[Event] List Events Success', props<{ events: EventEntity[] }>());

export const listEventsByCompetitionId = createAction(
    '[Event] List Events By Competition Id',
    props<{ competitionId: string }>()
);

export const listEventsByCompetitionIdSuccess = createAction(
    '[Club] List Events By Competition Id Success',
    props<{ events: EventEntity[] }>()
);

export const listEventsByDay = createAction('[Event] List Events By Day', props<{ day: Date }>());

export const listEventsByDayFail = createAction('[Event] List Events By Day FAIL', props<{ error: Error }>());

export const listEventsByDaySuccess = createAction(
    '[Event] List Events By Day Success',
    props<{ events: EventEntity[] }>()
);

export const listEventsByCategoryId = createAction(
    '[Events] List Events By Category Id',
    props<{ categoryId: string }>()
);

export const listEventsByCategoryIdSuccess = createAction(
    '[Events] List Events By Category Id Success',
    props<{ events: EventEntity[] }>()
);

export const ListEventsByCompetitionIdSuccess = createAction(
    '[Competition] List Events By Competition Id Success',
    props<{ events: EventEntity[] }>()
);

export const listResultsByEventId = createAction('[Event] List Results By Event Id', props<{ eventId: string }>());

export const listResultsByEventIdSuccess = createAction(
    '[Club] List Results By Event Id Success',
    props<{ results: ResultEntity[]; eventId: string }>()
);

export const loadEvent = createAction('[Event] Load Event', props<{ uid: string }>());

export const loadEventFail = createAction('[Event] Load Event FAIL', props<{ error: Error }>());

export const loadEventSuccess = createAction('[Event] Load Event Success', props<{ event: EventEntity }>());

export const selectEvent = createAction('[Event] Select Event', props<{ eventId: string }>());

export const setSelectedEventId = createAction('[Event Admin] Set Selected Event Id', props<{ eventId: string }>());

export const updateEvent = createAction('[Event] Update Event', props<{ event: EventEntity }>());

export const updateEventFail = createAction('[Event] Update Event Fail', props<{ error: Error }>());

export const updateEventSuccess = createAction('[Event] Update Event Success', props<{ event: Update<EventEntity> }>());

export const updateResultByEventId = createAction(
    '[Event Admin] Update Result By Event Id',
    props<{ result: ResultEntity; eventId: string }>()
);

export const updateResultByEventIdSuccess = createAction(
    '[Event Admin] Update Result By Event Id Success',
    props<{ result: ResultEntity; eventId: string }>()
);
