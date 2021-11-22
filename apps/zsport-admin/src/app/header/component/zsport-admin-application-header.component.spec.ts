import { DynamicModule } from 'ng-dynamic-component';

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AuthenticationStateService } from '@zsport/api';
import { HeaderMenuItemFactory, UserProfileItemFactory } from '@zsport/shared';

import { ZsportAdminApplicationHeaderService } from '../service';
import { ZsportAdminApplicationHeaderComponent } from './zsport-admin-application-header.component';

describe('ZsportAdminApplicationHeaderComponent', () => {
    let component: ZsportAdminApplicationHeaderComponent;
    let fixture: ComponentFixture<ZsportAdminApplicationHeaderComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [ZsportAdminApplicationHeaderComponent],
                imports: [DynamicModule],
                providers: [
                    {
                        provide: ZsportAdminApplicationHeaderService,
                        useValue: {},
                    },
                    {
                        provide: AuthenticationStateService,
                        useValue: {},
                    },
                    {
                        provide: HeaderMenuItemFactory,
                        useValue: {},
                    },
                    {
                        provide: UserProfileItemFactory,
                        useValue: {},
                    },
                ],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(ZsportAdminApplicationHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
