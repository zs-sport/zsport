import { Injectable } from '@angular/core';
import {
    CategoryModel,
    CategoryUtilService,
    ClubEntity,
    ClubModel,
    ClubUtilService,
    StateUtilService,
} from '@zsport/api';

@Injectable()
export class ClubUtilServiceImpl extends ClubUtilService {
    public constructor(private stateUtilService: StateUtilService, private categoryUtilService: CategoryUtilService) {
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
}
