import { Observable } from 'rxjs';

import { EntityStateService } from '../../base';
import { ArticleEntity } from './article.entity';

export abstract class ArticleStateService extends EntityStateService {
    public abstract dispatchChangeNewEntityButtonEnabled(enabled: boolean): void;
    public abstract dispatchLoadEntityByIdAction(entityId: string): void;
    public abstract dispatchUpdateArticleSocialAction(article: ArticleEntity): void;
    public abstract selectNewEntityButtonEnabled$(): Observable<boolean>;
}
