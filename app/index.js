import 'main.styl';

import firebase from "firebase";
import angular from 'angular';
import angularfire from 'angularfire';
import uiRouter from 'angular-ui-router';

import components from 'components/components.js';

angular.module('cyper-pedia', ['ui.router', 'components', 'firebase'])
.config(($urlRouterProvider) => {
    $urlRouterProvider.otherwise('list');
});

angular.bootstrap(document, ['cyper-pedia']);
