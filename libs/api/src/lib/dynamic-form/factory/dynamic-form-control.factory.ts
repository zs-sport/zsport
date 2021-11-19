import { Observable } from 'rxjs';

import { BaseService, Identifiable } from '../../base';
import { Dateable, Dates } from '../../state';
import {
    ControlBase,
    DynamicCheckboxControl,
    DynamicColorCircleControl,
    DynamicDatePickerControl,
    DynamicDoubleNumberControl,
    DynamicEmailControl,
    DynamicFileControl,
    DynamicGroupControl,
    DynamicHiddenControl,
    DynamicInputNumberControl,
    DynamicPhoneControl,
    DynamicRadioControl,
    DynamicSelectControl,
    DynamicSelectIconControl,
    DynamicTextAreaControl,
    DynamicTextControl,
} from '../control';
import { DynamicFormElementTypeEnum } from '../enum';
import {
    CheckboxControlModel,
    ColorCircleControlModel,
    ControlBaseModel,
    DatePickerControlModel,
    DoubleNumberControlModel,
    EmailControlModel,
    FileControlModel,
    HiddenControlModel,
    InputNumberControlModel,
    PhoneControlModel,
    RadioControlModel,
    SelectControlModel,
    SelectIconControlModel,
    TextAreaControlModel,
    TextControlModel,
} from '../model';

export abstract class DynamicFormControlFactory extends BaseService {
    public createCheckboxControl(checkboxControlModel: CheckboxControlModel): DynamicCheckboxControl {
        return new DynamicCheckboxControl({
            ...checkboxControlModel,
            controlType: DynamicFormElementTypeEnum.CHECKBOX,
        });
    }

    public createColorCircleControl(colorCircleControlModel: ColorCircleControlModel): DynamicColorCircleControl {
        return new DynamicColorCircleControl({
            ...colorCircleControlModel,
            controlType: DynamicFormElementTypeEnum.COLOR_CIRCLE,
        });
    }

    public createDatePickerControl(datePickerControlModel: DatePickerControlModel): DynamicDatePickerControl {
        return new DynamicDatePickerControl({
            ...datePickerControlModel,
            controlType: DynamicFormElementTypeEnum.DATE_PICKER,
        });
    }

    public createDatesControl(data: Dateable, order: number): DynamicHiddenControl<Dates> {
        return this.createHiddenControl({
            key: 'dates',
            order,
            type: 'hidden',
            validators: undefined,
            value: data ? data.dates : null,
        });
    }

    public createDoubleNumberControl(doubleNumberControlModel: DoubleNumberControlModel): DynamicDoubleNumberControl {
        return new DynamicDoubleNumberControl({
            ...doubleNumberControlModel,
            controlType: DynamicFormElementTypeEnum.DOUBLE_NUMBER,
        });
    }

    public createEmailControl(emailControlModel: EmailControlModel): DynamicEmailControl {
        return new DynamicEmailControl({
            ...emailControlModel,
            controlType: DynamicFormElementTypeEnum.email,
        });
    }

    public createFileControl(fileControlModel: FileControlModel): DynamicFileControl {
        return new DynamicFileControl({
            ...fileControlModel,
            controlType: DynamicFormElementTypeEnum.FILE,
        });
    }

    public createGroupControl(groupControlModel: ControlBaseModel<any>): DynamicGroupControl {
        return new DynamicGroupControl({
            ...groupControlModel,
            controlType: DynamicFormElementTypeEnum.GROUP,
        });
    }

    public createHiddenControl(hiddenControlModel: HiddenControlModel<any>): DynamicHiddenControl<any> {
        return new DynamicHiddenControl({
            ...hiddenControlModel,
            controlType: DynamicFormElementTypeEnum.hidden,
        });
    }

    public createInputNumberControl(inputNumberControlModel: InputNumberControlModel): DynamicInputNumberControl {
        return new DynamicInputNumberControl({
            ...inputNumberControlModel,
            controlType: DynamicFormElementTypeEnum.INPUT_NUMBER,
        });
    }

    public createPhoneControl(phoneControlModel: PhoneControlModel): DynamicPhoneControl {
        return new DynamicPhoneControl({
            ...phoneControlModel,
            controlType: DynamicFormElementTypeEnum.phone,
        });
    }

    public createRadioControl(radioControlModel: RadioControlModel): DynamicRadioControl {
        return new DynamicRadioControl({
            ...radioControlModel,
            controlType: DynamicFormElementTypeEnum.radio,
        });
    }

    public createSelectControl(selectControlModel: SelectControlModel<any>): DynamicSelectControl<any> {
        return new DynamicSelectControl({
            ...selectControlModel,
            controlType: DynamicFormElementTypeEnum.select,
        });
    }

    public createSelectIconControl(selectIconControlModel: SelectIconControlModel<any>): DynamicSelectIconControl<any> {
        return new DynamicSelectIconControl({
            ...selectIconControlModel,
            controlType: DynamicFormElementTypeEnum.SELECT_ICON,
        });
    }

    public createTextAreaControl(textAreaControlModel: TextAreaControlModel): DynamicTextAreaControl {
        return new DynamicTextAreaControl({
            ...textAreaControlModel,
            controlType: DynamicFormElementTypeEnum.textArea,
        });
    }

    public createTextControl(textControlModel: TextControlModel): DynamicTextControl {
        return new DynamicTextControl({
            ...textControlModel,
            controlType: DynamicFormElementTypeEnum.text,
        });
    }

    public createUIDControl(data: Identifiable, order: number): DynamicHiddenControl<string> {
        return this.createHiddenControl({
            key: 'uid',
            order,
            type: 'hidden',
            validators: undefined,
            value: data ? data.uid : null,
        });
    }

    public abstract createFormControls$(dataModel: any): Observable<ControlBase<any>[]>;
}
