import { tap } from 'rxjs/operators';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { PlayerTableBase } from '../base';
import { PlayerTableService } from '../service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [PlayerTableService],
    selector: 'zs-player-table',
    templateUrl: './player-table.component.html',
    styleUrls: ['./player-table.component.less'],
})
export class PlayerTableComponent extends PlayerTableBase implements OnInit {
    public constructor(private componentService: PlayerTableService) {
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
