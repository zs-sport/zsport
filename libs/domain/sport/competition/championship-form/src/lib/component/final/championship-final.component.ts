import { Observable, of, ReplaySubject } from 'rxjs';
import { switchMap, takeUntil, tap } from 'rxjs/operators';

import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Championship, Competition, EventEntity } from '@zsport/api';

import { ChampionshipFinalBase } from '../../base';
import { ChampionshipFinalService } from '../../service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ChampionshipFinalService],
    selector: 'zs-championship-final',
    templateUrl: './championship-final.component.html',
    styleUrls: ['./championship-final.component.scss'],
})
export class ChampionshipFinalComponent extends ChampionshipFinalBase implements OnInit {
    @Input()
    public championship$!: Observable<Competition>;
    public radioEvents = 'round';

    public constructor(private championshipFinalService: ChampionshipFinalService) {
        super();

        this.dynamicEventFormComponent$$ = new ReplaySubject();
        this.dynamicEventFormInputs$$ = new ReplaySubject();
        this.dynamicEventFormOutputs$$ = new ReplaySubject();
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
            .init$(
                this.championship$.pipe(switchMap((championship) => of(championship as Championship))),
                this.dynamicEventFormComponent$$,
                this.dynamicEventFormInputs$$,
                this.dynamicEventFormOutputs$$
            )
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
                    this.selectedFinalTabId$ = this.championshipFinalService.selectedFinalTabId$;
                    this.championship$$ = this.championshipFinalService.championship$$;
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
