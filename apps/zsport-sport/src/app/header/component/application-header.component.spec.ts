import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HeaderMenuItemFactory } from '@zs-soft/common/cell/header-menu';
import { UserProfileItemFactory } from '@zs-soft/common/organ/user-profile';
import { AuthenticationStateService } from '@zs-soft/shared/organ-system/authentication/api';
import { MockApplicationHeaderServiceBuilder, MockAuthenticationStateServiceBuilder } from '@zs-soft/test/mock';
import { DynamicModule } from 'ng-dynamic-component';
import { ApplicationHeaderService } from '../service';

import { ApplicationHeaderComponent } from './application-header.component';

describe('ApplicationHeaderComponent', () => {
    let component: ApplicationHeaderComponent;
    let fixture: ComponentFixture<ApplicationHeaderComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [ApplicationHeaderComponent],
                imports: [DynamicModule],
                providers: [
                    {
                        provide: ApplicationHeaderService,
                        useValue: MockApplicationHeaderServiceBuilder.build(),
                    },
                    {
                        provide: AuthenticationStateService,
                        useValue: MockAuthenticationStateServiceBuilder.build(),
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
        fixture = TestBed.createComponent(ApplicationHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
