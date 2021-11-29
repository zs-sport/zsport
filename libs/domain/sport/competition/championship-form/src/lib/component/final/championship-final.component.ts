import { skip, takeUntil, tap } from 'rxjs/operators';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { EventEntity } from '@zsport/api';

import { ChampionshipFinalBase } from '../../base';
import { ChampionshipFinalService } from '../../service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ChampionshipFinalService],
    inputs: ['championship$'],
    selector: 'zs-championship-final',
    templateUrl: './championship-final.component.html',
    styleUrls: ['./championship-final.component.scss'],
})
export class ChampionshipFinalComponent extends ChampionshipFinalBase implements OnInit {
    public radioEvents = 'round';

    public constructor(private championshipFinalService: ChampionshipFinalService) {
        super();
    }

    public addEventHandler(index: number): void {
        this.championshipFinalService.addEventHandler(index);
    }

    public editEventHandler(event: EventEntity): void {
        this.championshipFinalService.editEventHandler(event);
    }

    public eventUpdateHandler(event: EventEntity): void {
        this.championshipFinalService.eventUpdateHandler(event);
    }

    public ngOnInit(): void {
        this.championshipFinalService
            .init$(this.championship$)
            .pipe(
                tap(() => {
                    this.event$$ = this.championshipFinalService.event$$;
                    this.events$$ = this.championshipFinalService.events$$;
                    this.eventList$$ = this.championshipFinalService.eventList$$;
                    this.eventNumber = this.championshipFinalService.eventNumber;
                    this.ageGroups$$ = this.championshipFinalService.ageGroups$$;
                    this.genders$$ = this.championshipFinalService.genders$$;
                    this.categories$$ = this.championshipFinalService.categories$$;
                    this.teams$$ = this.championshipFinalService.teams$$;
                    this.dynamicEventFormComponent$$ = this.championshipFinalService.dynamicEventFormComponent$$;
                    this.dynamicEventFormInputs$$ = this.championshipFinalService.dynamicEventFormInputs$$;
                    this.dynamicEventFormOutputs$$ = this.championshipFinalService.dynamicEventFormOutputs$$;
                    this.selectedFinalTabId$ = this.championshipFinalService.selectedFinalTabId$;
                }),
                takeUntil(this.destroy)
            )
            .subscribe();
    }

    public onTab0Click(): void {
        this.championshipFinalService.onTab0Click();
    }

    public onTab1Click(): void {
        this.championshipFinalService.onTab1Click();
    }

    public onTab2Click(): void {
        this.championshipFinalService.onTab2Click();
    }
}
