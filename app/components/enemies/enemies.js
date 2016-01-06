import angular from 'angular';
import uiRouter from 'angular-ui-router';
import enemiesDirective from './enemies-directive.js';
// import AuthService from '../auth/auth-service.js';
import './enemies.styl';

export default angular.module('enemies', [
  uiRouter
])
.config(($stateProvider) => {
  $stateProvider
    .state('enemies', {
      url: '/enemies',
      template: '<enemies></enemies>'
    });
})
// .factory('AuthService', AuthService)
.directive('enemies', enemiesDirective);
