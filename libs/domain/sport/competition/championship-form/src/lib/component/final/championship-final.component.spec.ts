import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionshipFinalComponent } from './championship-final.component';

describe('ChampionshipFinalComponent', () => {
    let component: ChampionshipFinalComponent;
    let fixture: ComponentFixture<ChampionshipFinalComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ChampionshipFinalComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ChampionshipFinalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
