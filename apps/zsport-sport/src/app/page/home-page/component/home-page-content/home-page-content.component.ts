import { takeUntil, tap } from 'rxjs/operators';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { HomePageContentBase } from '../../base/home-page-content';
import { HomePageContentService } from '../../service/home-page-content';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [HomePageContentService],
    selector: 'zsport-home-page-content',
    templateUrl: './home-page-content.component.html',
    styleUrls: ['./home-page-content.component.scss'],
})
export class HomePageContentComponent extends HomePageContentBase implements OnInit {
    constructor(private componentService: HomePageContentService) {
        super();
    }

    public ngOnInit(): void {
        this.componentService
            .init$()
            .pipe(
                tap(() => {}),
                takeUntil(this.destroy)
            )
            .subscribe();
    }
}
