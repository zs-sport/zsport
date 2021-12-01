import { Observable } from 'rxjs';

import { EntityStateService } from '../../base';
import { PlayerEntity } from '../player';
import { ClubEntity } from './club.entity';

export abstract class ClubStateService extends EntityStateService {
    public abstract dispatchChangeNewEntityButtonEnabled(enabled: boolean): void;
    public abstract dispatchListClubsByAssociationIdAndCategoryIdGenderIdAgeGroupId$(
        associationId: string,
        categoryId: string,
        genderId: string,
        ageGroupId: string
    ): void;
    public abstract dispatchListClubsByCategoryId$(categoryId: string): void;
    public abstract dispatchListPlayersByClubIdAction(clubId: string): void;
    public abstract selectClubsByAssociationIdCategoryIdGenderIdAgeGroupId$(
        associationId: string,
        categoryId: string,
        genderId: string,
        ageGroupId: string
    ): Observable<ClubEntity[]>;
    public abstract selectClubsByCategoryId$(categoryId: string): Observable<ClubEntity[]>;
    public abstract selectNewEntityButtonEnabled$(): Observable<boolean>;
    public abstract selectPlayersByClubId$(clubId: string): Observable<PlayerEntity[] | undefined>;
}
