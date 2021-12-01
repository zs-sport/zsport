import { takeUntil, tap } from 'rxjs/operators';

import { ChangeDetectionStrategy, Component, EventEmitter, OnInit } from '@angular/core';
import { EventEntity } from '@zsport/api';

import { RoundFormBase } from '../base';
import { RoundFormService } from '../service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    inputs: ['eventNumber', 'events$', 'round'],
    outputs: ['addEvent', 'editEvent'],
    providers: [RoundFormService],
    selector: 'zs-round-form',
    templateUrl: './round-form.component.html',
    styleUrls: ['./round-form.component.scss'],
})
export class RoundFormComponent extends RoundFormBase implements OnInit {
    public constructor(private roundFormService: RoundFormService) {
        super();

        this.addEvent = new EventEmitter();
        this.editEvent = new EventEmitter();
    }

    public addEventClickHandler(index: number): void {
        this.roundFormService.addEventClickHandler(index);
    }

    public editEventClickHandler(event: EventEntity): void {
        this.roundFormService.editEventClickHandler(event);
    }

    public ngOnInit(): void {
        this.roundFormService
            .init$(this.round, this.events$, this.eventNumber, this.addEvent, this.editEvent)
            .pipe(
                tap(() => {}),
                takeUntil(this.destroy)
            )
            .subscribe();
    }
}
