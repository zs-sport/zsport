import { Directive, ElementRef } from '@angular/core';

import { EntityQuantitiesService } from '../../service';

@Directive({
    selector: '[zsportEntityQuantities]',
})
export class EntityQuantitiesDirective {
    constructor(private elementRef: ElementRef, private directiveService: EntityQuantitiesService) {}
}
