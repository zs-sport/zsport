import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetDirective } from './widget/directive/widget.directive';

@NgModule({
    imports: [CommonModule],
    declarations: [WidgetDirective],
})
export class UiWidgetModule {}
