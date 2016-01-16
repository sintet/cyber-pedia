import list from './list/list.js';
import article from './article/article.js';
import addNewArticle from './addNewArticle/addNewArticle.js';


export default angular.module('components', [
  list.name,
  article.name,
  addNewArticle.name
]);
