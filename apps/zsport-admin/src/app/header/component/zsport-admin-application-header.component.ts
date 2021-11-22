import { ReplaySubject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { ZsportAdminApplicationHeaderBase } from '../base';
import { ZsportAdminApplicationHeaderService } from '../service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ZsportAdminApplicationHeaderService],
    selector: 'zsport-admin-application-header',
    templateUrl: './zsport-admin-application-header.component.html',
    styleUrls: ['./zsport-admin-application-header.component.less'],
})
export class ZsportAdminApplicationHeaderComponent extends ZsportAdminApplicationHeaderBase implements OnInit {
    public constructor(private componentService: ZsportAdminApplicationHeaderService) {
        super();

        this.params$$ = new ReplaySubject();
    }

    public ngOnInit(): void {
        this.componentService
            .init$(this.params$$)
            .pipe(
                tap(() => {}),
                takeUntil(this.destroy)
            )
            .subscribe();
    }

    public onLogin(): void {
        this.componentService.logIn();
    }
}
