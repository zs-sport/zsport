import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DomainUserFormModule } from '@zsport/domain/user/form';

import { EditComponent } from './edit.component';

describe('EditComponent', () => {
    let component: EditComponent;
    let fixture: ComponentFixture<EditComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [EditComponent],
                imports: [DomainUserFormModule],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(EditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
