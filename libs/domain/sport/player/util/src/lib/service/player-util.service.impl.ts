import * as moment from 'moment';

import { Injectable } from '@angular/core';
import {
    AgeGroup,
    Category,
    Gender,
    I18nService,
    EventPlayer,
    Person,
    PersonModel,
    PersonUtilService,
    PlayerEntity,
    PlayerModel,
    PlayerUtilService,
    StateUtilService,
} from '@zsport/api';

@Injectable()
export class PlayerUtilServiceImpl extends PlayerUtilService {
    public constructor(
        private i18nService: I18nService,
        private stateUtilService: StateUtilService,
        private personUtilService: PersonUtilService
    ) {
        super();
    }

    public convertModelToEntity(playerModel: PlayerModel): PlayerEntity {
        const player = { ...playerModel };

        return player;
    }

    public convertEntityToModel(player: PlayerEntity): PlayerModel {
        if (!player.uid) {
            player = this.stateUtilService.addDefaultState(player) as PlayerEntity;
            player = this.stateUtilService.addDefaultDates(player) as PlayerEntity;
        } else {
            player = this.stateUtilService.updateDates(player) as PlayerEntity;
        }

        const updatedPlayerModel: PlayerModel = {
            fromDate: moment(player.fromDate).milliseconds(0).valueOf(),
            person: this.personUtilService.convertEntityToModel(player.person, false) as Person,
            clubId: player.clubId,
            dates: player.dates,
            contractTime: player.contractTime || null,
            endDate: player.endDate ? moment(player.endDate).milliseconds(0).valueOf() : null,
            number: player.number,
            position: player.position,
            price: player.price || null,
            priceCurrency: player.priceCurrency || null,
            status: player.status,
            states: player.states,
            uid: player.uid || null,
        };

        return updatedPlayerModel;
    }

    public convertEventPlayerEntityToEventPlayerModel(eventPlayer: EventPlayer): EventPlayer {
        if (!eventPlayer.uid) {
            eventPlayer = this.stateUtilService.addDefaultState(eventPlayer) as EventPlayer;
            eventPlayer = this.stateUtilService.addDefaultDates(eventPlayer) as EventPlayer;
        } else {
            eventPlayer = this.stateUtilService.updateDates(eventPlayer) as EventPlayer;
        }

        const updatedPlayerModel: EventPlayer = {
            fromDate: moment(eventPlayer.fromDate).milliseconds(0).valueOf(),
            person: this.personUtilService.convertEntityToModel(eventPlayer.person, false) as PersonModel,
            clubId: eventPlayer.clubId,
            dates: eventPlayer.dates,
            contractTime: eventPlayer.contractTime || null,
            endDate: eventPlayer.endDate ? moment(eventPlayer.endDate).milliseconds(0).valueOf() : null,
            isLineups: eventPlayer.isLineups,
            number: eventPlayer.number,
            position: eventPlayer.position,
            price: eventPlayer.price || null,
            priceCurrency: eventPlayer.priceCurrency || null,
            status: eventPlayer.status,
            states: eventPlayer.states,
            uid: eventPlayer.uid || null,
        };

        return updatedPlayerModel;
    }

    public convertEventPlayerModelToEventPlayerEntity(eventPlayerModel: EventPlayer): EventPlayer {
        const player = { ...eventPlayerModel };

        return player;
    }

    protected generateAgeGroupGenderCategory(ageGroup: AgeGroup, gender: Gender, category: Category): string {
        return `${ageGroup.uid}_${gender.uid}_${category.uid}`;
    }
}
