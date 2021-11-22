import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NgxPermissionsModule } from 'ngx-permissions';

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LanguagesEnum } from '@zsport/api';
import { CoreI18nModule } from '@zsport/core/i18n';

import { ZsportAdminAdminPermissionsService } from '../../permission/admin';
import { ZsportAdminAdminMenuComponent } from './component/admin-menu';
import { ZsportAdminAdminPageComponent } from './zsport-admin-admin-page.component';

describe('ZsportAdminAdminPageComponent', () => {
    let component: ZsportAdminAdminPageComponent;
    let fixture: ComponentFixture<ZsportAdminAdminPageComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [ZsportAdminAdminPageComponent, ZsportAdminAdminMenuComponent],
                imports: [
                    NgxPermissionsModule.forRoot(),
                    NzMenuModule,
                    NzBreadCrumbModule,
                    NzLayoutModule,
                    RouterTestingModule,
                    CoreI18nModule.forRoot({
                        availableLangs: ['hu', 'en'] as LanguagesEnum[],
                        defaultLang: 'hu' as LanguagesEnum,
                        prodMode: false,
                        reRenderOnLangChange: true,
                    }),
                ],
                providers: [
                    {
                        provide: ZsportAdminAdminPermissionsService,
                        useValue: {},
                    },
                ],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(ZsportAdminAdminPageComponent);

        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
