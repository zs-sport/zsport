import { ControlBaseModel } from './control-base.model';

export interface FileControlModel extends ControlBaseModel<any> {
    fileEventHandler: any;
    fileName: any;
}
