import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { EntityQuantitiesService } from '../../service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'zsport-entity-quantities',
    templateUrl: './entity-quantities.component.html',
    styleUrls: ['./entity-quantities.component.css'],
})
export class EntityQuantitiesComponent implements OnInit {
    @Input()
    public quantityIds: string[] = [];

    public constructor(private componentService: EntityQuantitiesService) {}

    public ngOnInit(): void {}
}
