import { NzIconModule } from 'ng-zorro-antd/icon';
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
import { AuthenticationStateService, I18nUtil, IconService, LanguagesEnum } from '@zsport/api';
import { CoreI18nModule } from '@zsport/core/i18n';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HeaderModule } from './header/header.module';
import { IconServiceImpl } from './icon';
import { ZssportI18nInitializer } from './initializer';
import { PermissionModule } from './permission/permission.module';
import { HomePageResolverService } from './resolver';

const ENVIRONMENT = new InjectionToken('ENVIRONMENT');

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        CoreModule,
        CoreI18nModule.forRoot({
            availableLangs: environment.availableLangs as LanguagesEnum[],
            defaultLang: environment.defaultLanguage as LanguagesEnum,
            prodMode: environment.production,
            reRenderOnLangChange: true,
        }),
        HeaderModule,
        HttpClientModule,
        AngularFireModule.initializeApp(environment.firebase),
        StoreModule.forRoot({}, {}),
        EffectsModule.forRoot(),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production,
        }),
        NgxPermissionsModule.forRoot(),
        NzIconModule,
        NzLayoutModule,
        NzMenuModule,
        PermissionModule,
    ],
    providers: [
        HomePageResolverService,
        {
            provide: IconService,
            useClass: IconServiceImpl,
        },
        {
            provide: ENVIRONMENT,
            useValue: environment,
        },
        {
            provide: APP_INITIALIZER,
            useFactory: ZssportI18nInitializer,
            deps: [AuthenticationStateService, ENVIRONMENT, I18nUtil],
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
