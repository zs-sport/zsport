import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    OnChanges,
    Optional,
    Self,
    SimpleChanges,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { DynamicFileControl, DynamicFileElementComponent } from '@zsport/api';
import { NzUploadFile } from 'ng-zorro-antd/upload';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'ngz-file-element',
    templateUrl: './ngz-file-element.component.html',
    styleUrls: ['./ngz-file-element.component.less'],
})
export class NgzFileElementComponent extends DynamicFileElementComponent implements OnChanges {
    public onChange = (value: string) => {};
    public uploading = false;
    public fileList: NzUploadFile[] = [];

    public get fileName(): string {
        return (this.control as DynamicFileControl).fileName || '';
    }

    constructor(@Optional() @Self() ngControl: NgControl) {
        super(ngControl);

        this.fileEvent = new EventEmitter();
    }

    public beforeUpload = (file: NzUploadFile): boolean => {
        this.fileList = this.fileList.concat(file);

        return false;
    };

    public fileHandler(): void {
        this.uploading = true;

        this.fileEvent.emit(this.fileList[0]);
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.control) {
            this.onChange(changes.control.currentValue.value);

            this.uploading = false;
        }
    }

    public registerOnChange(fn: (value: string) => void): void {
        this.onChange = fn;
    }
}
