
import listTemplate from "./list.html";
import ListDirectiveController from './list-controller.js';
// import ChatService from './chat-service.js';

export default function ArticleDirective() {

  return {
      template : listTemplate,
      restrict : 'E',
      scope : {},
      controller : ListDirectiveController,
      controllerAs : 'listCtrl',
      bindToController : true,
      // link: linkFun
  };
}
