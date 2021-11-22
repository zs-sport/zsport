import { takeUntil, tap } from 'rxjs/operators';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { RoleFormBase } from '../base';
import { RoleFormService } from '../service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [RoleFormService],
    selector: 'zs-role-form',
    templateUrl: './role-form.component.html',
    styleUrls: ['./role-form.component.less'],
})
export class RoleFormComponent extends RoleFormBase implements OnInit {
    public constructor(private componentService: RoleFormService) {
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
