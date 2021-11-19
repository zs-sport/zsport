import { Subject } from 'rxjs';

export abstract class BaseService {
    protected destroy: Subject<void>;

    public constructor() {
        this.destroy = new Subject();
    }

    public onDestroy(): void {
        this.destroy.next();
        this.destroy.complete();
    }
}
