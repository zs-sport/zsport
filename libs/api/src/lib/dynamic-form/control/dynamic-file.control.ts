import { FileControlModel } from '../model';
import { ControlBase } from './control-base';

export class DynamicFileControl extends ControlBase<string> {
    public fileEventHandler?: unknown;
    public fileName?: string;

    public constructor(fileControlModel: FileControlModel) {
        super(fileControlModel);

        this.fileEventHandler = fileControlModel.fileEventHandler;
        this.fileName = fileControlModel.fileName;
    }
}
