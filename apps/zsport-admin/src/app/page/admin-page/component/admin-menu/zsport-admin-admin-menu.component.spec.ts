import { DynamicModule } from 'ng-dynamic-component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NgxPermissionsModule } from 'ngx-permissions';

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LanguagesEnum } from '@zsport/api';
import { CoreI18nModule } from '@zsport/core/i18n';

import { ZsportAdminAdminMenuComponent } from './zsport-admin-admin-menu.component';

describe('ZsportAdminAdminMenuComponent', () => {
    let component: ZsportAdminAdminMenuComponent;
    let fixture: ComponentFixture<ZsportAdminAdminMenuComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [ZsportAdminAdminMenuComponent],
                imports: [
                    DynamicModule,
                    NzMenuModule,
                    NgxPermissionsModule.forRoot(),
                    CoreI18nModule.forRoot({
                        availableLangs: ['hu', 'en'] as LanguagesEnum[],
                        defaultLang: 'hu' as LanguagesEnum,
                        prodMode: false,
                        reRenderOnLangChange: true,
                    }),
                ],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(ZsportAdminAdminMenuComponent);

        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
