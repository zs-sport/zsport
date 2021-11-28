import { takeUntil, tap } from 'rxjs/operators';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { PlayerFormBase } from '../base';
import { PlayerFormService } from '../service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [PlayerFormService],
    selector: 'zs-player-form',
    templateUrl: './player-form.component.html',
    styleUrls: ['./player-form.component.less'],
})
export class PlayerFormComponent extends PlayerFormBase implements OnInit {
    public constructor(private componentService: PlayerFormService) {
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
