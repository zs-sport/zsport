import { Injectable } from '@angular/core';
import {
    Category,
    CategoryEntity,
    CategoryModel,
    CategoryRule,
    CategoryRuleService,
    CategoryUtilService,
    I18nService,
    LanguagesEnum,
    StateUtilService,
} from '@zsport/api';

@Injectable()
export class CategoryUtilServiceImpl extends CategoryUtilService {
    public constructor(private i18NService: I18nService, private stateUtilService: StateUtilService) {
        super();
    }

    public convertEntityToModel(category: CategoryEntity): CategoryModel {
        let updatedCategoryModel: CategoryModel;

        if (!category.uid) {
            const updatedNameI18n: any = {};

            updatedNameI18n[this.i18NService.getActiveLangAsString()] = category.nameI18n;

            category = this.stateUtilService.addDefaultState(category) as CategoryEntity;
            category = this.stateUtilService.addDefaultDates(category) as CategoryEntity;

            updatedCategoryModel = {
                color: category.color,
                dates: category.dates,
                nameI18n: updatedNameI18n,
                rule: this.getCategoryRule(category),
                states: category.states,
                uid: category.uid,
            };
        } else {
            category = this.stateUtilService.updateDates(category) as CategoryEntity;

            updatedCategoryModel = {
                color: category.color,
                dates: category.dates,
                nameI18n: category.nameI18n,
                rule: this.getCategoryRule(category),
                states: category.states,
                uid: category.uid,
            };
        }

        return updatedCategoryModel;
    }

    public convertModelToEntity(categoryModel: CategoryModel): CategoryEntity {
        return {
            ...categoryModel,
            rule: this.getCategoryRule(categoryModel),
        } as CategoryEntity;
    }

    private getCategoryRule(category: Category): CategoryRule {
        return CategoryRuleService.getRuleForCategory(category.nameI18n[LanguagesEnum.en]?.toLowerCase() || '');
    }
}
