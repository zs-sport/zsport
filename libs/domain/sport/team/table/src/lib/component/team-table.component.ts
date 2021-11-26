import { tap } from 'rxjs/operators';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { TeamTableBase } from '../base';
import { TeamTableService } from '../service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TeamTableService],
    selector: 'zs-team-table',
    templateUrl: './team-table.component.html',
    styleUrls: ['./team-table.component.less'],
})
export class TeamTableComponent extends TeamTableBase implements OnInit {
    public constructor(private componentService: TeamTableService) {
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
