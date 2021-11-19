import { BaseService } from '../../base';
import { Status } from './status';

export abstract class StatusUtilService extends BaseService {
    protected statuses: any = {
        handball: [
            {
                uid: '40001',
                nameI18n: {
                    hu: 'kész',
                    en: 'ready',
                },
            },
            {
                uid: '40002',
                nameI18n: {
                    hu: 'távozott',
                    en: 'away',
                },
            },
            {
                uid: '40003',
                nameI18n: {
                    hu: 'sérült',
                    en: 'injured',
                },
            },
            {
                uid: '40004',
                nameI18n: {
                    hu: 'felgüggesztett',
                    en: 'suspended',
                },
            },
        ],
    };

    public abstract getStatuses(categoryName: string): Status[];
}
