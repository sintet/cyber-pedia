export default function ListDirectiveController(Model, $firebaseArray, $firebaseObject) {
  let firebaseRef =  new Firebase("https://cyber-pedia.firebaseio.com");
  this.listOfArticles = $firebaseArray(firebaseRef);

  this.addNewArticle = function() {
      let ar = {
        name: this.newName,
        desc: this.desc,
        img: this.imgUrl
      };
      Model.addArticle(ar);
      this.newName="";
      this.desc ="";
      this.imgUrl="";

  };
}

ListDirectiveController.$inject = ["Model", "$firebaseArray","$firebaseObject"];
