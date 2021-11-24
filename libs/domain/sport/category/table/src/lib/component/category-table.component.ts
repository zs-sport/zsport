import { tap } from 'rxjs/operators';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { CategoryTableBase } from '../base';
import { CategoryTableService } from '../service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [CategoryTableService],
    selector: 'zs-category-table',
    templateUrl: './category-table.component.html',
    styleUrls: ['./category-table.component.less'],
})
export class CategoryTableComponent extends CategoryTableBase implements OnInit {
    public constructor(private componentService: CategoryTableService) {
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
