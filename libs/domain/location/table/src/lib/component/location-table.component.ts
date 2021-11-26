import { tap } from 'rxjs/operators';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { LocationTableBase } from '../base';
import { LocationTableService } from '../service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [LocationTableService],
    selector: 'zs-location-table',
    templateUrl: './location-table.component.html',
    styleUrls: ['./location-table.component.less'],
})
export class LocationTableComponent extends LocationTableBase implements OnInit {
    public constructor(private componentService: LocationTableService) {
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
