export default function Model ($firebaseArray){
  let firebaseRef = new Firebase("https://cyber-pedia.firebaseio.com");
  let listOfArticles = $firebaseArray(firebaseRef);

  return {
    getListOfArticles(){
      return  listOfArticles ;
    },
    getArticleById (id){
      return listOfArticles.find( (article) => article.$id===id);
    },
    addArticle(article){
      console.log(article);
      listOfArticles.$add ({
        name: article.name,
        desc: article.desc,
        img: article.img
      });
    }
  };
}

Model.$inject = ["$firebaseArray"];
