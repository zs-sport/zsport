import {
    ParticipantTypeEnum,
    PeriodMeasurementEnum,
    PeriodQuantityTypeEnum,
    PeriondLongTypeEnum,
} from './category-resource.enum';
import { CategoryRule } from './category-rule';

export class CategoryRuleService {
    private static categoryRules: { [key: string]: CategoryRule } = {
        handball: {
            participant: { number: 2, type: ParticipantTypeEnum.TEAM },
            event: { member: { number: 16 }, point: { forTheDefeat: 0, forTheDraw: 1, forTheWinning: 2 } },
            period: {
                number: 2,
                longType: PeriondLongTypeEnum.TIME,
                longMeasurement: PeriodMeasurementEnum.MINUTE,
                longQuantity: 30,
                quantityType: PeriodQuantityTypeEnum.GOAL,
            },
            isTeamCategory: true,
        },
    };

    public static getRuleForCategory(categoryName: string): CategoryRule {
        const categoryRule: CategoryRule = this.categoryRules[categoryName];

        if (!categoryRule) {
            throw new Error(`The requested category rule is not existed by ${categoryName}!`);
        } else {
            return categoryRule;
        }
    }
}
