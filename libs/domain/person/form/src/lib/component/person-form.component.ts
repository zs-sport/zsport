import { takeUntil, tap } from 'rxjs/operators';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { PersonFormBase } from '../base';
import { PersonFormService } from '../service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [PersonFormService],
    selector: 'zs-person-form',
    templateUrl: './person-form.component.html',
    styleUrls: ['./person-form.component.less'],
})
export class PersonFormComponent extends PersonFormBase implements OnInit {
    public constructor(private componentService: PersonFormService) {
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
