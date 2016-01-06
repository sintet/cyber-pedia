
import enemiesTemplate from "./enemies.html";
import EnemiesDirectiveController from './enemies-controller.js';
// import ChatService from './chat-service.js';

export default function LoginDirective() {

  return {
      template : enemiesTemplate,
      restrict : 'E',
      scope : {},
      controller : EnemiesDirectiveController,
      controllerAs : 'enemiesCtrl',
      bindToController : true,
  };
}
