import { Injectable } from '@angular/core';
import { DynamicFormControlFactory } from '@zsport/api';

@Injectable()
export abstract class RoleFormControlFactory extends DynamicFormControlFactory {}
