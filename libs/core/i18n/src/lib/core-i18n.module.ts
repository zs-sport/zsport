import { NzI18nModule } from 'ng-zorro-antd/i18n';

import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { TRANSLOCO_CONFIG, TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco';
import { TranslocoLocaleModule } from '@ngneat/transloco-locale';
import { DateUtilService, I18nConfig, I18nService, I18nUtil, LanguagesEnum } from '@zsport/api';

import { DateTimePipe, I18nNamePipe } from './pipe';
import { ActionTimePipe } from './pipe/action-time';
import { DateUtilServiceImpl, NgneatI18nService } from './service';
import { I18nUtilImpl } from './service/i18n-util.impl';
import { translocoLoader } from './transloco.loader';

export const childLoader = [LanguagesEnum.en, LanguagesEnum.hu].reduce((acc: any, lang) => {
    acc[lang] = () => import(`./locale/${lang}.json`);

    return acc;
}, {});

@NgModule({
    declarations: [ActionTimePipe, DateTimePipe, I18nNamePipe],
    exports: [ActionTimePipe, DateTimePipe, I18nNamePipe, TranslocoModule, TranslocoLocaleModule],
    imports: [
        CommonModule,
        NzI18nModule,
        TranslocoLocaleModule.forRoot({
            langToLocaleMapping: {
                en: 'en-GB',
                hu: 'hu-HU',
            },
        }),
    ],
    providers: [
        {
            provide: I18nService,
            useClass: NgneatI18nService,
        },
        {
            provide: I18nUtil,
            useClass: I18nUtilImpl,
        },
    ],
})
export class CoreI18nModule {
    public static forChild(scope: string): ModuleWithProviders<CoreI18nModule> {
        return {
            ngModule: CoreI18nModule,
            providers: [
                {
                    provide: TRANSLOCO_SCOPE,
                    useValue: {
                        scope,
                        childLoader,
                    },
                },
            ],
        };
    }

    public static forRoot(config: I18nConfig): ModuleWithProviders<CoreI18nModule> {
        return {
            ngModule: CoreI18nModule,
            providers: [
                {
                    provide: TRANSLOCO_CONFIG,
                    useValue: config,
                },
                {
                    provide: DateUtilService,
                    useClass: DateUtilServiceImpl,
                },
                {
                    provide: I18nUtil,
                    useClass: I18nUtilImpl,
                },
                translocoLoader,
            ],
        };
    }
}
