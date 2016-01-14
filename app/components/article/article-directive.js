import articleTemplate from "./article.html";
import ArticleDirectiveController from './article-controller.js';
// import ChatService from './chat-service.js';

export default function ArticleDirective() {

  return {
      template : articleTemplate,
      restrict : 'E',
      scope : {},
      controller : ArticleDirectiveController,
      controllerAs : 'articleCtrl',
      bindToController : true,
  };
}
