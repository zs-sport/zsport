import { Identifiable } from '../base';
import { Gender } from '../gender';
import { I18nText } from '../i18n';
import { SkillSet } from '../sport/skill-set';
import { Dates, States } from '../state';

export interface Person extends Identifiable {
    birthDay?: number;
    dates?: Dates;
    email?: string;
    firstName: string;
    gender?: Gender;
    image?: string;
    lastName: string;
    nationalityI18n?: I18nText;
    nickName?: string;
    phone?: string;
    skillSets?: SkillSet[];
    states?: States;
}
