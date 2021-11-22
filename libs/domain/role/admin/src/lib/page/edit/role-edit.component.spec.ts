import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DomainRoleFormModule } from '@zsport/domain/role/form';
import { RoleEditComponent } from './role-edit.component';

describe('RoleEditComponent', () => {
    let component: RoleEditComponent;
    let fixture: ComponentFixture<RoleEditComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [RoleEditComponent],
                imports: [DomainRoleFormModule],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(RoleEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
