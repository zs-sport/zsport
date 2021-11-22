import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class ZsportAdminAdminResolverService implements Resolve<void> {
    public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {}
}
