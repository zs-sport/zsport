import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NgzHiddenElementComponent } from './ngz-hidden-element.component';

describe('NgzHiddenElementComponent', () => {
    let component: NgzHiddenElementComponent;
    let fixture: ComponentFixture<NgzHiddenElementComponent>;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [NgzHiddenElementComponent],
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(NgzHiddenElementComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
