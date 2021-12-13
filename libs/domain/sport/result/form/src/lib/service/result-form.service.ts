import { Observable, of } from 'rxjs';
import { switchMap, tap, withLatestFrom } from 'rxjs/operators';

import { Location } from '@angular/common';
import { Injectable, Optional } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import {
    Category,
    CategoryRule,
    CategoryRuleService,
    Event,
    EventStateService,
    LanguagesEnum,
    Period,
    Result,
    ResultStateService,
} from '@zsport/api';

import { ResultFormBase } from '../base';
import { ResultFormFactory } from '../factory';

@Injectable()
export class ResultFormService extends ResultFormBase {
    private category!: Category;
    private result!: Result;
    private sportEvent!: Event;

    public resultFormGroup!: FormGroup;

    constructor(
        private activatedRoute: ActivatedRoute,
        private eventStateService: EventStateService,
        private formBuilder: FormBuilder,
        @Optional() private location: Location,
        private resultFromFactory: ResultFormFactory,
        private resultStateService: ResultStateService
    ) {
        super();
    }

    public cancel(): void {
        this.navigateBack();
    }

    public getPeriodsFormArray(): FormArray {
        return this.resultFormGroup.controls['periods'] as FormArray;
    }

    public init$(): Observable<boolean> {
        const eventId: string | null = this.findParam('eventId', this.activatedRoute.snapshot.pathFromRoot);
        const resultId: string = this.activatedRoute.snapshot.paramMap.get('resultId') || '';

        return this.resultStateService.selectEntityById$(resultId).pipe(
            withLatestFrom(this.eventStateService.selectEntityById$(eventId || '')),
            tap(([result, event]) => {
                this.sportEvent = event as Event;

                this.category = (event as Event).category;
                this.resultFormGroup = this.createResultFormGroup(
                    result as Result,
                    this.category?.rule ||
                        CategoryRuleService.getRuleForCategory(
                            this.sportEvent.category.nameI18n[LanguagesEnum.en]?.toLowerCase() || ''
                        ),
                    eventId || ''
                );
            }),
            switchMap(() => of(true))
        );
    }

    public submit(): void {
        const result: Result = this.resultFormGroup.value;

        if (result.uid) {
            this.resultStateService.dispatchUpdateEntityAction(result);
        } else {
            this.eventStateService.dispatchAddResultByEventIdAction(result, this.sportEvent.uid || '');
        }

        this.navigateBack();
    }

    protected findParam(paramName: string, snapshots: ActivatedRouteSnapshot[]): string | null {
        return snapshots ? snapshots.map((snapshot) => snapshot.params[paramName]).find((param) => !!param) : null;
    }

    private createPeriodGroups(categoryRule: CategoryRule, resultPeriods: Period[], eventId: string): FormGroup[] {
        const baseArray: Array<any> = [...Array(categoryRule.period.number)];

        return baseArray.map((_, index) => {
            return this.formBuilder.group({
                index: [index],
                participant1: [resultPeriods[index]?.participant1 || null],
                participant2: [resultPeriods[index]?.participant2 || null],
                quantityType: categoryRule.period.quantityType,
            });
        });
    }

    private createResultFormGroup(result: Result | null, categoryRule: CategoryRule, eventId: string): FormGroup {
        const formGroups: FormGroup[] = this.createPeriodGroups(categoryRule, result?.periods || [], eventId);

        return this.formBuilder.group({
            uid: [result?.uid || null],
            eventId: [eventId],
            periods: this.formBuilder.array(formGroups),
        });
    }

    private navigateBack(): void {
        if (this.location) {
            this.location.back();
        }
    }
}
