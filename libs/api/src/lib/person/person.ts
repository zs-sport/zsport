import { Identifiable } from '../base';
import { Gender } from '../gender';
import { I18nText } from '../i18n';
import { SkillSet } from '../sport/skill-set';
import { Dates, States } from '../state';

export interface Person extends Identifiable {
    birthDay: number;
    dates: Dates | null;
    email: string;
    firstName: string;
    gender: Gender;
    image: string | null;
    lastName: string;
    nationalityI18n?: I18nText;
    nickName: string | null;
    phone: string | null;
    skillSets: SkillSet[];
    states: States | null;
}
