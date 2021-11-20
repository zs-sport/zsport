import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { ColorCircleModule } from 'ngx-color/circle';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreI18nModule } from '@zsport/core/i18n';

import { NgzCancelButtonComponent } from './component/ngz-cancel-button';
import { NgzCheckboxElementComponent } from './component/ngz-checkbox-element';
import { NgzColorCircleElementComponent } from './component/ngz-color-circle-element';
import { NgzDatePickerElementComponent } from './component/ngz-date-picker-element';
import { NgzDynamicFormComponent } from './component/ngz-dynamic-form';
import { NgzEmailElementComponent } from './component/ngz-email-element';
import { NgzFileElementComponent } from './component/ngz-file-element';
import { NgzHiddenElementComponent } from './component/ngz-hidden-element';
import { NgzInputNumberComponent } from './component/ngz-input-number';
import { NgzPhoneElementComponent } from './component/ngz-phone-element';
import { NgzRadioElementComponent } from './component/ngz-radio-element';
import { NgzResetButtonComponent } from './component/ngz-reset-button';
import { NgzSelectElementComponent } from './component/ngz-select-element';
import { NgzSelectIconElementComponent } from './component/ngz-select-icon-element';
import { NgzSubmitButtonComponent } from './component/ngz-submit-button';
import { NgzTextAreaElementComponent } from './component/ngz-text-area-element';
import { NgzTextElementComponent } from './component/ngz-text-element';
import { NgzDoubleNumberComponent } from './component/ngz-double-number/ngz-double-number.component';

@NgModule({
    declarations: [
        NgzCancelButtonComponent,
        NgzCheckboxElementComponent,
        NgzDatePickerElementComponent,
        NgzDoubleNumberComponent,
        NgzDynamicFormComponent,
        NgzEmailElementComponent,
        NgzFileElementComponent,
        NgzHiddenElementComponent,
        NgzInputNumberComponent,
        NgzPhoneElementComponent,
        NgzRadioElementComponent,
        NgzResetButtonComponent,
        NgzSelectElementComponent,
        NgzSelectIconElementComponent,
        NgzSubmitButtonComponent,
        NgzTextAreaElementComponent,
        NgzTextElementComponent,
        NgzColorCircleElementComponent,
        NgzDoubleNumberComponent,
    ],
    exports: [
        NgzCancelButtonComponent,
        NgzCheckboxElementComponent,
        NgzDatePickerElementComponent,
        NgzDoubleNumberComponent,
        NgzDynamicFormComponent,
        NgzEmailElementComponent,
        NgzHiddenElementComponent,
        NgzInputNumberComponent,
        NgzPhoneElementComponent,
        NgzRadioElementComponent,
        NgzResetButtonComponent,
        NgzSelectElementComponent,
        NgzSelectIconElementComponent,
        NgzSubmitButtonComponent,
        NgzTextAreaElementComponent,
        NgzTextElementComponent,
    ],
    imports: [
        CommonModule,
        CoreI18nModule,
        ColorCircleModule,
        FormsModule,
        NzAvatarModule,
        NzButtonModule,
        NzCheckboxModule,
        NzDatePickerModule,
        NzFormModule,
        NzIconModule,
        NzInputModule,
        NzInputNumberModule,
        NzRadioModule,
        NzSelectModule,
        NzToolTipModule,
        NzUploadModule,
        ReactiveFormsModule,
    ],
})
export class UiDynamicFormModule {}
