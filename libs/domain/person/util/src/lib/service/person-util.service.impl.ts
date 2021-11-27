import * as moment from 'moment';

import { Injectable } from '@angular/core';
import {
    Entity,
    GenderUtilService,
    I18nService,
    Model,
    PersonEntity,
    PersonModel,
    PersonUtilService,
    SkillSetUtilService,
    StateUtilService,
} from '@zsport/api';

@Injectable()
export class PersonUtilServiceImpl extends PersonUtilService {
    public constructor(private stateUtilService: StateUtilService) {
        super();
    }

    public convertEntityToModel(person: PersonEntity): PersonModel {
        if (!person.uid) {
            person = this.stateUtilService.addDefaultState(person) as PersonEntity;
            person = this.stateUtilService.addDefaultDates(person) as PersonEntity;
        } else {
            person = this.stateUtilService.updateDates(person) as PersonEntity;
        }

        const updatedPersonModel: PersonModel = {
            birthDay: person.birthDay ? moment(person.birthDay).milliseconds(0).valueOf() : 0,
            dates: person.dates,
            email: person.email,
            firstName: person.firstName,
            gender: person.gender,
            image: person.image || null,
            lastName: person.lastName,
            nationalityI18n: person.nationalityI18n,
            phone: person.phone,
            skillSets: person.skillSets || [],
            states: person.states,
            uid: person.uid,
        };

        return updatedPersonModel;
    }

    public convertModelToEntity(personModel: PersonModel): PersonEntity {
        return { ...personModel };
    }

    public getSimpleEntity(personModel: PersonModel): Partial<PersonModel> {
        return {
            image: personModel.image,
            firstName: personModel.firstName,
            lastName: personModel.lastName,
            uid: personModel.uid,
        };
    }
}
