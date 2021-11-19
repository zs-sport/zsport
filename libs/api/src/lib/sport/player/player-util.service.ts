import { EntityUtilService } from '../../base';
import { AgeGroup } from '../../age-group';
import { Category } from '../category';
import { Gender } from '../../gender';
import { EventPlayerEntity, EventPlayerModel } from '../../event';

export abstract class PlayerUtilService extends EntityUtilService {
    protected currentLanguage!: string;

    public abstract convertEventPlayerEntityToEventPlayerModel(matchPlayer: EventPlayerEntity): EventPlayerModel;
    public abstract convertEventPlayerModelToEventPlayerEntity(matchPlayerModel: EventPlayerModel): EventPlayerEntity;

    protected abstract generateAgeGroupGenderCategory(ageGroup: AgeGroup, gender: Gender, category: Category): string;
}
