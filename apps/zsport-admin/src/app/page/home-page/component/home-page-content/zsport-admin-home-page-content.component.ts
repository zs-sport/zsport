import { takeUntil, tap } from 'rxjs/operators';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { ZsportAdminHomePageContentBase } from '../../base/home-page-content';
import { ZsportAdminHomePageContentService } from '../../service/home-page-content';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ZsportAdminHomePageContentService],
    selector: 'zsport-admin-home-page-content',
    templateUrl: './zsport-admin-home-page-content.component.html',
    styleUrls: ['./zsport-admin-home-page-content.component.scss'],
})
export class ZsportAdminHomePageContentComponent extends ZsportAdminHomePageContentBase implements OnInit {
    public constructor(private componentService: ZsportAdminHomePageContentService) {
        super();
    }

    public ngOnInit(): void {
        this.componentService
            .init$()
            .pipe(
                tap(() => {
                    this.icons = this.componentService.icons;
                }),
                takeUntil(this.destroy)
            )
            .subscribe();
    }
}
