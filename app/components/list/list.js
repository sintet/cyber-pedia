import uiRouter from 'angular-ui-router';
import listDirective from './list-directive.js';
import Model from '../model.js';
import './list.styl';

export default angular.module('list', [
  uiRouter
])
.config(($stateProvider) => {
  $stateProvider
    .state('list', {
      url: '/list',
      template: '<list></list>'
    });
})
.factory('Model', Model)
.directive('list', listDirective);
