import { tap } from 'rxjs/operators';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { UserTableBase } from '../base';
import { UserTableService } from '../service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [UserTableService],
    selector: 'zs-user-table',
    templateUrl: './user-table.component.html',
    styleUrls: ['./user-table.component.less'],
})
export class UserTableComponent extends UserTableBase implements OnInit {
    public constructor(private componentService: UserTableService) {
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
