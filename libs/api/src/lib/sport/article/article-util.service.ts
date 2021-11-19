import { EntityUtilService } from '../../base';
import { ArticleEntity } from './article.entity';

export abstract class ArticleUtilService extends EntityUtilService {
    public abstract createState(article: ArticleEntity): ArticleEntity;
    public abstract updateState(article: ArticleEntity): ArticleEntity;
}
