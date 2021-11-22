import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ZsportAdminHomePageContentComponent } from './component/home-page-content';
import { ZsportAdminHomePageComponent } from './zsport-admin-home-page.component';

describe('ZsportAdminHomePageComponent', () => {
    let component: ZsportAdminHomePageComponent;
    let fixture: ComponentFixture<ZsportAdminHomePageComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [ZsportAdminHomePageComponent, ZsportAdminHomePageContentComponent],
                imports: [NzLayoutModule, NzGridModule],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(ZsportAdminHomePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
