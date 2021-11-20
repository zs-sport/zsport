import { takeUntil } from 'rxjs/operators';

import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthenticationStateService, BaseDirective } from '@zsport/api';

@Directive({
    selector: '[zsIsAuthenticated]',
})
export class IsAuthenticatedDirective extends BaseDirective implements OnInit {
    public condition = false;

    constructor(
        private authenticationStateService: AuthenticationStateService,
        private templateRef: TemplateRef<unknown>,
        private viewContainer: ViewContainerRef
    ) {
        super();
    }

    @Input()
    public set zsIsAuthenticated(condition: boolean) {
        this.condition = condition;
    }

    public ngOnInit() {
        this.authenticationStateService
            .selectIsAuthenticated$()
            .pipe(takeUntil(this.destroy))
            .subscribe((isAuthenticated) => {
                if ((isAuthenticated && this.condition) || (!isAuthenticated && !this.condition)) {
                    this.viewContainer.createEmbeddedView(this.templateRef);
                } else {
                    this.viewContainer.clear();
                }
            });
    }
}
