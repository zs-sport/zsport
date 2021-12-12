import { takeUntil, tap } from 'rxjs/operators';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

import { ResultFormBase } from '../base';
import { ResultFormService } from '../service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ResultFormService],
    selector: 'zs-result-form',
    templateUrl: './result-form.component.html',
    styleUrls: ['./result-form.component.less'],
})
export class ResultFormComponent extends ResultFormBase implements OnInit {
    public resultFormGroup!: FormGroup;

    public constructor(private componentService: ResultFormService) {
        super();
    }

    public get periodsFormArray(): FormArray {
        return this.componentService.getPeriodsFormArray();
    }

    public cancel(): void {
        this.componentService.cancel();
    }

    public ngOnInit(): void {
        this.componentService
            .init$()
            .pipe(
                tap(() => {
                    this.resultFormGroup = this.componentService.resultFormGroup;
                }),
                takeUntil(this.destroy)
            )
            .subscribe();
    }

    public submit(): void {
        this.componentService.submit();
    }
}
