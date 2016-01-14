export default angular.module('toggler', [
])
.directive('toggler', function(){
  return {
    template : '<a class="toggler" ng-click="isReplyFormOpen = !isReplyFormOpen">add new article</a>',
    restrict : 'E',
    scope : {},
    controller : TogglerDirectiveController,
    controllerAs : 'togglerCtrl',
    bindToController : true,
  };
});

function TogglerDirectiveController(){
  this.clicked = true;
  this.toggler = function(){
    this.clicked = this.clicked === false ? true: false;
  };

}
