import { Observable, of, ReplaySubject } from 'rxjs';
import { switchMap, takeUntil, tap } from 'rxjs/operators';

import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Tournament, EventEntity, Competition } from '@zsport/api';

import { TournamentFinalBase } from '../../base';
import { TournamentFinalService } from '../../service';
import { KeyValue } from '@angular/common';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TournamentFinalService],
    selector: 'zs-tournament-final',
    templateUrl: './tournament-final.component.html',
    styleUrls: ['./tournament-final.component.scss'],
})
export class TournamentFinalComponent extends TournamentFinalBase implements OnInit {
    @Input()
    public tournament$!: Observable<Competition>;
    public radioEvents = 'round';

    public constructor(private tournamentFinalService: TournamentFinalService) {
        super();

        this.dynamicEventFormComponent$$ = new ReplaySubject();
        this.dynamicEventFormInputs$$ = new ReplaySubject();
        this.dynamicEventFormOutputs$$ = new ReplaySubject();
    }

    public addEventHandler(event: KeyValue<number, string>): void {
        this.tournamentFinalService.addEventHandler(event);
    }

    public editEventHandler(event: EventEntity): void {
        this.tournamentFinalService.editEventHandler(event);
    }

    public eventUpdateHandler(event: EventEntity): void {
        this.tournamentFinalService.eventUpdateHandler(event);
    }

    public ngOnInit(): void {
        this.tournamentFinalService
            .init$(
                this.tournament$.pipe(switchMap((tournament) => of(tournament as Tournament))),
                this.dynamicEventFormComponent$$,
                this.dynamicEventFormInputs$$,
                this.dynamicEventFormOutputs$$
            )
            .pipe(
                tap(() => {
                    this.event$$ = this.tournamentFinalService.event$$;
                    this.events$$ = this.tournamentFinalService.events$$;
                    this.eventList$$ = this.tournamentFinalService.eventList$$;
                    this.eventNumber = this.tournamentFinalService.eventNumber;
                    this.ageGroups$$ = this.tournamentFinalService.ageGroups$$;
                    this.genders$$ = this.tournamentFinalService.genders$$;
                    this.categories$$ = this.tournamentFinalService.categories$$;
                    this.teams$$ = this.tournamentFinalService.teams$$;
                    this.selectedFinalTabId$ = this.tournamentFinalService.selectedFinalTabId$;
                    this.tournament$$ = this.tournamentFinalService.tournament$$;
                }),
                takeUntil(this.destroy)
            )
            .subscribe();
    }

    public onTab0Click(): void {
        this.tournamentFinalService.onTab0Click();
    }

    public onTab1Click(): void {
        this.tournamentFinalService.onTab1Click();
    }

    public onTab2Click(): void {
        this.tournamentFinalService.onTab2Click();
    }
}
