import { ReplaySubject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { ApplicationHeaderBase } from '../base';
import { ApplicationHeaderService } from '../service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ApplicationHeaderService],
    selector: 'zsport-application-header',
    templateUrl: './application-header.component.html',
    styleUrls: ['./application-header.component.less'],
})
export class ApplicationHeaderComponent extends ApplicationHeaderBase implements OnInit {
    public constructor(private componentService: ApplicationHeaderService) {
        super();

        this.dynamicInputs$$ = new ReplaySubject();
    }

    public ngOnInit(): void {
        this.componentService
            .init$(this.dynamicInputs$$)
            .pipe(
                tap(() => {
                    this.dynamicComponent$ = this.componentService.dynamicComponent$;
                    this.dynamicOutputs$ = this.componentService.dynamicOutputs$;
                }),
                takeUntil(this.destroy)
            )
            .subscribe();
    }
}
