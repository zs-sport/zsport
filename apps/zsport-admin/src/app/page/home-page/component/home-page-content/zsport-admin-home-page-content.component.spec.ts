import { NzGridModule } from 'ng-zorro-antd/grid';
import { of } from 'rxjs';

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LanguagesEnum } from '@zsport/api';
import { CoreI18nModule } from '@zsport/core/i18n';

import { ZsportAdminHomePageContentService } from '../../service/home-page-content';
import { ZsportAdminHomePageContentComponent } from './zsport-admin-home-page-content.component';

describe('ZsportAdminHomePageContentComponent', () => {
    let component: ZsportAdminHomePageContentComponent;
    let fixture: ComponentFixture<ZsportAdminHomePageContentComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                imports: [
                    CoreI18nModule.forRoot({
                        availableLangs: ['hu', 'en'] as LanguagesEnum[],
                        defaultLang: 'hu' as LanguagesEnum,
                        prodMode: false,
                        reRenderOnLangChange: true,
                    }),
                    NzGridModule,
                ],
                declarations: [ZsportAdminHomePageContentComponent],
                providers: [
                    {
                        provide: ZsportAdminHomePageContentService,
                        useValue: {
                            articles$: of([]),
                        },
                    },
                ],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(ZsportAdminHomePageContentComponent);

        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
