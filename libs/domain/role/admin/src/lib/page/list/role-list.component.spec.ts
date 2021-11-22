import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DynamicTableService } from '@zsport/api';

import { DomainRoleTableModule } from '@zsport/domain/role/table';
import { RoleListComponent } from './role-list.component';

describe('RoleListComponent', () => {
    let component: RoleListComponent;
    let fixture: ComponentFixture<RoleListComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [RoleListComponent],
                imports: [DomainRoleTableModule],
                providers: [
                    {
                        provide: DynamicTableService,
                        useValue: {},
                    },
                ],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(RoleListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
