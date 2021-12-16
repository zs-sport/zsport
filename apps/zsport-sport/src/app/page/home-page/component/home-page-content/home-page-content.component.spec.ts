import { NzGridModule } from 'ng-zorro-antd/grid';
import { of } from 'rxjs';

import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LanguagesEnum } from '@zs-soft/shared/organ-system/i18n';
import { I18nNamePipe, SharedOrganismNgneatI18nModule } from '@zs-soft/shared/organism/ngneat/i18n';
import { SharedPopulationSportArticleViewModule } from '@zs-soft/shared/population/sport/article/view';
import { SharedPopulationSportMatchTodayMatchesModule } from '@zs-soft/shared/population/sport/match/today-matches';

import { HomePageContentService } from '../../service/home-page-content';
import { HomePageContentComponent } from './home-page-content.component';

describe('HomePageContentComponent', () => {
    let component: HomePageContentComponent;
    let fixture: ComponentFixture<HomePageContentComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                imports: [
                    SharedOrganismNgneatI18nModule.forRoot({
                        availableLangs: ['hu', 'en'] as LanguagesEnum[],
                        defaultLang: 'hu' as LanguagesEnum,
                        prodMode: false,
                        reRenderOnLangChange: true,
                    }),
                    NzGridModule,
                    SharedPopulationSportArticleViewModule,
                    SharedPopulationSportMatchTodayMatchesModule,
                ],
                declarations: [HomePageContentComponent],
                providers: [
                    {
                        provide: HomePageContentService,
                        useValue: {
                            articles$: of([]),
                        },
                    },
                ],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(HomePageContentComponent);

        component = fixture.componentInstance;

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
