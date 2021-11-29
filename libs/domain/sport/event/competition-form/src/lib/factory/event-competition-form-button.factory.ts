import { EventEmitter } from '@angular/core';
import { ButtonBase, DynamicFormButtonFactory, EventEntity } from '@zsport/api';

export abstract class EventCompetitionFormButtonFactory extends DynamicFormButtonFactory {
    public abstract createFormButtons(eventUpdate?: EventEmitter<EventEntity>): ButtonBase[];
}
