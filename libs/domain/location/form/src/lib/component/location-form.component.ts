import { takeUntil, tap } from 'rxjs/operators';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { LocationFormBase } from '../base';
import { LocationFormService } from '../service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [LocationFormService],
    selector: 'zs-location-form',
    templateUrl: './location-form.component.html',
    styleUrls: ['./location-form.component.less'],
})
export class LocationFormComponent extends LocationFormBase implements OnInit {
    public constructor(private componentService: LocationFormService) {
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
