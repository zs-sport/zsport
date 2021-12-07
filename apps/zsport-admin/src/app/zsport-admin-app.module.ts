import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NgxPermissionsModule } from 'ngx-permissions';

import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, InjectionToken, NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthenticationStateService, EntityQuantityStateService, I18nUtil } from '@zsport/api';

import { environment } from '../environments/environment';
import { ZsportAdminCoreModule } from './core/zsport-admin-core.module';
import { ZsportAdminHeaderModule } from './header/zsport-admin-header.module';
import { ZsportAdminI18nInitializer, ZsportAdminQuantityInitializer } from './initializer';
import { ZsportAdminPermissionModule } from './permission/zsport-admin-permission.module';
import { ZsportAdminAdminResolverService } from './resolver';
import { ZsportAdminAppRoutingModule } from './zsport-admin-app-routing.module';
import { ZsportAdminAppComponent } from './zsport-admin-app.component';
import { localStorageSync } from 'ngrx-store-localstorage';

const ENVIRONMENT = new InjectionToken('ENVIRONMENT');

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return localStorageSync({
        keys: [
            {
                association: ['ids', 'entities'],
                category: ['ids', 'entities'],
                club: ['ids', 'entities'],
                competition: ['ids', 'entities'],
                event: ['ids', 'entities'],
                location: ['ids', 'entities'],
                person: ['ids', 'entities'],
                player: ['ids', 'entities'],
                role: ['ids', 'entities'],
                team: ['ids', 'entities'],
                user: ['ids', 'entities'],
            },
        ],
        rehydrate: true,
    })(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
    declarations: [ZsportAdminAppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AngularFireModule.initializeApp(environment.firebase),
        NzLayoutModule,
        NzMenuModule,
        StoreModule.forRoot({}, { metaReducers }),
        EffectsModule.forRoot(),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production,
        }),
        NgxPermissionsModule.forRoot(),
        ZsportAdminAppRoutingModule,
        ZsportAdminCoreModule,
        ZsportAdminHeaderModule,
        ZsportAdminPermissionModule,
    ],
    providers: [
        ZsportAdminAdminResolverService,
        {
            provide: ENVIRONMENT,
            useValue: environment,
        },
        {
            provide: APP_INITIALIZER,
            useFactory: ZsportAdminI18nInitializer,
            deps: [AuthenticationStateService, ENVIRONMENT, I18nUtil],
            multi: true,
        },
        {
            provide: APP_INITIALIZER,
            useFactory: ZsportAdminQuantityInitializer,
            deps: [EntityQuantityStateService],
            multi: true,
        },
    ],
    bootstrap: [ZsportAdminAppComponent],
})
export class ZsportAdminAppModule {}
