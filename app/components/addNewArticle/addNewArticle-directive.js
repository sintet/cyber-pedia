import addNewArticleTemplate from "./addNewArticle.html";
import AddNewArticleDirectiveController from './addNewArticle-controller.js';
// import ChatService from './chat-service.js';

export default function AddNewArticleDirective() {

  return {
      template : addNewArticleTemplate,
      restrict : 'E',
      scope : {},
      controller : AddNewArticleDirectiveController,
      controllerAs : 'addNewArticleCtrl',
      bindToController : true,
  };
}
