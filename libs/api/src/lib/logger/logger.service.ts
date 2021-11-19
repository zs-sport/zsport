import { BaseService } from '../base';

export abstract class LoggerService extends BaseService {
    public abstract debug(message: any, ...additional: any[]): void;
    public abstract error(message: any, ...additional: any[]): void;
    public abstract fatal(message: any, ...additional: any[]): void;
    public abstract info(message: any, ...additional: any[]): void;
    public abstract log(message: any, ...additional: any[]): void;
    public abstract trace(message: any, ...additional: any[]): void;
    public abstract warn(message: any, ...additional: any[]): void;
}
