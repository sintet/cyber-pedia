export default function ListDirectiveController(Model, $firebaseArray, $firebaseObject) {
  let firebaseRef =  new Firebase("https://cyber-pedia.firebaseio.com");
  this.listOfArticles = $firebaseArray(firebaseRef);

  // var refImg = new Firebase("https://cyber-pedia.firebaseio.com/images/");
  // var ImgObj = $firebaseObject(refImg);
  //
  // function saveimage(e1) {
  //    var filename = e1.target.files[0];
  //    var fr = new FileReader();
  //    fr.onload = function (res) {
  //        this.image = res.target.result;
  //        ImgObj.image = res.target.result;
  //        ImgObj.$save();
  //    };
  //
  //    fr.readAsDataURL(filename);
  //     console.log(filename);
  //  }
  //
  // document.getElementById("image-upload").addEventListener('change', saveimage, false);

  // console.log(Img);

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
