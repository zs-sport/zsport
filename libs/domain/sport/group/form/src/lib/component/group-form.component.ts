import { Observable, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Event, EventEntity, Group, GroupLevel } from '@zsport/api';

import { GroupFormBase } from '../base';
import { GroupFormService } from '../service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    outputs: ['addEvent', 'editEvent'],
    providers: [GroupFormService],
    selector: 'zs-group-form',
    templateUrl: './group-form.component.html',
    styleUrls: ['./group-form.component.scss'],
})
export class GroupFormComponent extends GroupFormBase implements OnInit {
    @Input()
    public eventsMap!: Map<string, (Event | undefined)[]> | null | undefined;
    @Input()
    public eventsNumber!: number;
    @Input()
    public groupLevel!: GroupLevel;

    public constructor(private groupFormService: GroupFormService) {
        super();

        this.addEvent = new EventEmitter();
        this.editEvent = new EventEmitter();
    }

    public addEventClickHandler(index: number, title: string): void {
        this.groupFormService.addEventClickHandler(index, title);
    }

    public editEventClickHandler(event: EventEntity): void {
        this.groupFormService.editEventClickHandler(event);
    }

    public ngOnInit(): void {
        this.groupFormService
            .init$(this.groupLevel, this.eventsNumber, this.addEvent, this.editEvent)
            .pipe(
                tap(() => {}),
                takeUntil(this.destroy)
            )
            .subscribe();
    }
}
