import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DynamicTableService } from '@zsport/api';
import { DomainUserTableModule } from '@zsport/domain/user/table';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
    let component: ListComponent;
    let fixture: ComponentFixture<ListComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [ListComponent],
                imports: [DomainUserTableModule],
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
        fixture = TestBed.createComponent(ListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
