import { en_GB, hu_HU, NzI18nService } from 'ng-zorro-antd/i18n';

import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import hu from '@angular/common/locales/hu';
import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { TranslocoLocaleService } from '@ngneat/transloco-locale';
import { I18nUtil } from '@zsport/api';

const ngZorroLanguages: any = {
    en: en_GB,
    hu: hu_HU,
};
const ngLocales: any = {
    en: en,
    hu: hu,
};

@Injectable()
export class I18nUtilImpl extends I18nUtil {
    constructor(
        private translocoService: TranslocoService,
        private translocoLocaleService: TranslocoLocaleService,
        private nzI18nService: NzI18nService
    ) {
        super();
    }

    public languageFormat(language: string): string {
        let locale = '';

        switch (language) {
            case 'en':
                locale = 'en-GB';

                break;
            case 'hu':
                locale = 'hu-HU';

                break;
            default:
                break;
        }
        return locale;
    }

    public updateLanguage(language: string) {
        this.translocoService.setActiveLang(language);
        this.translocoService.load(language);
        this.translocoLocaleService.setLocale(this.languageFormat(language));

        this.nzI18nService.setLocale(ngZorroLanguages[language]);

        registerLocaleData(ngLocales[language]);
    }
}
