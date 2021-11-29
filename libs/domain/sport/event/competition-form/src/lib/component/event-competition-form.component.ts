import { takeUntil, tap } from 'rxjs/operators';

import { ChangeDetectionStrategy, Component, EventEmitter, OnInit } from '@angular/core';

import { EventCompetitionFormBase } from '../base';
import { EventCompetitionFormService } from '../service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    inputs: ['event$', 'ageGroups$', 'categories$', 'genders$', 'teams$'],
    outputs: ['eventUpdate', 'formValueChange'],
    providers: [EventCompetitionFormService],
    selector: 'zs-event-competition-form',
    templateUrl: './event-competition-form.component.html',
    styleUrls: ['./event-competition-form.component.less'],
})
export class EventCompetitionFormComponent extends EventCompetitionFormBase implements OnInit {
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
