import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LanguagesEnum, UserHookService } from '@zsport/api';
import { CoreAuthenticationStoreModule } from '@zsport/core/authentication/store';
import { CoreAuthenticationViewModule } from '@zsport/core/authentication/view';
import { CoreAuthorizationDataModule } from '@zsport/core/authorization/data';
import { CoreI18nModule } from '@zsport/core/i18n';
import { CoreStorageDataModule } from '@zsport/core/storage/data';
import { CoreStorageUtilModule } from '@zsport/core/storage/util';
import { DomainGenderUtilModule } from '@zsport/domain/gender/util';
import { DomainLocationDataModule } from '@zsport/domain/location/data';
import { DomainLocationStoreModule } from '@zsport/domain/location/store';
import { DomainLocationUtilModule } from '@zsport/domain/location/util';
import { DomainPersonDataModule } from '@zsport/domain/person/data';
import { DomainPersonStoreModule } from '@zsport/domain/person/store';
import { DomainPersonUtilModule } from '@zsport/domain/person/util';
import { DomainRoleDataModule } from '@zsport/domain/role/data';
import { DomainRoleStoreModule } from '@zsport/domain/role/store';
import { DomainSkillSetUtilModule } from '@zsport/domain/skill-set/util';
import { DomainSportAgeGroupUtilModule } from '@zsport/domain/sport/age-group/util';
import { DomainSportAssociationDataModule } from '@zsport/domain/sport/association/data';
import { DomainSportAssociationStoreModule } from '@zsport/domain/sport/association/store';
import { DomainSportAssociationUtilModule } from '@zsport/domain/sport/association/util';
import { DomainSportCategoryDataModule } from '@zsport/domain/sport/category/data';
import { DomainSportCategoryStoreModule } from '@zsport/domain/sport/category/store';
import { DomainSportCategoryUtilModule } from '@zsport/domain/sport/category/util';
import { DomainSportClubDataModule } from '@zsport/domain/sport/club/data';
import { DomainSportClubStoreModule } from '@zsport/domain/sport/club/store';
import { DomainSportClubUtilModule } from '@zsport/domain/sport/club/util';
import { DomainSportPlayerDataModule } from '@zsport/domain/sport/player/data';
import { DomainSportPlayerStoreModule } from '@zsport/domain/sport/player/store';
import { DomainSportPlayerUtilModule } from '@zsport/domain/sport/player/util';
import { DomainSportTeamDataModule } from '@zsport/domain/sport/team/data';
import { DomainSportTeamStoreModule } from '@zsport/domain/sport/team/store';
import { DomainSportTeamUtilModule } from '@zsport/domain/sport/team/util';
import { DomainUserDataModule } from '@zsport/domain/user/data';
import { DomainUserStoreModule } from '@zsport/domain/user/store';
import { SharedModule, StateUtilModule } from '@zsport/shared';

import { environment } from '../../environments/environment';
import { DefaultUserHookService } from './hook/user';

@NgModule({
    imports: [
        BrowserModule,
        DomainUserDataModule,
        DomainUserStoreModule,
        CoreI18nModule.forRoot({
            availableLangs: environment.availableLangs as LanguagesEnum[],
            defaultLang: environment.defaultLanguage as LanguagesEnum,
            prodMode: environment.production,
            reRenderOnLangChange: true,
        }),
        CoreAuthenticationStoreModule,
        CoreAuthenticationViewModule,
        CoreAuthorizationDataModule,
        CoreStorageDataModule,
        CoreStorageUtilModule,
        DomainGenderUtilModule,
        DomainLocationDataModule,
        DomainLocationStoreModule,
        DomainLocationUtilModule,
        DomainPersonDataModule,
        DomainPersonStoreModule,
        DomainPersonUtilModule,
        DomainSkillSetUtilModule,
        DomainSportAgeGroupUtilModule,
        DomainSportAssociationDataModule,
        DomainSportAssociationStoreModule,
        DomainSportAssociationUtilModule,
        DomainSportCategoryDataModule,
        DomainSportCategoryStoreModule,
        DomainSportCategoryUtilModule,
        DomainSportClubDataModule,
        DomainSportClubStoreModule,
        DomainSportClubUtilModule,
        DomainSportPlayerDataModule,
        DomainSportPlayerStoreModule,
        DomainSportPlayerUtilModule,
        DomainSportTeamDataModule,
        DomainSportTeamStoreModule,
        DomainSportTeamUtilModule,
        DomainRoleDataModule,
        DomainRoleStoreModule,
        StateUtilModule,
        SharedModule,
    ],
    providers: [
        {
            provide: UserHookService,
            useClass: DefaultUserHookService,
        },
    ],
})
export class ZsportAdminCoreModule {}
