import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DynamicTableComponent, I18nService } from '@zsport/api';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'ngz-dynamic-table',
    templateUrl: './ngz-dynamic-table.component.html',
    styleUrls: ['./ngz-dynamic-table.component.less'],
})
export class NgzDynamicTableComponent extends DynamicTableComponent implements OnInit {
    public constructor(private i18nService: I18nService) {
        super();
    }

    public ngOnInit(): void {
        this.currentLanguage = this.i18nService.getActiveLangAsString();
    }
}
