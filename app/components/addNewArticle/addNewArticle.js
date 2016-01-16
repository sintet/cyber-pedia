// import uiRouter from 'angular-ui-router';
import addNewArticleDirective from './addNewArticle-directive.js';
import Model from '../model.js';
import './addNewArticle.styl';

export default angular.module('addNewArticle', [])
.factory('Model', Model)
.directive('addNewArticleDirective', addNewArticleDirective);
