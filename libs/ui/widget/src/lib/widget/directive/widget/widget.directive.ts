import { Directive } from '@angular/core';

@Directive({
    selector: '[zs-widget]',
    exportAs: 'zsWidget',
})
export class WidgetDirective {
    constructor() {}
}
