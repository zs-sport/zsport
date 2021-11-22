import { tap } from 'rxjs/operators';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { RoleTableBase } from '../base';
import { RoleTableService } from '../service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [RoleTableService],
    selector: 'zs-role-table',
    templateUrl: './role-table.component.html',
    styleUrls: ['./role-table.component.less'],
})
export class RoleTableComponent extends RoleTableBase implements OnInit {
    public constructor(private componentService: RoleTableService) {
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
