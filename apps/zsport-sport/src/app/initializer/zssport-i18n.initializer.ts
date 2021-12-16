import { AuthenticationStateService, I18nUtil, UserEntity } from '@zsport/api';

export function ZssportI18nInitializer(
    authenticationStateService: AuthenticationStateService,
    environment: any,
    i18nUtil: I18nUtil
) {
    return () => {
        return new Promise<any>((resolve, reject) => {
            authenticationStateService.selectAuthenticatedUser$().subscribe((authenticatedUser) => {
                const language = (authenticatedUser as UserEntity).language || environment.defaultLanguage;

                i18nUtil.updateLanguage(language);

                resolve(true);
            });
        });
    };
}
