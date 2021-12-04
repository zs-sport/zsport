import { Observable, of } from 'rxjs';
import { switchMap, takeUntil, tap } from 'rxjs/operators';

import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { AgeGroup, Competition, Gender, Tournament } from '@zsport/api';

import { TournamentFormBase } from '../../base';
import { TournamentFormService } from '../../service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    outputs: ['changeTournament'],
    providers: [TournamentFormService],
    selector: 'zs-tournament-form',
    templateUrl: './tournament-form.component.html',
    styleUrls: ['./tournament-form.component.less'],
})
export class TournamentFormComponent extends TournamentFormBase implements OnDestroy, OnInit {
    public compareEntities = (o1: any, o2: any): boolean => {
        return this.tournamentFormService.compareEntities(o1, o2);
    };

    @Input()
    public tournament$!: Observable<Competition>;

    public constructor(private tournamentFormService: TournamentFormService) {
        super();

        this.changeTournament = new EventEmitter();
    }

    public get groupLevels(): FormArray {
        return this.tournamentFormService.getGroupLevels();
    }

    public addGroupLevel(): void {
        this.tournamentFormService.addGroupLevel();
    }

    public ngOnDestroy(): void {
        this.tournamentFormService.ngOnDestroy();

        super.ngOnDestroy();
    }

    public ngOnInit(): void {
        this.tournamentFormService
            .init$(
                this.tournament$.pipe(switchMap((tournament) => of(tournament as Tournament))),
                this.entityForm$$,
                this.changeTournament
            )
            .pipe(
                tap(() => {
                    this.ageGroupOptions$ = this.tournamentFormService.ageGroupOptions$;
                    this.genderOptions$ = this.tournamentFormService.genderOptions$;
                    this.clubs$$ = this.tournamentFormService.clubs$$;
                }),
                takeUntil(this.destroy)
            )
            .subscribe();
    }

    public onAgeGroupChangeHandler(event: AgeGroup): void {
        this.tournamentFormService.onAgeGroupChangeHandler(event);
    }

    public onGenderChangeHandler(event: Gender): void {
        this.tournamentFormService.onGenderChangeHandler(event);
    }

    public onIsNationalChangeHandler(event: boolean): void {}

    public onSubmit(): void {
        this.tournamentFormService.onSubmit();
    }

    public removeGroupLevel(i: number): void {
        this.tournamentFormService.removeGroupLevel(i);
    }

    public resetForm(event: MouseEvent): void {
        throw new Error('Method not implemented.');
    }

    public updateEntity(entityModel: any): void {
        throw new Error('Method not implemented.');
    }
}
