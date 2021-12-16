import { firebase } from './firebase.config.prod';

export const environment = {
    availableLangs: ['en', 'hu'],
    defaultLanguage: 'hu',
    production: true,
    type: 'production',
    version: '0.0.0',
    firebase,
};
