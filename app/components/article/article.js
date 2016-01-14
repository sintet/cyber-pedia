import uiRouter from 'angular-ui-router';
import articleDirective from './article-directive.js';
import Model from "../model.js";
import './article.styl';

export default angular.module('article', [
  uiRouter
])
.config(($stateProvider) => {
  $stateProvider
    .state('article', {
      url: '/article/:id',
      template: '<article></article>'
    });
})
.factory('Model', Model)
.directive('article', articleDirective);
