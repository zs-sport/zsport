import { takeUntil, tap } from 'rxjs/operators';

import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { CategoryEntity, Championship, Tournament } from '@zsport/api';

import { CompetitionFormBase } from '../base';
import { CompetitionFormService } from '../service';
import { FormGroup } from '@angular/forms';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [CompetitionFormService],
    selector: 'zs-competition-form',
    templateUrl: './competition-form.component.html',
    styleUrls: ['./competition-form.component.less'],
})
export class CompetitionFormComponent extends CompetitionFormBase implements OnDestroy, OnInit {
    @ViewChild('advanced_championship', { static: true })
    public advanced_championship!: TemplateRef<any>;

    @ViewChild('advanced_cup', { static: true })
    public advanced_cup!: TemplateRef<any>;

    @ViewChild('advanced_tournament', { static: true })
    public advanced_tournament!: TemplateRef<any>;

    @ViewChild('base', { static: true })
    public base!: TemplateRef<any>;

    public compareEntities = (o1: any, o2: any): boolean => {
        return this.componentService.compareEntities(o1, o2);
    };

    public compareTypes = (o1: any, o2: any): boolean => {
        return this.componentService.compareTypes(o1, o2);
    };

    @ViewChild('final_championship', { static: true })
    public final_championship!: TemplateRef<any>;

    @ViewChild('final_tournament', { static: true })
    public final_tournament!: TemplateRef<any>;

    @ViewChild('final_cup', { static: true })
    public final_cup!: TemplateRef<any>;

    public competitionForm!: FormGroup;

    public constructor(private componentService: CompetitionFormService) {
        super();
    }

    public categorySelectChangeHandler(category: CategoryEntity): void {
        this.componentService.categorySelectChangeHandler(category);
    }

    public changeChampionshipHandler(championship: Championship): void {
        this.componentService.changeChampionshipHandler(championship);
    }

    public changeTournamentHandler(tournament: Tournament): void {
        this.componentService.changeTournamentHandler(tournament);
    }

    public doneSteps(): void {
        this.componentService.doneSteps();
    }

    public isValid(value: string): boolean {
        return !!value && value === 'success';
    }

    public nextStep(): void {
        this.componentService.nextStep();
    }

    public ngOnDestroy(): void {
        this.componentService.ngOnDestroy();

        super.ngOnDestroy();
    }

    public ngOnInit(): void {
        const advancedRefs = new Map<string, TemplateRef<any>>();

        advancedRefs.set('advanced_tournament', this.advanced_tournament);
        advancedRefs.set('advanced_championship', this.advanced_championship);
        advancedRefs.set('advanced_cup', this.advanced_cup);

        const finalRefs = new Map<string, TemplateRef<any>>();

        finalRefs.set('final_tournament', this.final_tournament);
        finalRefs.set('final_championship', this.final_championship);
        finalRefs.set('final_cup', this.final_cup);

        this.componentService
            .init$([this.base, advancedRefs, finalRefs], this.currentStep$$)
            .pipe(
                tap(() => {
                    this.languages$ = this.componentService.languages$;
                    this.categories$ = this.componentService.categories$;
                    this.competitionForm = this.componentService.competitionForm;
                    this.template$$ = this.componentService.template$$;
                    this.types$ = this.componentService.types$;
                    this.associations$$ = this.componentService.associations$$;
                    this.clubs$$ = this.componentService.clubs$$;
                    this.instance$ = this.componentService.instance$;
                }),
                takeUntil(this.destroy)
            )
            .subscribe();

        this.currentStep$$
            .pipe(
                tap((data) => {
                    console.log(data);
                })
            )
            .subscribe();

        this.template$$
            .pipe(
                tap((data) => {
                    console.log(data);
                })
            )
            .subscribe();
    }

    public onSubmit(): void {
        this.componentService.onSubmit();
    }

    public previousStep(): void {
        this.componentService.previousStep();
    }
}
