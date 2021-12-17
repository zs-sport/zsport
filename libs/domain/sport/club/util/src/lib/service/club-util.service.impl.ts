import { Injectable } from '@angular/core';
import {
    CategoryQuantityService,
    CategoryUtilService,
    Club,
    ClubEntity,
    ClubModel,
    ClubUtilService,
    EntityQuantity,
    EntityQuantityEnum,
    StateUtilService,
} from '@zsport/api';

@Injectable()
export class ClubUtilServiceImpl extends ClubUtilService {
    public constructor(
        private categoryQuantityService: CategoryQuantityService,
        private categoryUtilService: CategoryUtilService,
        private stateUtilService: StateUtilService
    ) {
        super();
    }

    public convertEntityToModel(club: ClubEntity): ClubModel {
        let updatedClubModel: ClubModel;

        if (!club.uid) {
            club = this.stateUtilService.addDefaultState(club) as ClubEntity;
            club = this.stateUtilService.addDefaultDates(club) as ClubEntity;
        } else {
            club = this.stateUtilService.updateDates(club) as ClubEntity;
        }

        updatedClubModel = {
            address: club.address || null,
            association: club.association,
            category: club.category,
            logo: club.logo,
            name: club.name,
            dates: club.dates,
            isNational: club.isNational || false,
            officialWebSite: club.officialWebSite || null,
            shortName: club.shortName,
            simpleName: club.simpleName,
            states: club.states,
            uid: club.uid,
            locations: club.locations,
        };

        return updatedClubModel;
    }

    public convertModelToEntity(clubModel: ClubModel): ClubEntity {
        const club = { ...clubModel };

        return club;
    }

    public updateEntityQuantity(entityQuantity: EntityQuantity, club: Club): EntityQuantity {
        let groups: any = { ...entityQuantity.groups };
        let categoryGroup = this.categoryQuantityService.updateGroup(club.category.uid || '', groups);

        groups[EntityQuantityEnum.CATEGORY] = categoryGroup;

        return {
            ...entityQuantity,
            quantity: entityQuantity.quantity + 1,
            groups,
        };
    }
}
