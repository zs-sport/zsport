import { Pipe, PipeTransform } from '@angular/core';
import { BaseService, I18nService } from '@zsport/api';

@Pipe({
    name: 'i18nName',
})
export class I18nNamePipe extends BaseService implements PipeTransform {
    public constructor(private i18nService: I18nService) {
        super();
    }

    public transform(entity: any, property: string): string {
        return entity ? this.i18nService.getValue(entity[property]) : '';
    }
}
