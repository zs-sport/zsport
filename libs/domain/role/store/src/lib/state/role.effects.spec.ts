import { Observable } from 'rxjs';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { provideMockActions } from '@ngrx/effects/testing';
import { StoreModule } from '@ngrx/store';
import { DomainRoleDataModule } from '@zsport/domain/role/data';

import { RoleEffects } from './role.effects';

describe('RoleEffects', () => {
    let actions$: Observable<any>;
    let effects: RoleEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, DomainRoleDataModule, StoreModule.forRoot({})],
            providers: [AngularFirestore, RoleEffects, provideMockActions(() => actions$)],
        });

        effects = TestBed.inject(RoleEffects);
    });

    it('should be created', () => {
        expect(effects).toBeTruthy();
    });
});
