import { tap } from 'rxjs/operators';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { AssociationTableBase } from '../base';
import { AssociationTableService } from '../service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [AssociationTableService],
    selector: 'zs-association-table',
    templateUrl: './association-table.component.html',
    styleUrls: ['./association-table.component.less'],
})
export class AssociationTableComponent extends AssociationTableBase implements OnInit {
    public constructor(private componentService: AssociationTableService) {
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
