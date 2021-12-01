import { Observable } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit } from '@angular/core';
import { AgeGroup, Championship, Gender } from '@zsport/api';

import { ChampionshipFormBase } from '../../base';
import { ChampionshipFormService } from '../../service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    outputs: ['changeChampionship'],
    providers: [ChampionshipFormService],
    selector: 'zs-championship-form',
    templateUrl: './championship-form.component.html',
    styleUrls: ['./championship-form.component.less'],
})
export class ChampionshipFormComponent extends ChampionshipFormBase implements OnDestroy, OnInit {
    @Input()
    public championship$!: Observable<Championship>;
    public compareEntities = (o1: any, o2: any): boolean => {
        return this.championshipFormService.compareEntities(o1, o2);
    };

    public constructor(private championshipFormService: ChampionshipFormService) {
        super();

        this.changeChampionship = new EventEmitter();
    }

    public ngOnDestroy(): void {
        this.championshipFormService.ngOnDestroy();

        super.ngOnDestroy();
    }

    public ngOnInit(): void {
        this.championshipFormService
            .init$(this.championship$, this.entityForm$$, this.changeChampionship)
            .pipe(
                tap(() => {
                    this.ageGroupOptions$ = this.championshipFormService.ageGroupOptions$;
                    this.genderOptions$ = this.championshipFormService.genderOptions$;
                    this.clubs$$ = this.championshipFormService.clubs$$;

                    this.entityForm$$.pipe(
                        tap((data) => {
                            console.log(data);
                        })
                    );
                }),
                takeUntil(this.destroy)
            )
            .subscribe();
    }

    public onAgeGroupChangeHandler(event: AgeGroup): void {
        this.championshipFormService.onAgeGroupChangeHandler(event);
    }

    public onGenderChangeHandler(event: Gender): void {
        this.championshipFormService.onGenderChangeHandler(event);
    }

    public onSubmit(): void {
        this.championshipFormService.onSubmit();
    }

    public resetForm(event: MouseEvent): void {
        throw new Error('Method not implemented.');
    }

    public updateEntity(entityModel: any): void {
        throw new Error('Method not implemented.');
    }
}
