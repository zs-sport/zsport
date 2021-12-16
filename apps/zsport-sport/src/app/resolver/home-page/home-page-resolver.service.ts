import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { ArticleStateService } from '@zsport/api';

@Injectable()
export class HomePageResolverService implements Resolve<void> {
    public constructor(private articleStateService: ArticleStateService) {}

    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {
        this.articleStateService.dispatchListEntitiesAction();
    }
}
