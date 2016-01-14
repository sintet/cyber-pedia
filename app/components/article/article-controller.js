export default function articleDirectiveController(Model, $state) {
  this.listOfArticles = Model.getListOfArticles();
  this.state = $state;
  this.article = Model.getArticleById(this.state.params.id);
  console.log(this.article);

}


articleDirectiveController.$inject = ["Model","$state"];
