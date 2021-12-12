import { PeriodQuantityTypeEnum } from './';
import { ParticipantTypeEnum, PeriodMeasurementEnum, PeriondLongTypeEnum } from './category-resource.enum';

export interface CategoryRuleParticipant {
    number: number;
    type: ParticipantTypeEnum;
}

export interface CategoryRulePeriod {
    longMeasurement: PeriodMeasurementEnum;
    longQuantity: number;
    longType: PeriondLongTypeEnum;
    number: number;
    quantityType: PeriodQuantityTypeEnum;
}

export interface CategoryRuleEventMember {
    number: number;
}

export interface CategoryRuleEventPoint {
    forTheDefeat: number;
    forTheDraw: number;
    forTheWinning: number;
}

export interface CategoryRuleEvent {
    member: CategoryRuleEventMember;
    point: CategoryRuleEventPoint;
}

export interface CategoryRule {
    event: CategoryRuleEvent;
    isTeamCategory?: boolean;
    participant: CategoryRuleParticipant;
    period: CategoryRulePeriod;
}
