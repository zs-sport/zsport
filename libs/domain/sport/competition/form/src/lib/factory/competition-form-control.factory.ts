import { Injectable } from '@angular/core';
import { DynamicFormControlFactory } from '@zsport/api';

@Injectable()
export abstract class CompetitionFormControlFactory extends DynamicFormControlFactory {}
