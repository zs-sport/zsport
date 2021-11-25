import { tap } from 'rxjs/operators';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { ClubTableBase } from '../base';
import { ClubTableService } from '../service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ClubTableService],
    selector: 'zs-club-table',
    templateUrl: './club-table.component.html',
    styleUrls: ['./club-table.component.less'],
})
export class ClubTableComponent extends ClubTableBase implements OnInit {
    public constructor(private componentService: ClubTableService) {
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
