import 'main.styl';
import angular from 'angular';
import uiRouter from 'angular-ui-router';

import components from 'components/components.js';

angular.module('cyper-pedia', ['ui.router', 'components'])
.config(($urlRouterProvider) => {
    $urlRouterProvider.otherwise('/');
});

angular.bootstrap(document, ['cyper-pedia']);
