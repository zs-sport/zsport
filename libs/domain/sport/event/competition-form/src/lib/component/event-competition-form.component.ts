import { takeUntil, tap } from 'rxjs/operators';

import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit } from '@angular/core';

import { EventCompetitionFormBase } from '../base';
import { EventCompetitionFormService } from '../service';
import { AgeGroup, Category, Event, Gender, Team } from '@zsport/api';
import { Observable } from 'rxjs';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    outputs: ['eventUpdate', 'formValueChange'],
    providers: [EventCompetitionFormService],
    selector: 'zs-event-competition-form',
    templateUrl: './event-competition-form.component.html',
    styleUrls: ['./event-competition-form.component.less'],
})
export class EventCompetitionFormComponent extends EventCompetitionFormBase implements OnInit {
    @Input()
    public ageGroups$!: Observable<AgeGroup[]>;
    @Input()
    public categories$!: Observable<Category[]>;
    @Input()
    public event$!: Observable<Event>;
    @Input()
    public genders$!: Observable<Gender[]>;
    @Input()
    public teams$!: Observable<Team[]>;

    public constructor(private componentService: EventCompetitionFormService) {
        super();

        this.eventUpdate = new EventEmitter();
        this.formValueChange = new EventEmitter();
    }

    public ngOnInit(): void {
        this.componentService
            .init$(
                this.event$,
                this.ageGroups$,
                this.categories$,
                this.genders$,
                this.teams$,
                this.eventUpdate,
                this.formValueChange
            )
            .pipe(
                tap(() => {
                    this.dynamicComponent$$ = this.componentService.dynamicComponent$$;
                    this.dynamicInputs$$ = this.componentService.dynamicInputs$$;
                }),
                takeUntil(this.destroy)
            )
            .subscribe();
    }
}
