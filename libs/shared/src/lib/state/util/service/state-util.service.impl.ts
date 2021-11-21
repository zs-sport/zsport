import { Injectable } from '@angular/core';
import { Dateable, Dates, Stateable, States, StateUtilService } from '@zsport/api';

@Injectable()
export class StateUtilServiceImpl extends StateUtilService {
    constructor() {
        super();
    }

    public addDefaultDates(dateable: Dateable): Dateable {
        return {
            ...dateable,
            dates: this.createDates(),
        };
    }

    public addDefaultState(stateable: Stateable): Stateable {
        const states: States = {
            active: true,
            published: false,
            released: false,
        };

        return {
            ...stateable,
            states,
        };
    }

    public createDates(): Dates {
        const now = new Date();

        const dates: Dates = {
            dateCreated: now.getTime(),
            dateModified: now.getTime(),
            datePublished: 0,
            dateReleased: 0,
        };

        return dates;
    }

    public modifyDates(dates: Dates): Dates {
        const now = new Date();

        const updatedDates: Dates = {
            ...dates,
            dateModified: now.getTime(),
        };

        return updatedDates;
    }

    public updateActiveState(stateable: Stateable): Stateable {
        throw new Error('Method not implemented.');
    }

    public updateDates(dateable: Dateable): Dateable {
        const now = new Date();

        const dates: Dates = {
            dateCreated: dateable.dates?.dateCreated || 0,
            datePublished: dateable.dates?.datePublished || 0,
            dateReleased: dateable.dates?.dateReleased || 0,
            dateModified: now.getTime(),
        };

        return {
            ...dateable,
            dates,
        };
    }

    public updatePublishDate(dateable: Dateable): Dateable {
        throw new Error('Method not implemented.');
    }

    public updatePublishState(stateable: Stateable, isPublished: boolean): Stateable {
        throw new Error('Method not implemented.');
    }

    public updateReleaseDate(dateable: Dateable): Dateable {
        throw new Error('Method not implemented.');
    }

    public updateReleaseState(stateable: Stateable, isReleased: boolean): Stateable {
        throw new Error('Method not implemented.');
    }
}
