import { Pipe, PipeTransform } from '@angular/core';
import { Association, Club, I18nService } from '@zsport/api';

@Pipe({
    name: 'ownerName',
})
export class OwnerNamePipe implements PipeTransform {
    public constructor(private i18nService: I18nService) {}

    public transform(owner: any, property: string): string {
        let ownerName: string;

        if (owner && owner.name) {
            ownerName = (owner as Club).name;
        } else {
            ownerName = (owner as Association).nameI18n[this.i18nService.getActiveLang()] as string;
        }

        return ownerName;
    }
}
