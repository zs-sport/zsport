import { ActionEnum } from '../../action';
import { ArticleResourceEnum } from './article-resource.enum';

export class ArticlePermissionsService {
    static readonly createArticleEntity = ActionEnum.CREATE.toString() + ArticleResourceEnum.ARTICLE_ENTITY.toString();
    static readonly deleteArticleEntity = ActionEnum.DELETE.toString() + ArticleResourceEnum.ARTICLE_ENTITY.toString();
    static readonly updateArticleEntity = ActionEnum.UPDATE.toString() + ArticleResourceEnum.ARTICLE_ENTITY.toString();
    static readonly viewArticleEntity = ActionEnum.VIEW.toString() + ArticleResourceEnum.ARTICLE_ENTITY.toString();
}
