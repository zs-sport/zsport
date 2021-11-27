import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DomainPersonFormModule } from '@zsport/domain/person/form';

import { PersonEditComponent } from './person-edit.component';

describe('PersonEditComponent', () => {
    let component: PersonEditComponent;
    let fixture: ComponentFixture<PersonEditComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PersonEditComponent],
            imports: [DomainPersonFormModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PersonEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
