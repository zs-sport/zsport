import { firebase } from './firebase.config.dev';

export const environment = {
    availableLangs: ['en', 'hu'],
    defaultLanguage: 'en',
    production: false,
    type: 'develop',
    version: '0.0.0',
    firebase,
};
