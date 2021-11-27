import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DynamicTableService } from '@zsport/api';
import { DomainPersonTableModule } from '@zsport/domain/person/table';

import { PersonListComponent } from './person-list.component';

describe('PersonListComponent', () => {
    let component: PersonListComponent;
    let fixture: ComponentFixture<PersonListComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [PersonListComponent],
                imports: [DomainPersonTableModule],
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
        fixture = TestBed.createComponent(PersonListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
