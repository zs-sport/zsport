import { takeUntil, tap } from 'rxjs/operators';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { EventFormBase } from '../base';
import { EventFormService } from '../service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [EventFormService],
    selector: 'zs-event-form',
    templateUrl: './event-form.component.html',
    styleUrls: ['./event-form.component.less'],
})
export class EventFormComponent extends EventFormBase implements OnInit {
    public constructor(private componentService: EventFormService) {
        super();
    }

    public ngOnInit(): void {
        this.componentService
            .init$()
            .pipe(
                tap(() => {
                    this.dynamicComponent$ = this.componentService.dynamicComponent$;
                    this.dynamicInputs$$ = this.componentService.dynamicInputs$$;
                }),
                takeUntil(this.destroy)
            )
            .subscribe();
    }
}
