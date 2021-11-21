import { Observable } from 'rxjs';

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { I18nService, I18nUtil } from '@zsport/api';
import { ApplicationHeaderComponent } from '@zsport/shared';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'zs-ngz-application-header',
    templateUrl: './ngz-application-header.component.html',
    styleUrls: ['./ngz-application-header.component.less'],
})
export class NgzApplicationHeaderComponent extends ApplicationHeaderComponent implements OnInit {
    public activeLanguage$!: Observable<string>;

    public constructor(private i18nService: I18nService, private i18nUtil: I18nUtil) {
        super();
    }

    public languageChangeHandler(language: string): void {
        this.i18nUtil.updateLanguage(language);
    }

    public ngOnInit(): void {
        super.ngOnInit();
    }

    protected init(): void {
        this.activeLanguage$ = this.i18nService.activeLanguageChanges$();
    }
}
