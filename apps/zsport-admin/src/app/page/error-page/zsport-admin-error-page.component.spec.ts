import { NzResultModule } from 'ng-zorro-antd/result';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LanguagesEnum } from '@zsport/api';
import { CoreI18nModule } from '@zsport/core/i18n';

import { ZsportAdminErrorPageComponent } from './zsport-admin-error-page.component';

describe('ZsportAdminErrorPageComponent', () => {
    let component: ZsportAdminErrorPageComponent;
    let fixture: ComponentFixture<ZsportAdminErrorPageComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [ZsportAdminErrorPageComponent],
                imports: [
                    HttpClientTestingModule,
                    NzResultModule,
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
        fixture = TestBed.createComponent(ZsportAdminErrorPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
