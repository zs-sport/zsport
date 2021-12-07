import { takeUntil, tap } from 'rxjs/operators';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { ResultFormBase } from '../base';
import { ResultFormService } from '../service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ResultFormService],
    selector: 'zs-soft-result-form',
    templateUrl: './result-form.component.html',
    styleUrls: ['./result-form.component.less'],
})
export class ResultFormComponent extends ResultFormBase implements OnInit {
    public constructor(private componentService: ResultFormService) {
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
