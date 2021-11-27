import { tap } from 'rxjs/operators';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { PersonTableBase } from '../base';
import { PersonTableService } from '../service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [PersonTableService],
    selector: 'zs-person-table',
    templateUrl: './person-table.component.html',
    styleUrls: ['./person-table.component.less'],
})
export class PersonTableComponent extends PersonTableBase implements OnInit {
    public constructor(private componentService: PersonTableService) {
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
