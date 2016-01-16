export default function addNewArticleDirectiveController(Model, $state,$firebaseArray) {
  this.listOfArticles = Model.getListOfArticles();
  this.state = $state;
  this.article = {};

  this.listOfArticles.$loaded().then(
      (list) => this.article =  Model.getArticleById(this.state.params.id)
  );

}
addNewArticleDirectiveController.$inject = ["Model","$state", "$firebaseArray"];
