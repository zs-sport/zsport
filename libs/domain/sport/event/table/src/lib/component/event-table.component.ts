import { tap } from 'rxjs/operators';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { EventTableBase } from '../base';
import { EventTableService } from '../service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [EventTableService],
    selector: 'zs-event-table',
    templateUrl: './event-table.component.html',
    styleUrls: ['./event-table.component.less'],
})
export class EventTableComponent extends EventTableBase implements OnInit {
    public constructor(private componentService: EventTableService) {
        super();
    }

    public ngOnInit(): void {
        this.componentService
            .init$()
            .pipe(
                tap(() => {
                    this.dynamicComponent$ = this.componentService.dynamicComponent$;
                    this.dynamicInputs$$ = this.componentService.dynamicInputs$$;
                })
            )
            .subscribe();
    }
}
