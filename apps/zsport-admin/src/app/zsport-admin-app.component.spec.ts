import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ZsportAdminAppComponent } from './zsport-admin-app.component';

describe('ZsportAdminAppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [ZsportAdminAppComponent],
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(ZsportAdminAppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});
