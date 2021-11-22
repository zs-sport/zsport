import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NgxPermissionsModule } from 'ngx-permissions';

import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, InjectionToken, NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthenticationStateService, I18nUtil } from '@zsport/api';

import { environment } from '../environments/environment';
import { ZsportAdminAppRoutingModule } from './zsport-admin-app-routing.module';
import { ZsportAdminAppComponent } from './zsport-admin-app.component';
import { ZsportAdminCoreModule } from './core/zsport-admin-core.module';
import { ZsportAdminHeaderModule } from './header/zsport-admin-header.module';
import { ZsportAdminI18nInitializer } from './initializer';
import { ZsportAdminPermissionModule } from './permission/zsport-admin-permission.module';
import { ZsportAdminAdminResolverService } from './resolver';

const ENVIRONMENT = new InjectionToken('ENVIRONMENT');

@NgModule({
    declarations: [ZsportAdminAppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AngularFireModule.initializeApp(environment.firebase),
        NzLayoutModule,
        NzMenuModule,
        StoreModule.forRoot({}, {}),
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
    ],
    bootstrap: [ZsportAdminAppComponent],
})
export class ZsportAdminAppModule {}
