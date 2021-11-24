import { takeUntil, tap } from 'rxjs/operators';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { CategoryFormBase } from '../base';
import { CategoryFormService } from '../service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [CategoryFormService],
    selector: 'zs-category-form',
    styleUrls: ['./category-form.component.less'],
    templateUrl: './category-form.component.html',
})
export class CategoryFormComponent extends CategoryFormBase implements OnInit {
    public constructor(private componentService: CategoryFormService) {
        super();
    }

    public ngOnInit(): void {
        this.componentService
            .init$()
            .pipe(
                tap(() => {
                    this.dynamicComponent$ = this.componentService.dynamicComponent$;
                    this.dynamicInputs$$ = this.componentService.dynamicInputs$$;
                }),
                takeUntil(this.destroy)
            )
            .subscribe();
    }
}
