import { Injectable } from '@angular/core';
import { IconService } from '@zsport/api';

@Injectable()
export class IconServiceImpl extends IconService {
    public constructor() {
        super();
    }

    public getIconClass(gender: string): string {
        let iconClass = '';

        switch (gender) {
            case 'female':
                iconClass = 'female';

                break;
            case 'male':
                iconClass = 'male';

                break;
            default:
                iconClass = '';
        }

        return iconClass;
    }

    public getIconName(category: string): string {
        let iconName = '';

        switch (category) {
            case 'Football':
                iconName = 'category:football';

                break;
            case 'Handball':
                iconName = 'category:handball';

                break;
            default:
                iconName = '';
        }

        return iconName;
    }
}
