import angular from 'angular';

import enemies from './enemies/enemies.js';

export default angular.module('components', [
  enemies.name,
]);
