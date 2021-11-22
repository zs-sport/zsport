import { EntityUtilService } from '../../base';
import { AgeGroup } from '../../age-group';
import { Category } from '../category';
import { Gender } from '../../gender';
import { EventPlayer } from '../event';

export abstract class PlayerUtilService extends EntityUtilService {
    protected currentLanguage!: string;

    public abstract convertEventPlayerEntityToEventPlayerModel(eventPlayer: EventPlayer): EventPlayer;
    public abstract convertEventPlayerModelToEventPlayerEntity(eventPlayerModel: EventPlayer): EventPlayer;

    protected abstract generateAgeGroupGenderCategory(ageGroup: AgeGroup, gender: Gender, category: Category): string;
}
