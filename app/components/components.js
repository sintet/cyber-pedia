import list from './list/list.js';
import article from './article/article.js';
import toggler from './toggler.js';


export default angular.module('components', [
  list.name,
  article.name,
  toggler.name
]);
