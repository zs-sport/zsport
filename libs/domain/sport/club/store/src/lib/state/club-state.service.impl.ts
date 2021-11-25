import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ClubEntity, ClubStateService, PlayerEntity } from '@zsport/api';

import * as clubActions from './club.actions';
import * as fromClub from './club.reducer';
import * as clubSelectors from './club.selectors';

@Injectable()
export class ClubStateServiceImpl extends ClubStateService {
    public constructor(private store: Store<fromClub.ClubPartialState>) {
        super();
    }

    public dispatchAddEntityAction(entity: ClubEntity): void {
        this.store.dispatch(clubActions.addClub({ club: entity }));
    }

    public dispatchChangeNewEntityButtonEnabled(enabled: boolean): void {
        this.store.dispatch(clubActions.changeNewEntityButtonEnabled({ enabled }));
    }

    public dispatchDeleteEntityAction(clubId: string): void {
        this.store.dispatch(clubActions.deleteClub({ clubId }));
    }

    public dispatchListClubsByAssociationIdAndCategoryIdGenderIdAgeGroupId$(
        associationId: string,
        categoryId: string,
        genderId: string,
        ageGroupId: string
    ): void {
        this.store.dispatch(
            clubActions.listClubsByAssociationIdCategoryIdGenderIdAgeGroupId({
                associationId,
                categoryId,
                genderId,
                ageGroupId,
            })
        );
    }

    public dispatchListClubsByCategoryId$(categoryId: string): void {
        this.store.dispatch(clubActions.listClubsByCategoryId({ categoryId }));
    }

    public dispatchListEntitiesAction(): void {
        this.store.dispatch(clubActions.listClubs());
    }

    public dispatchListPlayersByClubIdAction(clubId: string): void {
        this.store.dispatch(clubActions.listPlayersByClubId({ clubId }));
    }

    public dispatchLoadEntitiesAction(): void {}

    public dispatchLoadEntitiesByIdsAction(uids: string[]): void {
        throw new Error('Method not implemented.');
    }

    public dispatchLoadEntityAction(uid: string): void {
        this.store.dispatch(clubActions.loadClub({ uid }));
    }

    public dispatchSelectClubAction(uid: string): void {
        this.store.dispatch(clubActions.selectClub({ clubId: uid }));
    }

    public dispatchSetSelectedEntityIdAction(entityId: string): void {
        this.store.dispatch(clubActions.setSelectedClubId({ clubId: entityId }));
    }

    public dispatchUpdateEntityAction(entity: ClubEntity): void {
        this.store.dispatch(clubActions.updateClub({ club: entity }));
    }

    public isLoading$(): Observable<boolean> {
        throw new Error('Method not implemented.');
    }

    public selectClubsByAssociationIdCategoryIdGenderIdAgeGroupId$(
        associationId: string,
        categoryId: string,
        genderId: string,
        ageGroupId: string
    ): Observable<ClubEntity[]> {
        return this.store.pipe(
            select(clubSelectors.selectClubsByAssociationCategoryIdGenderIdAgeGroupId(), {
                associationId,
                categoryId,
                genderId,
                ageGroupId,
            })
        );
    }

    public selectClubsByCategoryId$(categoryId: string): Observable<ClubEntity[]> {
        return this.store.pipe(select(clubSelectors.selectClubsByCategoryId(), { categoryId }));
    }

    public selectEntities$(): Observable<ClubEntity[]> {
        return this.store.pipe(select(clubSelectors.selectAllClub));
    }

    public selectEntity$(): Observable<ClubEntity | undefined> {
        return this.store.pipe(select(clubSelectors.selectClub));
    }

    public selectEntityById$(entityId: string): Observable<ClubEntity | undefined> {
        return this.store.pipe(select(clubSelectors.selectClubById(), { clubId: entityId }));
    }

    public selectNewEntityButtonEnabled$(): Observable<boolean> {
        return this.store.pipe(select(clubSelectors.isNewEntityButtonEnabled));
    }

    public selectPlayersByClubId$(clubId: string): Observable<PlayerEntity[] | undefined> {
        return this.store.pipe(select(clubSelectors.selectPlayersByClubId(), { clubId }));
    }

    public selectSelectedEntity$(): Observable<ClubEntity | undefined> {
        return this.store.pipe(select(clubSelectors.selectClub));
    }

    public selectSelectedEntityID$(): Observable<string> {
        return this.store.pipe(select(clubSelectors.getSelectedId));
    }
}
