import { tap } from 'rxjs/operators';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { CompetitionTableBase } from '../base';
import { CompetitionTableService } from '../service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [CompetitionTableService],
    selector: 'zs-competition-table',
    templateUrl: './competition-table.component.html',
    styleUrls: ['./competition-table.component.less'],
})
export class CompetitionTableComponent extends CompetitionTableBase implements OnInit {
    public constructor(private componentService: CompetitionTableService) {
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
