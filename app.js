//import
const express = require('express')
const app = express()
const port = 5001


//firebase details
var firebaseConfig = {
    apiKey: "AIzaSyCzZ0yojCfeHyhIxfMO_J0v0-u-BLp4lOc",
    authDomain: "smartmenutry2.firebaseapp.com",
    projectId: "smartmenutry2",
    database:"smartmenutry2-default-rtdb.firebaseio.com",
    storageBucket: "smartmenutry2.appspot.com",
    messagingSenderId: "99896387994",
    appId: "1:99896387994:web:1adab61c10cd31f92a7223"
  };

firebase.initializeApp(firebaseConfig);

//start files
app.use(express.static('public'))
app.use('/js',express.static(__dirname + 'public/js'))


app.set('views','./views')
app.set('view engine','ejs')


app.post("/login", (req, res) => {
    console.log(req.body)
    var userid = req.body.username;
    var password = req.body.password;

    const promise = firebase.auth().signInWithEmailAndPassword(userid, password);
    promise.catch(e => alert(e.message));

    console.log(userid)
    console.log(password)
    
})

app.get("/admin",(req,res) =>{
    // var firebaseConfig = {
    //     apiKey: "AIzaSyCzZ0yojCfeHyhIxfMO_J0v0-u-BLp4lOc",
    //     authDomain: "smartmenutry2.firebaseapp.com",
    //     projectId: "smartmenutry2",
    //     storageBucket: "smartmenutry2.appspot.com",
    //     messagingSenderId: "99896387994",
    //     appId: "1:99896387994:web:1adab61c10cd31f92a7223"
    //   };

    res.render('index')
    var i=0
    // var catV = req.body.category
    // var dishV = req.body.dishes;
    // var descV = req.body.description;
    // var priceV = req.body.price;
    catV = document.getElementById("category").value;
      dishV = document.getElementById("dish").value;
      discV = document.getElementById("discription").value;
      priceV = document.getElementById("price").value;
      document.getElementById("insert").onclick = function insertValue(){
          firebase.database().ref('menu/'+ i).set({
        Category :catV,
        Dishes : dishV,
        Discription:descV,
        Price:priceV
        });
        i=i+1
    }
})

app.get("/getfood",(req,res)=>{
      res.render('menu1')
    var database = firebase.database();
    document.getElementById("insert").onload = function insertValue(){
    database.ref('menu').once('value', function(snapshot){
    if(snapshot.exists()){
        snapshot.forEach(function(data){
            const food = data.val();
            console.log(food)
  
          });
        }
  });
}
})



app.get('',(req,res) => {
    res.render('menu')
})
//listen on port 5001
app.listen(port, () => console.info('Listeningon port'+ `${port}`))