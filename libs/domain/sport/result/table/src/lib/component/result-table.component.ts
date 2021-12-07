import { tap } from 'rxjs/operators';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { ResultTableBase } from '../base';
import { ResultTableService } from '../service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ResultTableService],
    selector: 'zs-result-table',
    templateUrl: './result-table.component.html',
    styleUrls: ['./result-table.component.less'],
})
export class ResultTableComponent extends ResultTableBase implements OnInit {
    public constructor(private componentService: ResultTableService) {
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
