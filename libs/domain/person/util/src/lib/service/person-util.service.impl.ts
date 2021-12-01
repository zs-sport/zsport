import { Injectable } from '@angular/core';
import { DateUtilService, PersonEntity, PersonModel, PersonUtilService, StateUtilService } from '@zsport/api';

@Injectable()
export class PersonUtilServiceImpl extends PersonUtilService {
    public constructor(private dateUtilService: DateUtilService, private stateUtilService: StateUtilService) {
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
            birthDay: person.birthDay ? this.dateUtilService.convertToDate(person.birthDay) : 0,
            dates: person.dates,
            email: person.email,
            firstName: person.firstName,
            gender: person.gender,
            image: person.image || null,
            lastName: person.lastName,
            nationalityI18n: person.nationalityI18n,
            nickName: person.nickName || null,
            phone: person.phone || null,
            skillSets: person.skillSets || [],
            states: person.states,
            uid: person.uid,
        };

        return updatedPersonModel;
    }

    public convertModelToEntity(personModel: PersonModel): PersonEntity {
        return { ...personModel };
    }
}
